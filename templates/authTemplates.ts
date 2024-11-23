const jwt = require("jsonwebtoken");

const secretKey = "blloooppooop";

const generateToken = (userId: string) => {
  const token = jwt.sign({ userId }, secretKey, { expiresIn: "1d" });

  return token;
};

const verifyMailToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return {
      valid: true,
      payload: decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      error: error.message,
    };
  }
};

const generateResetPasswordToken = (userId: string) => {
  // Generate the token based on user ID and purpose (you can use a library like 'jsonwebtoken' for this)
  const token = "your_token_generation_logic";
  const resetPasswordLink = `https://yourdomain.com/reset-password/${token}`;

  return `
            <h1>Reset Your Password</h1>
            <p>Click the link below to reset your password:</p>
            <a href="${resetPasswordLink}">${resetPasswordLink}</a>
          `;
};

export { generateResetPasswordToken, verifyMailToken, generateToken };
