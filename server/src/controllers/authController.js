const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const CONFIG = require('../config/config');
const BlackListModel = require('../models/Blacklist');
const UserModel = require('../models/User');
const { checkToken } = require('../utils');

const checkPassword = (password, userPassword) => {
    try {
        return bcrypt.compare(password, userPassword);
    } catch (error) {
        return false;
    }
};

const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const generateToken = (userInfo, type = 'accessToken') => {
    return jwt.sign(userInfo, CONFIG.JWT_SECRET, {
        expiresIn: CONFIG.JWT_EXPIRY,
    });
};

const isNull = (val) => {
    if (val == null || val == 'null' || val == '' || val == undefined || val == 'undefined') {
        return true;
    }
    if (val == 'false' || val === false) {
        return true;
    }
    return false;
};

function generateOTP() {
    return 123456;
}

const otpStore = {};

const signupOTP = async (req, res) => {
    const { phone, name } = req.body;
    try {
        let user = await UserModel.findOne({ name });
        if (!isNull(user)) {
            return res.status(400).json({
                message: 'Account already present',
                data: {},
            });
        }

        const phoneRegex = /^\d{10}$/;
        const isValidPhoneNumber = phoneRegex.test(phone);

        if (!isValidPhoneNumber) {
            return res.status(400).json({
                message: 'Invalid phone number',
            });
        }

        const otp = generateOTP();
        otpStore[phone] = otp;
        res.status(200).json({ message: 'OTP sent successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const verifyOtp = async (req, res) => {
    try {
        const { pass, name, phone, otp } = req.body;
        const photp = otpStore[phone];
        
        if (photp && photp == otp) {

            let user = new UserModel();
            user.name = name;
            user.phone = phone;
            const hashedPassword = await bcrypt.hash(pass, 10);
            user.password = hashedPassword;

            let sendObject = {
                _id: user._id.toString(),
            };

            let token = generateToken(sendObject, 'accessToken');
            sendObject.accessToken = token;

            if (phone) {
                delete otpStore[phone];
            }
            await user.save()
            res.status(200).json(sendObject);
        } else {
            res.status(400).json({ message: 'Invalid OTP' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const loginUser = async (req, res) => {
    const { name, pass } = req.body;
    try {
        const user = await UserModel.findOne({ name });
        if (user) {
            const isPasswordCorrect = await checkPassword(pass, user.password);
            if (!isPasswordCorrect) {
                return res.status(400).json({
                    message: 'Invalid Password',
                })
            }

            let sendObject = {
                _id: user._id,
                name: user.name,
                phone: user?.phone,
            };
            let token = generateToken(sendObject, 'accessToken');
            sendObject.accessToken = token;
            res.status(200).json({
                data: sendObject,
                message: 'Successfully Logged In',
            });
        } else {
            return res.status(404).json({
                message: 'User Not Found',
            })
        }

    } catch (err) {
        console.log({ err });
        return res.status(500).json({
            message: 'Internal Server Error',
        })
    }
};

const logOut = async (req, res) => {
    try {
        let token = checkToken(req.headers.authorization);
        if (!token) {
            res.status(401).json({
                error: 'Invalid Token',
            });
        }

        const blackList = new BlackListModel({
            token: token,
        });

        await blackList.save();
        res.status(200).json({
            message: 'Successfully Logged Out',
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { isNull, signupOTP, verifyOtp, loginUser, logOut };