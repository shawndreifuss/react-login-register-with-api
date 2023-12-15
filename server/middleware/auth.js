const jwt = require('jsonwebtoken')
require('dotenv').config()


module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if(!authHeader) {
        return res.status(401).json({ error: "Unauthorized, Access Denied "})
    }

    try{
    const decodedToken = jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET)
    
    req.userId = decodedToken.user._id

    next()

    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Access Denied'})
}

};