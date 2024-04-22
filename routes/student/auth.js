const express = require('express');
const Student = require('../../database/schema/student');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const router = express.Router();

const jwt_secret = 'my secret';


//create a student
router.post('/student', async (req, res) => {
    const {username, email, password } = req.body;
    try {
        const userExist = await Student.findOne({$or : [{ email}, {username}] });
        if (userExist){
            return res.status(401).json({msg: "User exist"});
        }
        const hashedpwd = await bcrypt.hash(password, 10)
        const user = await Student.create({username, email, password: hashedpwd});

        return res.status(200).json({msg: "Added", user});
    } catch (error) {
        console.log(error);
    }
});

router.post('/login', async(req, res) => {
    const { email, password} = req.body
    try {
        if (!email || !password){
            return res.status(401).json({msg: "email and password cannot be empty"})
        }
        const student = await Student.findOne({email});
        if (!student){
            return res.status(401).json({msg: "No User with that email does not exist"});
        }
        const isValid = await bcrypt.compare(password, student.password);
        if (!isValid){
            return res.status(401).json("Password incorrect")
        }
        const token = jwt.sign({studentId: student.id}, jwt_secret, {
            expiresIn: '10m',
            issuer: 'pickurpage.com'
        });
        res.cookie('token', token, {httpOnly: true})
        return res.status(200).json({token})
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
});

module.exports = router;