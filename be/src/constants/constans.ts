export const JWTConst = {
  secret: process.env.JWT_SECRET || 'secret',
  expiresIn: process.env.JWT_EXPIRES_IN || '3600s',
};

export const CryptConst = {
  secret: process.env.CRYPT_SECRET || 'secret',
};
