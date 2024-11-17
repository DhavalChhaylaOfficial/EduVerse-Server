const paymentSuccessEmailTemplate = (name, amount, orderId, paymentId) => {
	return `
	
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Course Payment Confirmation</title>

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
        margin: 0 auto;
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
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .body {
        font-size: 16px;
        margin-bottom: 20px;
      }

      .highlight {
        font-weight: bold;
        color: #00bcd4; /* Cyan color */
      }

      .support {
        font-size: 14px;
        color: #888888;
        margin-top: 20px;
      }

      .cta {
        display: inline-block;
        padding: 10px 20px;
        background-color: #ffd60a;
        color: #000000;
        text-decoration: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px;
      }

      .cta:hover {
        background-color: transparent;
        color: #ffd60a;
        border: 2px solid #ffd60a;
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
          <p class="message">Course Payment Confirmation</p>

          <p>Dear ${name},</p>
          <p>We have successfully received your payment of <span class="highlight">₹${amount}</span>.</p>
          <p>Your Payment ID is <b>${paymentId}</b></p>
          <p>Your Order ID is <b>${orderId}</b></p>
          <p>Thank you for your payment! We appreciate your promptness and look forward to providing you with an excellent learning experience. Should you need any assistance, feel free to contact us anytime.</p>
        </div>

        <div class="support">
          <p>If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:eduverse.portal@gmail.com">eduverse.portal@gmail.com</a>. We are here to help!</p>
        </div>
      </div>
    </div>
  </body>
</html>

`;
}

module.exports = paymentSuccessEmailTemplate
