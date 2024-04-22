const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Units = new schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Units', Units)