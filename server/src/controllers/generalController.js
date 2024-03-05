const nodemailer = require('nodemailer');
const CONFIG = require('../config/config');
const { isValidEmail } = require('./authController');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: CONFIG.SMTP_MAIL,
        pass: CONFIG.SMTP_PASS,
    },
});

const sendMailController = async (req, res) => {
    const { email, subject, msg } = req.body;

    if (!isValidEmail(email)) {
        return res.status(400).json({
            message: 'Enter a valid e-mail address',
        });
    }

    const mailOptions = {
        from: email,
        to: CONFIG.SMTP_MAIL,
        subject: subject,
        text: `<h1>From: ${email}</h1><p>${msg}</p>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: error.toString() });
        }

        res.status(200).json({ message: 'Email sent', info: info.response });
    });
};

module.exports = { sendMailController };