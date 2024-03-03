const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CONFIG = require('./config/config');
const authRouter = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());
const port = CONFIG.PORT;

const connectDB = async () => {
    try {
        await mongoose.connect(CONFIG.DB_URL)
        console.log("DB sucess");
    } catch (err) {
        console.log(err, "Mongo Connect Error");
    }
};

connectDB();

app.use('/api/auth', authRouter);
app.get('/api', (req, res) => {
    res.send("Welcome");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});