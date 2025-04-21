// 
const jwt = require('jsonwebtoken');
// const JWt_SECRET = process.env.JWT_SECRET;
 // Load secret from environment variable
 const JWt_SECRET = 'anasisagood$boy';

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." }); // Return immediately
  }

  try {
    const decoded = jwt.verify(token, JWt_SECRET);
    req.user = decoded.user;
    next(); // Call next only if no response was sent
  } catch (error) {
    return res.status(401).json({ error: "Invalid token." }); // Return immediately
  }
}

module.exports = fetchuser;
