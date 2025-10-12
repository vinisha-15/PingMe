import mongoose from "mongoose";
import {ENV} from "./env.js";
export const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(ENV.MONGO_URI);
        console.log("MongoDB connected",conn.connection.host);
    } catch (error) {
        console.error("MongoDB connection error",error);
        process.exit(1); //1 status code for failure,0 means success
    }
}