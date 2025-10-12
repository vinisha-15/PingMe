import jwt from "jsonwebtoken";
import {ENV} from "./env.js";

export const generateToken=(userId,res)=>{
   const token=jwt.sign({userId},ENV.JWT_SECRET,{
    expiresIn:"7d"
   });
   res.cookie("jwt",token,{
    httpOnly:true, //prevent XSS attacks :cross site scripting
    sameSite:"strict", //prevent CSRF attacks 
    maxAge:7*24*60*60*1000,
    secure:ENV.NODE_ENV=="production"?true:false,
   });
   return token;
}