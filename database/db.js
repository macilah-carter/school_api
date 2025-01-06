const mongoose = require("mongoose");
const dburl = process.env.DBUR
const dbconnection = async () => {
    try {
        await mongoose.connect(dburl);
        console.log('connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbconnection;