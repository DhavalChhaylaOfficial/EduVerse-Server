const accountCreationTemplate = (name) => {
	return `
	<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Account Registration Confirmation</title>
    <style>
      body {
        background-color: #121212;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.4;
        color: #e0e0e0;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        justify-content: center;
      }

      .card {
        background: #1a1a1a;
        border: 2px solid #ffffff;
        border-radius: 12px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
        text-align: center;
        padding: 30px 20px;
        position: relative;
        overflow: hidden;
        color: #e0e0e0;
        max-width: 100%;
      }

      .sparkle {
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #ffffff;
        border-radius: 50%;
        animation: sparkleAnimation linear infinite;
        opacity: 0.8;
      }

      @keyframes sparkleAnimation {
        0% {
          transform: translateY(-20px) scale(0.6);
          opacity: 0.8;
        }
        100% {
          transform: translateY(100px) scale(1.2);
          opacity: 0;
        }
      }

      .sparkle:nth-child(1) { top: 20%; left: 15%; animation-duration: 3s; }
      .sparkle:nth-child(2) { top: 35%; left: 70%; animation-duration: 4s; }
      .sparkle:nth-child(3) { top: 50%; left: 25%; animation-duration: 3.5s; }
      .sparkle:nth-child(4) { top: 60%; left: 80%; animation-duration: 4.5s; }
      .sparkle:nth-child(5) { top: 75%; left: 30%; animation-duration: 3.8s; }
      .sparkle:nth-child(6) { top: 85%; left: 60%; animation-duration: 4.2s; }

      .logo {
        max-width: 160px;
        margin: 0 auto 20px;
      }

      .message {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 15px;
        color: #e0e0e0;
      }

      .body {
        font-size: 16px;
        margin-bottom: 20px;
      }

      .cta {
        display: inline-block;
        padding: 12px 24px;
        background-color: #000000;
        color: #00e1ff;
        text-decoration: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px;
        transition: all 0.3s ease;
        border: 2px solid #00e1ff;
      }

      .cta:hover {
        color: #ffffff;
        background-color: transparent;
        border: 2px solid #ffffff;
      }

      .support {
        font-size: 14px;
        color: #e0e0e0;
        margin-top: 20px;
      }

      @media (max-width: 600px) {
        .container {
          padding: 15px;
        }

        .card {
          padding: 20px 15px;
        }

        .cta {
          padding: 10px 20px;
        }
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="card">
        <div class="sparkle"></div>
        <div class="sparkle"></div>
        <div class="sparkle"></div>
        <div class="sparkle"></div>
        <div class="sparkle"></div>
        <div class="sparkle"></div>

        <div>
          <a href="">
            <img class="logo" src="https://res.cloudinary.com/dqd4sg47k/image/upload/v1731434109/Edu_logo_hfs4bh.png" alt="Eduverse Logo" />
          </a>
        </div>

        <div class="body">
          <p class="message">Welcome to Eduverse! 🎉</p>
          <p>Dear ${name},</p>
          <p>Congratulations! Your account has been successfully created on Eduverse, and we’re thrilled to have you join our community.</p>
          <p>Get started by logging into your dashboard and exploring our resources.</p>

          <a class="cta" href="http://localhost:3000/dashboard/my-profile">Go to Dashboard</a>
          <p>Happy learning!</p>
        </div>

        <div class="support">
          <p>Need help? Contact us at <a href="mailto:eduverse.portal@gmail.com" style="color: #e0e0e0;">eduverse.portal@gmail.com</a>. We’re here to assist you!</p>
        </div>
      </div>
    </div>
  </body>
</html>
  
  `;
};

module.exports = accountCreationTemplate;
