const dotenv = require('dotenv');
dotenv.config();

const CONFIG = {
    DB_URL: process.env.DB_CONNECTION || "",
    PORT: process.env.PORT || 4000,
    JWT_SECRET: process.env.JWT_SECRET || "",
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "",
    JWT_REFRESH_EXPIRY: process.env.JWT_REFRESH_EXPIRY || "",
    JWT_EXPIRY: process.env.JWT_EXPIRY || "",
    SMTP_MAIL: process.env.SMTP_MAIL || "",
    SMTP_PASS: process.env.SMTP_PASS || "",
};

module.exports = CONFIG;