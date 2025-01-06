const mongoose = require("mongoose");
const dburl = process.env.DBURL
const dbconnection = async () => {
    try {
        await mongoose.connect(dburl);
        console.log('connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbconnection;