import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import  generatetoken  from "../utils/generatetoken.js";


//Register user 

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1️⃣ Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 2️⃣ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // 3️⃣ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4️⃣ Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 5️⃣ Generate token
    const token = generatetoken(user._id);

    // 6️⃣ Send cookie + response
    return res
      .status(201)
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: "User created successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });

  } catch (err) {
    console.error("REGISTER ERROR:", err); // 👈 VERY IMPORTANT
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};




// Login User

export const login = async(req,res)  => {
    try {
        const{email,password}= req.body
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Both email and password are required"
            });
        }
        const existsuser = await User.findOne({email})

        if(!existsuser){
            return res.status(404).json({
                success:false,
                messgae:"user does not exists"
            });
        }
        const ismatch = await bcrypt.compare(password,existsuser.password)
        if(!ismatch){
            return res.status(401).json({
                success:false,
                message:"invalid credentials"
            });
        }

        const token =  generatetoken(existsuser._id);

        return res.status(200)
        .cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV ==="production",
            sameSite:"strict",
            maxAge:24*60*60*1000,

        })
        .json({
            success:true,
            message:"login successfull"
        })

    } catch (error) {
        console.error("LOGIN ERROR:",error);
        return res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}