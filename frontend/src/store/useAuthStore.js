import { create } from "zustand";

export const useAuthStore=create((set)=>({
    authUser:{name:"John",_id:123,age:24},
    isLoading:false,

    login:()=>{
        console.log("We just logged");
    }
}))