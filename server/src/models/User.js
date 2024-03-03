const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: Number, required: false },
    password: { type: String, required: true },
});

const UserModel = model('user', UserSchema);
module.exports = UserModel;
