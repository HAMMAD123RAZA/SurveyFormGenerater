import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click,setClick]=useState(false)
  const handleClick=()=>{
    setClick(!click)
  }
  return (
    <>
    <div className='flex justify-between items-center py-4 px-2 bg-gray-200' >
    <div>
        logo
      </div>
      <div className='md:flex gap-4 hidden' >
        <a  className='text-blue-600 underline' href="">Home</a>
        <a  className='text-blue-600 underline' href="">Home</a>
        <a  className='text-blue-600 underline' href="">Home</a>
        <a  className='text-blue-600 underline' href="">Home</a>
      </div>
      <button className='hidden md:block' >signup</button>
      <button className='md:hidden ' onClick={handleClick}>{click?<FaXmark />:<FaBars />}</button>
      </div> 
      <div >

      </div>
            {/* mobile */}
{click &&(
  <div className="flex flex-col md:hidden text-center bg-gray-200 ">
            <a  className='text-blue-600 underline' href="">Home</a>
        <a  className='text-blue-600 underline' href="">Home</a>
        <a  className='text-blue-600 underline' href="">Home</a>
        <a  className='text-blue-600 underline' href="">Home</a>
        <button className='md:hidden block' >signup</button>

  </div>
)}
    </>
  )
}

export default Navbar
