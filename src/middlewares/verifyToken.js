const jwt = require('jsonwebtoken');
const secretKey = "z5*a5%s9@p0ºz44¨";

function verifyToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({"message": 'Token not found' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({"message": 'Invalid Token'});

    req.user = user;
    next();
  });
}

module.exports = verifyToken;
