const Certificate = require( '../models/Certificate' );
const certificateGenerator = require( '../utils/certificateGenerator' );
const nodemailer = require('nodemailer');
const certificateApprovalEmail = require('../mail/templates/certificateTemplate');

// Set up nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Controller for creating a new certificate request
exports.createCertificateRequest = async ( req, res ) => {
  try {
    const { name, course, email } = req.body;

    // Search for a certificate with the matching course and email
    const existingCertificate = await Certificate.findOne( { email, course } );

    if ( existingCertificate ) {
      return res.status( 409 ).json( {
        error: existingCertificate.status === 'pending'
          ? 'Certificate request already exists for the course!'
          : 'Certificate already generated for the course!'
      } );
    }

    // If no existing certificate is found for the same course with same email, create a new request
    const request = new Certificate( { name, course, email, } );
    await request.save();

    res.status( 201 ).json( 'Certificate request submitted successfully.' );
  } catch ( error ) {
    res.status( 500 ).json( { error: 'Failed to submit certificate request!' } );
  }
};

// Controller for retrieving all certificate requests whose status are 'pending'
exports.getAllRequests = async ( req, res ) => {
  try {
    const requests = await Certificate.find( { status: 'pending' } );
    res.status( 200 ).json( requests );
  } catch ( error ) {
    res.status( 500 ).json( { error: 'Failed to retrieve certificate requests!' } );
  }
};

// Controller for approving and generating the certificate requested by User
exports.generateCertificate = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, course, email, approvalDate } = req.body;

    const existingCertificate = await Certificate.findById(_id);
    if (!existingCertificate) {
      return res.status(404).json({ error: 'Certificate not found!' });
    }

    if (name !== existingCertificate.name || course !== existingCertificate.course || email !== existingCertificate.email) {
      return res.status(400).json({ error: 'Name, course, or email do not match the existing certificate details!' });
    }

    const certificateLink = await certificateGenerator.generateCertificate(name, course, approvalDate);

    const updatedCertificate = await Certificate.findByIdAndUpdate(
      _id,
      { approvalDate, certificateLink, status: 'approved' },
      { new: true }
    );
    
    if (!updatedCertificate) {
      return res.status(404).json({ error: 'Failed to update certificate!' });
    }
       // Send email to the user
       const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: `Certificate for ${course}`,
      text: `Dear ${name},\n\nYour certificate for the course "${course}" has been approved.\n\nYou can download your certificate here: ${certificateLink}\n\nBest regards,\nEduVerse`,
      //html: certificateApprovalEmail(name, course, certificateLink),
    };
  
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ error: 'Failed to send email notification!' });
        }
        console.log('Email sent: ' + info.response);
      });
  
    // Respond with success
    res.status(201).json({ message: 'Certificate generated successfully.', certificateLink });
  } catch (error) {
    console.error('Error in generateCertificate controller:', error); // Log the error
    res.status(500).json({ error: 'Failed to create certificate!' });
  }
};


// Controller for retrieving all certificates whose status are 'approved'
exports.getAllCertificates = async ( req, res ) => {
  try {
    const certificates = await Certificate.find( { status: 'approved' } );
    res.status( 200 ).json( certificates );
  } catch ( error ) {
    res.status( 500 ).json( { error: 'Failed to retrieve certificates!' } );
  }
};

// Controller for rejecting(deleting) a certificate request
exports.rejectCertificateRequest = async ( req, res ) => {
  try {
    const { _id } = req.params;
    await Certificate.findByIdAndDelete( _id );
    res.status( 200 ).json( 'Certificate deleted successfully.' );
  } catch ( error ) {
    res.status( 500 ).json( { error: 'Failed to delete the certificate!' } );
  }
};

// Controller for sending the certificate email (optional)
exports.sendCertificateEmail = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params._id);

    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found!' });
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: certificate.email,
      subject: `Certificate for ${certificate.course}`,
      text: `Dear ${certificate.name},\n\nYour certificate for the course "${certificate.course}" has been approved.\n\nYou can download your certificate here: ${certificate.certificateLink}\n\nBest regards,\nCertificate Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email notification!' });
      }
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully.' });
    });

  } catch (error) {
    console.error('Error in sendCertificateEmail controller:', error);
    res.status(500).json({ error: 'Failed to send certificate email!' });
  }
};


