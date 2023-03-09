import React from 'react'

// Link
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <div >
        <ul style={{display: "flex", gap: "20px", listStyle : "none"}}>
            <li><NavLink to="/create">Create Blog</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/">AH</NavLink></li>
        </ul>
    </div>
  )
}

export default SignedInLinks