const jwt = require('jsonwebtoken');
const JWT_SECRET='aubjgh';
const fetchUser=(req,res,next)=>{
    const token = req.header('auth-Token');
    if(!token){
        res.status(401).send({error:"please authenticate a valid token"});
    }
    try{
        const data = jwt.verify(token,JWT_SECRET);
        req.user=data.user
        next();
    }
    catch(err){
        res.status(401).send({error:"please authenticate a valid token"});
    }
   
}


module.exports=fetchUser;