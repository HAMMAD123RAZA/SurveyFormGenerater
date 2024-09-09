import React from 'react'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <>
    <div className="parent text-center my-40">
    <div className='font-bold text-4xl text-blue-800' >
      Welcvome To Survey Generator
    </div>
    <div className="btn my-28 ">

    <Link to='/form' className=' px-5 ms-5 py-3 font-bold rounded bg-blue-800 hover:bg-white text-white  border-2 border-blue-600 hover:text-blue-700'>Create</Link>
    </div>
    </div>

    </>
  )
}

export default First