import React, { useState } from 'react';
import { loginUser } from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const logins = async (e) => {
    e.preventDefault();
    const res = await loginUser(formData);
    navigate(`/users/${res.data.id}`);
  };


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={logins}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="link-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
