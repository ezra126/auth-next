"use client";

import { useState } from "react";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email,setEmail] = useState("")

  const sentEmail = async ()=>{
    const response = await axios.post("/api/users/forgotpassword", {email});
    alert(response);
  }

  return (
    <div id="container" className="flex flex-col items-center justify-center min-h-screen py-2">
        <div>Add Email To Reset Password</div>
        <div >
          <input 
         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="add email "
            />
       
        </div>
       
        <button onClick={sentEmail} className="border border-gray-300 rounded w-fit p-2">send email</button>
    </div>
  )
}

export default ForgotPasswordPage;