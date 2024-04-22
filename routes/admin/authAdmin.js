const express = require('express');
const Admin = require('../../database/schema/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const router = express.Router();

const jwt_secret = 'my secret';


//create a Admin
router.post('/admin', async (req, res) => {
    const {username, email, password } = req.body;
    try {
        const userExist = await Admin.findOne({$or : [{ email}, {username}] });
        if (userExist){
            return res.status(401).json({msg: "User exist"});
        }
        const hashedpwd = await bcrypt.hash(password, 10)
        const user = await Admin.create({username, email, password: hashedpwd});

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
        const admin = await Admin.findOne({email});
        if (!admin){
            return res.status(401).json({msg: "No User with that email does not exist"});
        }
        const isValid = await bcrypt.compare(password, admin.password);
        if (!isValid){
            return res.status(401).json("Password incorrect")
        }
        const token = jwt.sign({ adminId: admin.id, role: admin.role }, jwt_secret, {
            expiresIn: '30m',
        });
        res.cookie('token', token, {httpOnly: true})
        return res.status(200).json({token})
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
});

module.exports = router;