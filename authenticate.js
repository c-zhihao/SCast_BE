const jwt = require('jsonwebtoken');
require('dotenv').config();


const formatError = (code, message, desc) => {
    var obj = {
        "code": code,
        "message": message,
        "description": desc
    }
    return obj;
    //if want string jsonstringy here
}

function authenticateToken (req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null){
        return res.status(401).send(formatError(401, "User did not send token", token));
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
        if(err){
            return res.status(403).send(formatError(403, "Invalid token or expired", err));
        }
        req.user = user;
        next();
    })
}