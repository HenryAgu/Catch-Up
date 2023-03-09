import React from 'react'

// Link
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <div>
        <ul style={{display: "flex", gap: "30px", listStyle : "none"}}>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
        </ul>
    </div>
  )
}

export default SignedOutLinks