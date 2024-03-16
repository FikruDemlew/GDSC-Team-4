import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { doSignOut } from '../firebase/auth'

const Nav = () => {
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
  return (
    <div>
    {
    userLoggedIn
        ?
        <div  className='flex justify-between py-5 bg-[#a2a3a5]'>
      <div className='px-5 '>
        Logo
      </div> 
      <div className='text-gray-900 mr-44'>
        <Link to='/' className='hover:text-gray-400 mr-7' >Home</Link>
        <Link to='/favourite' className= 'hover:text-gray-400 mr-7'>Favourite</Link>
        <Link to='/aboutus' className='hover:text-gray-400 mr-7' >About Us </Link>
        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
      </div>
      </div>
        :
        <div  className='flex justify-between py-4 bg-[#a2a3a5]'>
      <div className='px-5 '>
        Logo
        </div>
      <div className='text-gray-900 mr-10'>
        <Link to='/' className='hover:text-gray-400 mr-7' >Home</Link>
        <Link to='/favourite' className= 'hover:text-gray-400 mr-7'>Favourite</Link>
        <Link to='/aboutus' className='hover:text-gray-400 mr-7' >About Us </Link>
        <div className='inline-flex'>
        <Link to='/login' className= ''><img className="inline-flex" width="44" height="44" src="https://img.icons8.com/pastel-glyph/64/person-male--v3.png" alt="person-male--v3"/></Link>
        </div>
      </div>
      </div>
}
    </div>         
  )
}

export default Nav
