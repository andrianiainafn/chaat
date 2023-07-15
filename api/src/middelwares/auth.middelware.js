require('dotenv').config()
const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
  console.log(req.headers)
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Forbidden' });
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.user_id;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
  
  module.exports = authMiddleware;

// ,
//      authEmailVerify: async (req , res , next) =>{
//           const token = req.headers.authorization.split(' ')[1]
//           if(!token) return  res.status(403).json({message:'forbidden'})
//           const decoded =  await jwt.verify(token,process.env.JWT_SECRET)
//           // console.log(decoded) 
//           if(!decoded.isVerified) return res.status(401).json({message:'Account not verified'})
//           req.userId = decoded.userId
     
//           next()
//      }