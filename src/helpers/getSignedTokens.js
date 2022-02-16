import jwt from 'jsonwebtoken';

function signJwtToken({ id, name, email }) {
  return jwt.sign(
    {
      id,
      name,
      email,
    },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    {
      expiresIn: '1h',
      audience: id,
    }
  );
}

function signRefreshToken({ id, name, email }) {
  return jwt.sign(
    {
      id,
      name,
      email,
    },
    process.env.REFRESH_TOKEN_SECRET_KEY,
    {
      expiresIn: '1y',
      audience: id,
    }
  );
}

function getSignedTokens(user) {
  const accessToken = signJwtToken(user);
  const refreshToken = signRefreshToken(user);

  return {
    accessToken,
    refreshToken,
  };
}

export default getSignedTokens;
