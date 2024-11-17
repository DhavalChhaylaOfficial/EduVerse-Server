const passwordResetTemplate = ({ user, resetUrl }) => {
    return `
        <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset</title>
      <style>
          body {
              background-color: #1e1e1e;
              color: #ffffff;
              font-family: Arial, sans-serif;
              padding: 20px;
              margin: 0;
          }
          .container {
              max-width: 600px;
              margin: auto;
              padding: 20px;
              border-radius: 10px;
              background-color: #333333;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
              text-align: center;
          }
          .logo {
              max-width: 150px;
              margin-bottom: 20px;
              width: 100%;
              height: auto;
          }
          h2 {
              color: #ffffff;
              font-size: 1.8em;
              margin: 0;
          }
          .username {
              color: #00e1ff;
              transition: color 0.3s;
          }
          .username:hover {
              color: #ffffff; 
          }
          p {
              color: #bbbbbb;
              line-height: 1.6;
              font-size: 1em;
          }
          .btn {
              display: inline-block;
              padding: 12px 24px;
              font-size: 16px;
              color: #00e1ff; /* Ensures the anchor text is #00e1ff */
              background-color: #000000;
              text-decoration: none;
              border-radius: 5px;
              border: 2px solid #ffffff;
              margin-top: 20px;
              transition: border-color 0.3s, color 0.3s;
          }
          .btn:hover {
              border-color: #00e1ff;
              color: #00e1ff;
          }
          @media (max-width: 768px) {
              .container {
                  padding: 15px;
              }
              h2 {
                  font-size: 1.5em;
              }
              .btn {
                  padding: 10px 20px;
                  font-size: 14px;
              }
          }
  
          @media (max-width: 480px) {
              .container {
                  padding: 10px;
              }
              .logo {
                  max-width: 120px;
              }
              h2 {
                  font-size: 1.2em;
              }
              .btn {
                  padding: 8px 16px;
                  font-size: 12px;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <img src="https://res.cloudinary.com/dqd4sg47k/image/upload/v1731434109/Edu_logo_hfs4bh.png" alt="Eduverse Logo" class="logo">
          
          <h2>Password Reset for <span class="username">${user.firstName} ${user.lastName}</span></h2>
          <p>You are receiving this email because you (or someone else) have requested a password reset for your Eduverse account.</p>
          <p>If you made this request, please click the button below to reset your password:</p>
          <a href="${resetUrl}" class="btn">Reset Password</a>
          <p>If you did not request this change, you can ignore this email.</p>
      </div>
  </body>
  </html>
      `;
  };
  
  module.exports = passwordResetTemplate;