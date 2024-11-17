const { PDFDocument, cmyk } = require( 'pdf-lib' );
const fontkit = require( '@pdf-lib/fontkit' );
const fs = require( 'fs' );
const { google } = require( 'googleapis' );
const { formattedDate } = require( './formattedDate' );
const {formattedCert} = require( './formateCertid' );
require( 'dotenv' ).config();

const fontUrls = [
  'https://www.1001fonts.com/download/font/vollkorn.semibold.ttf',
  'https://www.1001fonts.com/download/font/roboto.medium.ttf',
];

// function to fetch and embed fonts concurrently using Promise.all()
const fetchAndEmbedFonts = async ( pdfDoc ) => {
  const [font1Bytes, font2Bytes] = await Promise.all(
    fontUrls.map( ( url ) => fetch( url ).then( ( res ) => res.arrayBuffer() ) )
  );
  const [font1, font2] = await Promise.all(
    [font1Bytes, font2Bytes].map( ( bytes ) => pdfDoc.embedFont( bytes ) )
  );
  return { font1, font2 };
};

// Helper function to fetch the PDF from URL
const fetchPdfFromUrl = async ( url ) => {
  const res = await fetch( url );
  if ( !res.ok ) {
    throw new Error( `Failed to fetch PDF: ${ res.statusText }` );
  }
  return await res.arrayBuffer();
};

// Configure the Google Drive API credentials
// console.log( 'Private KEY  =>  ', process.env.GOOGLE_PRIVATE_KEY.replace( /\\n/g, '\n' ) );
const auth = new google.auth.GoogleAuth( {
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  },
  scopes: ['https://www.googleapis.com/auth/drive']
} );

// Function to generate the certificate PDF
exports.generateCertificate = async (name, course, approvalDate, cert_id) => {
  const tempFilePath = 'Certificate.pdf';

  try {
     // Generate cert_id if it's undefined
     if (!cert_id) {
      //const random6Digits = Math.floor(100000 + Math.random() * 900000);
      cert_id = `${name}_${course}_${formattedCert(approvalDate)}`;
    }

    const templateUrl = process.env.CERTIFICATE_TEMPLATE_URL;
    const templateBytes = await fetchPdfFromUrl(templateUrl);

    const pdfDoc = await PDFDocument.load(templateBytes);
    const page = pdfDoc.getPage(0);

    const { width, height } = page.getSize();

    pdfDoc.registerFontkit(fontkit);

    const { font1, font2 } = await fetchAndEmbedFonts(pdfDoc);

    const text1 = name;
    const text2 = `For successfully completing the ${course}`;
    const text3 = `course on ${formattedDate(approvalDate)}.`;
    
    const widthOfText1 = font1.widthOfTextAtSize(text1, 44);
    const widthOfText2 = font2.widthOfTextAtSize(text2, 18);
    const widthOfText3 = font2.widthOfTextAtSize(text3, 18);

    page.moveTo((width / 2) - (widthOfText1 / 2), height / 1.61);
    page.drawText(name, { size: 44, color: cmyk(0.00, 0.28, 0.89, 0.11), font: font1 });
    page.moveTo((width / 2) - (widthOfText2 / 2), height / 1.61 - 43.1);
    page.drawText(text2, { size: 17.8, font: font2 });
    page.moveTo((width / 2) - (widthOfText3 / 2), height / 1.61 - (44 + 17.8 + 10));
    page.drawText(text3, { size: 17.8, font: font2 });

    // Add cert_id
    const certIdText = `Cert ID: ${cert_id}`;
    const certIdPositionY = 40; // Adjust this based on border's y-position
    const certIdPositionX = 120; // Adjust as needed to align with design

    page.moveTo(certIdPositionX, certIdPositionY);
    page.drawText(certIdText, { size: 12, font: font2, color: cmyk(0, 0, 0, 1) });

    const modifiedPdfBytes = await pdfDoc.save();
    fs.writeFileSync(tempFilePath, modifiedPdfBytes);

    const drive = google.drive({ version: 'v3', auth });

    const fileMetadata = {
      name: `${name}_${course}_${tempFilePath}`,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
    };
    const media = {
      mimeType: 'application/pdf',
      body: fs.createReadStream(tempFilePath)
    };

    const file = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id'
    });

    const certificateLink = `https://drive.google.com/file/d/${file.data.id}/view`;

    return certificateLink;
  } catch (error) {
    throw error;
  } finally {
    if (fs.existsSync(tempFilePath)) {
      fs.unlinkSync(tempFilePath);
    }
  }
};

