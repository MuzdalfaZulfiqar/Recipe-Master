const jwt = require("jsonwebtoken")
const jwt_secret = "RecipeMaster"

const fetchUser= (req,res,next)=>{
    // the token will be passed in the header when the user will make request from frontned
    let token = req.header("auth-token")
    // check if the token exists or not
    if(!token){
        return res.status(400).json({ error : "This token does not exist" });
    }
    
    try {
        // token exist so we need to verify now this will give us the payload we passed the id in this case
        // so this will append the req.user with the req data in this way we will be able to verify and associate our user with data he /she is related to 
        let data = jwt.verify(token, jwt_secret)
        req.user = data.user
        next()
    } catch (error) {
        return res.status(400).json({ error : "Token error" });
    }
}


module.exports = fetchUser;
