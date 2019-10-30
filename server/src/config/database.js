require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST || '127.0.0.1',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || null,
  database: process.env.DB_NAME || 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
