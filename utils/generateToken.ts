import jwt from "jsonwebtoken"

// const JWT_SECRET = process.env.JWT_SECRET
const JWT_SECRET = "moooooooosss"

// Generate JWT token with user ID and secret key
const generateToken = (id: string) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
