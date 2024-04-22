const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Student = new schema({
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
    units: [{
        type: schema.Types.ObjectId,
        ref: 'Units'
    }],
    department: {
        type: schema.Types.ObjectId,
        ref: 'Department'
    }
});

module.exports = mongoose.model('Student', Student)