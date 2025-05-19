import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between bg-slate-500'>
       <div className='flex m-5 w-full justify-between'>
             <div>
                <Link to={"/"}><h2>Home</h2></Link>
            </div>
            <div className='flex gap-5'>
                <Link to={"/create"}><h2>Create User</h2></Link>
                <Link to={"/update"}><h2>Update User</h2></Link>
                
            </div>
       </div>
    </div>
  )
}

export default Navbar