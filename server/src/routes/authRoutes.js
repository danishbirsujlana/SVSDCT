const express = require('express');
const { signupOTP, verifyOtp, loginUser, logOut } = require('../controllers/authController');
const { verifyToken } = require('../middlewares/authVerify');

const authRouter = express.Router();

authRouter.post("/sendotp", signupOTP);
authRouter.post("/verifyotp", verifyOtp);
authRouter.post("/loginuser", loginUser);
authRouter.get("/logout", verifyToken, logOut);

module.exports = authRouter;