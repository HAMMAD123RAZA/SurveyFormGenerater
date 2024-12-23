import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

  const handleLogin=async()=>{
    try {
      const res= await axios.post("https://survey-form-generater-so7y.vercel.app/login",{
        email,password
      })
      console.log(res.data)
      if(res.data.token){
        localStorage.setItem('token',res.data.token)
        navigate('/')
      }
      setEmail('')
      setPassword('')
      alert(res.data.message)

    } catch (error) {
      if(error.response && error.response.data && error.response.data.message){
        alert(error.response.data.message)
      }
      else{
        console.log(error)
      }
      }
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form  className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Login</h2>
        {/* <div className="mb-4">
          <label className="block text-blue-900 font-bold mb-2" htmlFor="name">Name:</label>
          <input className="w-full border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500" type="text" name="name" placeholder="Name" />
        </div> */}
        <div className="mb-4">
          <label className="block text-blue-900 font-bold mb-2" htmlFor="email">Email:</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)}  className="w-full border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500" type="email" name="email" placeholder="Email" />
        </div>
        <div className="mb-6">
          <label className="block text-blue-900 font-bold mb-2" htmlFor="password">Password:</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500" type="password" name="password" placeholder="Password" />
        </div>
        <button type='button' onClick={handleLogin} className="w-full py-3 bg-blue-800 text-white rounded-lg font-bold hover:bg-blue-600">
            Login
        </button>
        <Link className='font-bold text-blue-600 underline ' to="/signup">SignUP</Link>
      </form>
    </div>
  );
}

export default Login;