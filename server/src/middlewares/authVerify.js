const CONFIG = require('../config/config');
const BlackListModel = require('../models/Blacklist');
const UserModel = require('../models/User');
const { checkToken } = require('../utils');
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        let token = checkToken(req.headers.authorization);
        if (!token) {
            return res.status(401).json({
                error: 'Token not found',
            });
        }
        const blacktoken = await BlackListModel.findOne({ token: token });
        if (blacktoken !== null) {
            return res.status(401).json({
                error: 'Invalid authorization token',
            });
        }
        let secret = CONFIG.JWT_SECRET;
        const { _id } = jwt.verify(token, secret);

        if (!_id) {
            return res.status(401).json({
                error: 'Not authorized',
            });
        } else {
            let user = await UserModel.findOne({ _id });
            let foundIndex = -1;

            if (!user || foundIndex >= 0) {
                return res.status(401).json({
                    error: 'Not authorized',
                });
            }
            res.locals.user = user;
            next();
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: 'Internal Server Error',
        });
    }
};

module.exports = { verifyToken };