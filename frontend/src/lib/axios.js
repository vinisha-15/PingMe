import axois from "axois"
export const axiosInstance=axois.create({
    baseURL:import.meta.env.NODE_ENV==="development"?"http://localhost:5000/api":"/api",
    withCredentials:true
})