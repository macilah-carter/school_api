const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Department = schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Department', Department);