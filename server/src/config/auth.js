import crypto from 'crypto';

export default {
  secret: crypto
    .createHash('md5')
    .update(process.env.APP_SECRET)
    .digest('hex'),
  expiresIn: '7d',
};
