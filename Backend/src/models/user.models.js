import mongoose from "mongoose"

const userschema = new mongoose.Schema({
    UserId:{
        type :String,
        required:true,
        unique:true
    },

    name:{
        type : String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
        select:false,
    },
    phone:{
        type: Number,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    profileImage:{
        type:String,
    },
    createdAt: Date,

})

export default mongoose.model("User",userschema);
