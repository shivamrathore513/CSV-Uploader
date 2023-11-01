// IMPORTING PACKAGE
const mongoose = require("mongoose");
require('dotenv').config();
const URL = process.env.DATABASE_URL;

const db = () => {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log(`database is connected`)
    }).catch((error)=>{
        console.log(`failed to connect databse, ${error}`);
    })
}

module.exports = db;