// netlify/functions/send-emails.js
exports.handler = async (event) => {
  // 1. Parse data from the Vue form
  const { name, email, message, recaptchaToken } = JSON.parse(event.body);

  // 2. Get the Secret Key from the Environment (Netlify or .env)
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // 3. Verify with Google
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const response = await fetch(verifyUrl, { method: "POST" });
    const data = await response.json();

    // 4. Check Google's response
    if (!data.success) {
      console.error("Recaptcha failed:", data["error-codes"]);
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "RECAPTCHA_FAILED" }),
      };
    }

    // 5. If success, proceed to send email (e.g. using SendGrid or Nodemailer)
    // ... your email sending logic here ...

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server Error" }),
    };
  }
};