const passwordUpdateTemplate = (email, name) => {
  return `

  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Password Update Confirmation</title>
  
      <style>
        body {
          background-color: #121212;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          color: #f3f3f3;
          margin: 0;
          padding: 0;
        }
  
        .container {
          max-width: 600px;
          margin: 40px auto;
          padding: 20px;
          text-align: center;
        }
  
        .card {
          background-color: #1e1e1e;
          padding: 40px 20px;
          border-radius: 12px;
          color: #f3f3f3;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          position: relative;
          border: 2px solid #ffffff;
        }
  
        .logo {
          max-width: 200px;
          margin-bottom: 20px;
        }
  
        .message {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 20px;
        }
  
        .body {
          font-size: 16px;
          margin-bottom: 20px;
        }
  
        .support {
          font-size: 14px;
          color: #888888;
          margin-top: 20px;
        }
  
        .highlight {
          font-weight: bold;
          color: #00e1ff;
          transition: all 0.3s ease;
        }
  
        .highlight:hover {
          color: #ffffff;
        }
  
        @media (max-width: 600px) {
          .container {
            padding: 10px;
          }
  
          .card {
            padding: 20px;
          }
  
          .message {
            font-size: 18px;
          }
  
          .body {
            font-size: 14px;
          }
  
          .logo {
            max-width: 160px;
          }
        }
      </style>
    </head>
  
    <body>
      <div class="container">
        <div class="card">
          <div>
            <a href="">
              <img class="logo" src="https://res.cloudinary.com/dqd4sg47k/image/upload/v1731434109/Edu_logo_hfs4bh.png" alt="Eduverse-Logo" />
            </a>
          </div>
  
          <div class="body">
            <p class="message">Password Update Successfull</p>
  
            <p>Hey ${name},</p>
            <p>Your password has been successfully updated for the email <span class="highlight">${email}</span>.</p>
            <p>If you did not request this password change, please contact us immediately to secure your account.</p>
          </div>
  
          <div class="support">
            <p>If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:eduverse.portal@gmail.com">eduverse.portal@gmail.com</a>. We are here to help!</p>
          </div>
        </div>
      </div>
    </body>
  </html>
  
`;
};

module.exports = passwordUpdateTemplate;
