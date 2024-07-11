const mongoose = require('mongoose')
require('dotenv').config()
const MONGOURI = process.env.MONGOURI

const connectDb = async()=>{
    try {
        await mongoose.connect(MONGOURI).then(()=>{
            console.log('Mongodb connected');
        })
    } catch (error) {
        console.log('Error connecting database');
    }
}

module.exports = connectDb