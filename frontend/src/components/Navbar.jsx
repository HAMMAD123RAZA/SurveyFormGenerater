import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click,setClick]=useState(false)
  const handleClick=()=>{
    setClick(!click)
  }
  return (
    <>
    <div className='flex justify-between items-center text-blue-900 font-bold  text-xl py-4 px-2 bg-gray-200' >
    <Link to='/' >
        Builder
      </Link >
      <div className='md:flex gap-4 hidden' >
        <Link to='/' className='text-blue-900 underline' >Home</Link>
        <Link  className='text-blue-900 underline' to='/form' >Create</Link>
        <Link  className='text-blue-900 underline' to='/view' >View</Link>
      </div>
      <Link to='/signup' >Signup</Link>
      <button className='md:hidden ' onClick={handleClick}>{click?<FaXmark />:<FaBars />}</button>
      </div> 
      <div>
      </div>
            {/* mobile */}
{click &&(
  <div className="flex flex-col md:hidden text-center bg-gray-200 ">
            <Link className='text-blue-900 underline' to='/'>Home</Link>
        <Link className='text-blue-900 underline' to='/form'>Create</Link>
        <Link className='text-blue-900 underline' to='view'>View</Link>
        <Link to='/signup' > Signup</Link>

  </div>
)}
    </>
  )
}

export default Navbar
