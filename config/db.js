const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_lks2026', 'admin', 'StrongPassword123', {
  host: 'lks-db.cknm6ci28bfu.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'
});

module.exports = sequelize;
