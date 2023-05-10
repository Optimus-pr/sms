const express=require('express')

const router=express.Router();
const User=require('../Models/User')
const {body,validationResult}=require('express-validator');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtSecret="studentmonitoringsystem"


router.post('/createuser',[body('email','Please enter valid email').isEmail(),body('password','min len of password is 5').isLength({min:5})],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    const salt=await bcrypt.genSalt(10);
    let secPass=await bcrypt.hash(req.body.password,salt)

    try {
        await User.create({
           name:req.body.name,
           USN:req.body.USN,
           email:req.body.email,
           password:secPass
        // name:"chandan",
        // email:"chandurgowda@gmail.com",
        // password:"chandan",
        // USN:"01JST20CS039"

        })  
        res.json({success:true}) 
   } catch (error) {
       console.log(error)
       res.json({success:false})
   }
})

router.post('/loginuser',async(req,res)=>{
    
   let USN=req.body.USN;
    try {
        let userdata=await User.findOne({USN});
        if(!userdata)
            return res.status(400).json({errors:"Tryy logging in with correct credentials"})

        const pwdCompare=await bcrypt.compare(req.body.password,userdata.password);

        if(!pwdCompare)
        return res.status(400).json({errors:"Try logging in with correct credentials"})
    
        const data={
            user:{
                id:userdata.id
            }
        }

        const authToken=jwt.sign(data,jwtSecret);
        return res.json({success:true,authToken:authToken})
    } catch (error) {
        console.log(error);
        res.json({success:false})
    }
})

module.exports=router

