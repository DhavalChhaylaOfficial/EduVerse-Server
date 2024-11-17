exports.contactUsEmail = (
  email,
  firstName,
  lastName,
  message,
  phoneNo,
  countryCode
) => {
  return `
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Form Confirmation</title>

  <style>
    body {
      background-color: #121212;
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.4;
      color: #ffffff;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      padding: 30px;
      background-color: #1e1e1e;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      text-align: center;
    }

    .logo {
      max-width: 200px;
      margin-bottom: 20px;
    }

    .message {
      font-size: 18px;
      font-weight: bold;
      color: #00e1ff;
      margin-bottom: 20px;
    }

    table {
      width: 100%;
      margin-top: 20px;
      border-collapse: collapse;
    }

    td {
      padding: 10px;
      text-align: left;
      font-size: 16px;
      color: #ffffff; /* Ensures table data is visible */
    }

    .support {
      font-size: 14px;
      color: #999999;
      margin-top: 20px;
    }

    .highlight {
      font-weight: bold;
    }

    @media (max-width: 600px) {
      .container {
        width: 100%;
        padding: 15px;
      }
      .logo {
        max-width: 150px;
      }
      .message {
        font-size: 16px;
      }
      .body {
        font-size: 14px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <!-- Header -->
    <div>
        <img class="logo" src="https://res.cloudinary.com/dqd4sg47k/image/upload/v1731434109/Edu_logo_hfs4bh.png" alt="EduVerse-Logo" />
    </div>

    <!-- Message -->
    <p class="message">Contact Form Confirmation</p>

    <!-- Form-like Table Structure -->
    <table>
      <tr>
        <td><strong>Name:</strong></td>
        <td>${firstName} ${lastName}</td>
      </tr>
      <tr>
        <td><strong>Email:</strong></td>
        <td>${email}</td>
      </tr>
      <tr>
        <td><strong>Phone Number:</strong></td>
        <td>${countryCode} ${phoneNo}</td>
      </tr>
      <tr>
        <td><strong>Message:</strong></td>
        <td>${message}</td>
      </tr>
    </table>

    <p style="color: #ffffff">Thank you for contacting us. We have received your message and will respond to you as soon as possible. We appreciate your interest and will get back to you shortly.</p>

    <!-- Footer -->
    <div class="support">
      <p>If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:info@eduverse.com" style="color: #ffd60a;">info@eduverse.com</a>. We are here to help!</p>
    </div>
  </div>
</body>
</html>

  `;
}
