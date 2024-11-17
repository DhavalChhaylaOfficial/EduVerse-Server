exports.internshipApplicationEmail = (
    fullName,
    desiredRole,
    internshipDuration
  ) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Internship Application Confirmation</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #121212;
              color: #ffffff;
              margin: 0;
              padding: 0;
              overflow: hidden;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 20px auto;
              background-color: #1e1e1e;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
              text-align: center;
          }
          .header img {
              max-width: 150px;
              margin-bottom: 10px;
          }
          .header h2 {
              color: #00e1ff;
              transition: color 0.3s, transform 0.3s;
          }
          .header h2:hover {
              color: #00b4cc;
              transform: scale(1.1);
          }
          .content p {
              font-size: 16px;
              line-height: 1.6;
          }
          .footer {
              font-size: 14px;
              margin-top: 40px;
              color: #bbb;
          }
  
          @media (max-width: 600px) {
              .container {
                  padding: 15px;
              }
              .header h2 {
                  font-size: 22px;
              }
              .content p {
                  font-size: 14px;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <img src="https://res.cloudinary.com/dqd4sg47k/image/upload/v1731434109/Edu_logo_hfs4bh.png" alt="EduVerse-Logo">
              <h2>Application Received</h2>
          </div>
          <div class="content">
              <p>Dear ${fullName},</p>
              <p>Thank you for applying for the <strong>${desiredRole}</strong> internship role.</p>
              <p>Duration: <strong>${internshipDuration}</strong> month(s)</p>
              <p>We will review your application and get back to you shortly.</p>
          </div>
          <div class="footer">
              <p>Best regards,<br>
              Eduverse</p>
          </div>
      </div>
  </body>
  </html>
    `;
  }
  