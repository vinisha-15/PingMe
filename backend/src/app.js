import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import path from "path";

const app=express();
dotenv.config();
const __dirname=path.resolve();

const PORT=process.env.PORT|| 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `);
})
app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoute);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(_,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}



