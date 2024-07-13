import React from 'react'

const Login = () => {
  return (
    <>
    <div className="parent my-20 text-center">
      <label className='font-bold' htmlFor="text">Name:</label>  <input className='border-gray-300 border-2' type="text" name='name'  placeholder='Name' />
    </div>
    </>
  )
}

export default Login