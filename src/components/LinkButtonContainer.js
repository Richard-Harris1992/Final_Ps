import React from 'react';
import { Link } from 'react-router-dom';

const LinkButtonContainer = () => {
    return (
      <div className="link-button-container">
        <div className="link-button">
        <Link to="/login" >Login</Link>
        </div>
        <div className="link-button">
        <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }

  export default LinkButtonContainer