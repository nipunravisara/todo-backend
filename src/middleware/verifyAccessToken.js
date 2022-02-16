import jwt from 'jsonwebtoken';

function verifyAccessToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(500).json({
      success: false,
      status: 401,
      message: 'Unauthorized.',
    });
  }

  const token = authHeader.split(' ')[1];

  return jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET_KEY,
    (error, payload) => {
      if (error) {
        res.status(500).json({
          success: false,
          status: 401,
          message: 'Unauthorized.',
        });
      }

      req.payload = payload;
      next();
    }
  );
}

export default verifyAccessToken;
