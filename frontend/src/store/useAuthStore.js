import { create } from "zustand";
import {axiosInstance} from "../lib/axios";
import toast from "react-hot-toast";


export const useAuthStore=create((set)=>({
    authUser:null,
    isCheckingAuth:true,
    isSigningUp:false,
    isLoggingIn:false,

    checkAuth:async()=>{
        try{
            const res=await axiosInstance.get("/auth/check")
            set({authUser:res.data})
        }catch(error){
            console.log("error in auth check",error);
            set({authUser:null})
        }finally{
            set({isCheckingAuth:false})
        }
    },
    signUp:async(userData)=>{
        set({isSigningUp:true})
        try{
            console.log(userData);
            const res=await axiosInstance.post("/auth/signup",userData)
            set({authUser:res.data})
            toast.success("User created successfully")
        }catch(error){
            toast.error(error.response.data.message)
            set({authUser:null})
        }finally{
            set({ isSigningUp: false });
        }
    },
    login:async(userData)=>{
        set({isLoggingIn:true})
        try{
            console.log(userData);
            const res=await axiosInstance.post("/auth/login",userData)
            set({authUser:res.data})
            toast.success("Logged in successfully")
        }catch(error){
            toast.error(error.response.data.message)
            set({authUser:null})
        }finally{
            set({ isLoggingIn: false });
        }
    },
    updateProfile:async(data)=>{
        try{
            const res=await axiosInstance.put("/auth/update-profile",data)
            set({authUser:res.data})
            toast.success("Profile updated successfully")
        }catch(error){
            console.log("error in update profile",error)
            toast.error(error.response.data.message)
        }
    }

}))