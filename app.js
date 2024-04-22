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

app.use('/student', require('./routes/student/auth'));
app.use('/admin', require('./routes/admin/authAdmin'));

app.use('/',verify, require('./routes/student/student'));
app.use('/',verifyAdmin, require('./routes/admin/admin'));


app.listen(port, () => {
    console.log(`app running on ${port}`);
});


