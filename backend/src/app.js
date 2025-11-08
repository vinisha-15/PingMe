import express from "express";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import path from "path";
import {connectDB} from "./lib/db.js";
import {ENV} from "./lib/env.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app=express();
const __dirname=path.resolve();

const PORT=ENV.PORT|| 5000;

app.use(express.json({limit:"5mb"}));
app.use(cookieParser());

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `);
    connectDB();
})
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));
app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoute);

//make ready for deployment
if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(_,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}



