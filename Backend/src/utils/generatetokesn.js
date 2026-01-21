import jwt from "jsonwebtoken"

export const generatetoken = (userid)=>{
    return jwt.sign(
        {id:userid},
        process.env.JWT_SECRET,
        {expiresin:"1d"}
    );
};