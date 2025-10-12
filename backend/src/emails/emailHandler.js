import {resendClient,sender} from "../lib/resend.js";
import {createWelcomeEmailTemplate} from "./emailTemplates.js";



export const sendWelcomeEmail=async(email,name,clientURL )=>{
    const {data,error}=await resendClient.emails.send({
        from:`${sender.name} <${sender.email}>`,
        to:email,
        subject:"Welcome to PingMe!",
        html: createWelcomeEmailTemplate(name,clientURL),
    })
    
    if(error){
        console.log("Error sending welcome email:",error);
        throw new Error("Error sending welcome email")
    }else{
        console.log("Welcome Email sent successfully",data)
}
}