const express=require('express')
const Student=require('../Models/Student')
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
           password:secPass,
           attendance:req.body.attendance
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
        return res.json({success:true,authToken:authToken,user:userdata.userType})
    } catch (error) {
        console.log(error);
        res.json({success:false})
    }
})

router.post('/addstudent',async(req,res)=>{

    try {
        await Student.create({
           name:req.body.name,
           USN:req.body.USN,
           rno:req.body.rno,
           attendance:req.body.attendance
        })  
        res.json({success:true}) 
   } catch (error) {
       console.log(error)
       res.json({success:false})
   }
})

router.get('/takeattendance',async(req,res)=>{

    const response=await Student.find({});
    //console.log(response);
     res.json(response)
})


router.get('/showstudent/:id',async(req,res)=>{
    const id=req.params.id
   // console.log(id)
    response=await Student.findOne({USN:id});
    //console.log(response)
    res.json(response)
})

router.post('/incrattendance',async(req,res)=>{
    
    console.log(req.body.rno)
    try{
        response=await Student.updateOne({rno:req.body.rno},{$inc:{attendance:1}});
        
       // console.log(response)
        res.json(response)
    }
    catch(err){
        console.log(err)
    }

//    const rno=req.body.rno;
//    Student.findOne({rno}).then(std=>{
//     const atd=Number(std.attendance)+1
//    return std.updateOne({rno:rno},{$set:{attendance:atd}})
//    }).then((data)=>{
//          console.log(data)
//         return data
//    }).catch(err=>{
//     console.log(err)
//    })
    
})


module.exports=router

