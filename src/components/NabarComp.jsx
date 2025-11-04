import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NabarComp = () => {
    const navigate = useNavigate()
    const handleLogin = ()=>{
        navigate('/login')
    }
  return (
    <>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/skills'>skills</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
            <button onClick={handleLogin}>Loginpage</button>
        </ul>
    </>
  )
}

export default NabarComp