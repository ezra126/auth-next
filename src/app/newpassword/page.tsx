"use client";
import React, {useState,useEffect} from 'react'
import axios from "axios";
import { useRouter } from 'next/navigation';

const NewPasswordPage = () => {
  const [token, setToken] = useState("");
  const [password , setPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("")
  const router = useRouter()

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
   }, []);
  const updatepassword = async () =>{
    if(password === confirmPassword){
      const response = await axios.post("/api/users/setnewpassword", {password,token});
      alert(response.data.message)
      router.push('/login')

    }
  }
  return (
    <div id="container" className="flex flex-col items-center justify-center min-h-screen py-2">
    <div>New Password</div>
    <div >
      <input 
     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="add new password "
        />
         <input 
     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="add confirm password "
        />
   
    </div>
   
    <button onClick={updatepassword} className="border border-gray-300 rounded w-fit p-2">confirm password</button>
</div>
  )
}

export default NewPasswordPage;