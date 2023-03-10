import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/apis';
import NavBar from '../NavBar';

const Login = () => {
    const nav = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = async (e) => {
            e.preventDefault();
        
            try {
                const { data: { status, user } } = await login({ email, password });
                
                if (status === true) {
                    console.log(status, user)
                    nav(`/dashboard/${user}`);
                } else {
                    console.log(status)
                }
            } catch (error) {
                console.log(error);
            }
        };
        

    return (
        <>
        <NavBar />
        <section className="container">
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead">
                <i className="fas fa-user" /> Sign Into Your Account
            </p>
            <form className="form" onSubmit={onSubmit}>
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
                        minLength="6"
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </section>
        </>
    );
};



export default Login
