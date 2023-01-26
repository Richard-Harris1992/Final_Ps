import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ( ) => {

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> EchoSphere
        </Link>
      </h1>
      
    </nav>
  );
};


export default NavBar
