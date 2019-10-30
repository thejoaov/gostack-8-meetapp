export default {
  host: process.env.MAIL_HOST || 'localhost',
  port: process.env.MAIL_PORT || '2525',
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe MeetApp <noreply@meetapp.com>',
  },
};
