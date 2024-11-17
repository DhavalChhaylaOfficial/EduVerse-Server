exports.certificateApprovalEmail = (name, course, certificateLink) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Certificate Approval</title>
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
              position: relative;
              z-index: 2;
              overflow: hidden;
          }
          .header {
              text-align: center;
              padding-bottom: 20px;
          }
          .header img {
              max-width: 150px;
              margin-bottom: 10px;
          }
          .header h2 {
              color: #00e1ff;
          }
          .content p {
              font-size: 16px;
              line-height: 1.6;
          }
          .button {
              display: inline-block;
              background-color: #00e1ff;
              color: black;
              padding: 12px 24px;
              text-decoration: none;
              font-size: 16px;
              font-weight: bold;
              border-radius: 4px;
              text-align: center;
              margin-top: 20px;
              transition: background-color 0.3s, transform 0.3s;
          }
          .button:hover {
              background-color: #00b4cc;
              transform: scale(1.05);
          }
          .footer {
              text-align: center;
              font-size: 14px;
              margin-top: 40px;
              color: #bbb;
          }
          @media (max-width: 600px) {
              .container {
                  width: 100%;
                  padding: 15px;
              }
              .header h2 {
                  font-size: 22px;
              }
              .content p {
                  font-size: 14px;
              }
              .button {
                  width: 100%;
                  padding: 14px;
                  font-size: 18px;
              }
          }
          .confetti {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              pointer-events: none;
              z-index: 1;
              overflow: hidden;
          }
          .confetti div {
              position: absolute;
              background-color: orange;
              width: 10px;
              height: 10px;
              animation: confetti-fall 2s ease-out infinite;
          }
          @keyframes confetti-fall {
              0% {
                  transform: translateY(-50px) rotate(0deg);
                  opacity: 1;
              }
              100% {
                  transform: translateY(100vh) rotate(360deg);
                  opacity: 0;
              }
          }
          .confetti div:nth-child(1) { left: 5%; animation-duration: 2s; }
          .confetti div:nth-child(2) { left: 20%; animation-duration: 2.5s; }
          .confetti div:nth-child(3) { left: 35%; animation-duration: 2.8s; }
          .confetti div:nth-child(4) { left: 50%; animation-duration: 2.3s; }
          .confetti div:nth-child(5) { left: 65%; animation-duration: 2s; }
          .confetti div:nth-child(6) { left: 80%; animation-duration: 2.4s; }
          .confetti div:nth-child(7) { left: 90%; animation-duration: 2.7s; }
          .confetti div:nth-child(8) { left: 15%; animation-duration: 3s; }
          .confetti div:nth-child(9) { left: 45%; animation-duration: 2.6s; }
          .confetti div:nth-child(10) { left: 60%; animation-duration: 2.2s; }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <img src="https://res.cloudinary.com/dqd4sg47k/image/upload/v1731434109/Edu_logo_hfs4bh.png" alt="EduVerse Logo">
              <h2>Certificate Approved</h2>
          </div>
          <div class="content">
              <p>Dear ${name},</p>
              <p>Your certificate for the course "<strong>${course}</strong>" has been approved.</p>
              <p>You can download your certificate by clicking the button below:</p>
              <a href="${certificateLink}" class="button">Download Certificate</a>
          </div>
          <div class="footer">
              <p>Best regards,<br> EduVerse</p>
          </div>
          <div class="confetti">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  </body>
  </html>
    `;
  };
  