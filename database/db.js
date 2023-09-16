const mongoose = require("mongoose")
const colors = require('colors')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database connected sucessfully ${mongoose.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Database note connected ${error}`.bgRed.white);
    }
};

module.exports = connectDB;