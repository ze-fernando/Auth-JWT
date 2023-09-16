const jwt = require('jsonwebtoken');
const secretKey = "z5*a5%s9@p0ºz44¨";

function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) return res.status(401).json({"message": 'Authentication error' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({"message": 'Authentication error'});

    req.user = user;
    next();
  });
}

module.exports = verifyToken;
