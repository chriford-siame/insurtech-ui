import React from 'react'
import { useAuth } from 'src/hooks/useAuth';

function Navbar() {
  const { isAuthenticated, handleLogout } = useAuth();
  return (
    <div className='bg-blue-400 py-4 flex items-center justify-between px-3'>
      <a href="/" className='text-[18pt] font-bold text-white'><span className='text-orange-500'>I</span><span className='text-gray-200'>Tech</span><span className='text-purple-500'>.</span></a>

      {isAuthenticated ? 
      <div className="flex gap-5">
        <a href="/claims" className='text-white rounded-md'>claims</a>
        <a href="/" className='text-white rounded-md'>quotaions</a>
        <a href="#" className='text-white rounded-md'>about us</a>
        <a href="#" className='text-white rounded-md'>contact us</a>
      </div>
      : null}

      {!isAuthenticated ?
        <div className='flex  gap-1 text-[12pt]'>
          <a href="/login" className='text-white bg-gray-600 hover:bg-gray-600 px-2 rounded-md'>Login</a>
          <a href="/register" className='text-white bg-gray-600 hover:bg-gray-600 px-2 rounded-md'>Signup</a>
        </div>
        :
        <span>
          <div className='text-[12pt]'>
            <button onClick={() => {
              handleLogout();
              window.location.href = "/";
            }}  className='text-white bg-gray-600 hover:bg-gray-600 px-2 rounded-md'>logout</button>
          </div>
        </span>
      }
    </div>
  )
}

export default Navbar;
