const jwt = require('jsonwebtoken');

module.exports = userId => {
  const payload = {
      userId
  };
  const secret = process.env.JWT_SECRET || 'coffee';
  const options = {
      expiresIn: '1d'
  };
  return jwt.sign(payload, secret, options);
};