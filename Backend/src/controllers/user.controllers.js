import User from "../models/user.models"
import bcrypt from "bcrypt"


//Register user 

export const register = async(req,res) => {
  try{
    const{name,email,password}= req.body

    if(!name || !email || !password){
        res.status(400).json({
            success:false,
            message:"all fields required"
        });
    }
    const existeduser = await User.findone({email})
    if(existeduser){
        res.status(401).json({
            success:false,
            message:"User already exists"
        });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newuser = await User.create({
        name,
        email,
        password : hashedPassword
    })

    

    return res.status(200).json({
        success:true,
        message:"User created successfully",
        newuser
    });
   }
   catch(err){
    res.status(500).json({
        success:false,
        message:"Server error"
    });
   }
};



// Login User

export const login = async(req,res)  => {
    try {
        const{email,password}= req.body
        if(!email || !password){
            res.status(400).json({
                success:false,
                message:"Both email and password are required"
            });
        }
        const existsuser = await User.findone({email})

        if(!existsuser){
            res.status(400).json({
                success:false,
                messgae:"user does not exists"
            });
        }
        const ismatch = await bcrypt.compare(password,user.password)
        if(!ismatch){
            res.status(401).json({
                success:false,
                message:"invalid password"
            });
        }

        return res.status(200).json({
            success:true,
            message:"login successfull"
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}