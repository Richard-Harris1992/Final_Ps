import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../api/apis'
import NavBar from '../NavBar';


const SignUp = () => {
    const nav = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirm_password: ''
    });
  
    const { name, email, password, confirm_password } = formData;
  
    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirm_password) {
        alert('Passwords do not match', 'danger');
      } else {
            createUser({ name , email, password })
            nav('/')
      }
    };
  
    // if (isAuthenticated) {
    //   return nav("/dashboard");
    // }
  
    return (
      <>
      <NavBar/>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={confirm_password}
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Sign up!" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
      </>
    );
  };

  export default SignUp;