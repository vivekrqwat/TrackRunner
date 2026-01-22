import jwt from "jsonwebtoken"

const generatetoken = (userid)=>{
    return jwt.sign(
        {id:userid},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRY},
    );
};

export default generatetoken;