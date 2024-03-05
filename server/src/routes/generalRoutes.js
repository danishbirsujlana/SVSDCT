const express = require('express');
// const { verifyToken } = require('../middlewares/authVerify');
const { sendMailController } = require('../controllers/generalController');

const genRouter = express.Router();

genRouter.post("/send-mail", sendMailController);

module.exports = genRouter;