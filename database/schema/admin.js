const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Admin = new schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Admin'
    }
});

module.exports = mongoose.model('Admin', Admin);