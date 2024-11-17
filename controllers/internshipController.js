const { InternshipApplication } = require("../models/InternshipApplication");
const nodemailer = require("nodemailer");
const internshipApplicationEmail = require('../mail/templates/internshipApplication');

// Controller for handling internship applications
exports.submitInternshipApplication = async (req, res) => {
    try {
      const application = new InternshipApplication(req.body);
      await application.save();
  
      // Set up Nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });
  
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: application.email,
        subject: "Internship Application Success",
        //html: internshipApplicationEmail(application.fullName, application.desiredRole, application.internshipDuration)
        text: `Dear ${application.fullName},\n\nThank you for applying for the ${application.desiredRole} internship Domain.\n\nDuration: ${application.internshipDuration} month(s)\n\nWe will review your application and get back to you shortly.\n\nBest regards,\nEduVerse`,
      };
  
      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email:", error);  // Log the error
          return res.status(500).json({ message: "Application saved, but email failed to send." });
        }
        console.log("Email sent:", info);  // Log email sent details
        res.status(200).json({
          message: "Application submitted successfully and email sent!",
        });
      });
      
    } catch (error) {
      console.error("Error submitting application:", error);  // Log the error
      res.status(500).json({ message: "Failed to submit application." });
    }
  };
  
