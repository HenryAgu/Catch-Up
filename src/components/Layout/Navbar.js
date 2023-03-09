import React from 'react';

// Link
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo">
            <Link to="/">Blog</Link>
        </div>
        <div className="links">
            <SignedInLinks/>
            <SignedOutLinks/>
        </div>
    </nav>
  )
}

export default Navbar;