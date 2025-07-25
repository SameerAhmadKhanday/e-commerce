import validator from 'validator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";


const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


// route for user login

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" }); // ⬅️ Add return
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      return res.json({ success: true, token }); // ⬅️ Add return
    } else {
      return res.json({ success: false, message: "Invalid credentials" }); // ⬅️ Add return
    }

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message }); // ⬅️ Add return
  }
};


//route for user registration
const registerUser = async (req,res)=>{
    try{
        const {name,email,password} = req.body;

        // checking user alreday exist or not
        const exist = await userModel.findOne({email});
        if(exist){
            return res.json({sucess:false, message:"User already exists"})
        }
        // validating email format & string password
        if(!validator.isEmail(email)){
            return res.json({sucess:false, message:"please enter a valid email"})
        }
        if(password.length < 8 ){
            return res.json({sucess:false, message:"please enter a strong password"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token =  createToken(user._id)
        res.json({sucess:true,token})


    }catch(error){
        console.log(error);
        res.json({sucess:false,message:error.message})
    }
    
}


//route for admin login
const adminLogin = async (req,res)=>{

    try{

        const {email,password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({sucess:true,token})
        }else{
            res.json({success:false,message:"Invalid credentials"})
        }

    }catch(error){
        console.log(error);
        res.json({sucess:false,message:error.message})
    }

}



export{ loginUser,registerUser,adminLogin}