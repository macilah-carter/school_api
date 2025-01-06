require('dotenv').config()
const express = require('express');
const db = require('./database/db');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const verify  = require('./routes/token/verify');
const verifyAdmin  = require('./routes/token/verifyAdmin');



db()

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//loggin and signup
app.use('/student', require('./routes/student/auth'));
app.use('/admin', require('./routes/admin/authAdmin'));

//crud
// app.use('/student',verify, require('./routes/student/student'));
// app.use('/admin',verifyAdmin, require('./routes/admin/admin'));

app.get('/',(req,res)=>{
    res.send("Hello, This is the home page")
})
app.listen(port, () => {
    console.log(`app running on ${port}`);
});


