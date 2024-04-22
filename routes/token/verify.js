const jwt = require('jsonwebtoken')
const jwt_secret = 'my secret';


const verify = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    try {
        if(!token){
            return res.status(201).json({msg: "Access Denied"});
        }
        
        const decoded = jwt.verify(token, jwt_secret);
        req.studendId = decoded.studendId;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
}

module.exports = verify;