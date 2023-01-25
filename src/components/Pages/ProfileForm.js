import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createProfile } from '../../api/profileApi';


const ProfileForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        location: '',
        status: '',
        gender: '',
        age: '',
        avatar: '',
        following: [],
        followers: [],
        email: ''
    });

    const { name, bio, location, status, gender, age, avatar, email } = formData;
    const navigate = useNavigate();
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {     
        e.preventDefault();
       
        try { 
             createProfile({ name, bio, location, status, gender, age, avatar, email });
             navigate('/dashboard');
            
        } catch (error) {
            console.log(error);
        }
    };
    

    return (
        <section className="container">
            <h1 className="large text-primary">Create Your Profile</h1>
            <p className="lead">
                <i className="fas fa-user" /> Let's get some information to make your profile stand out
            </p>
            <small className="form-text">
                        Tell us a little about yourself
                    </small>
            <small>* = required field</small>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        placeholder="A short bio of yourself"
                        name="bio"
                        value={bio}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        value={location}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <select
                        name="status"
                        value={status}
                        onChange={onChange}
                        required
                    >
                        <option value="">* Select Professional Status</option>
                        <option value="Developer">Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Intern">Intern</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Gender"
                        name="gender"
                        value={gender}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Age"
                        name="age"
                        value={age}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Avatar"
                        name="avatar"
                        value={avatar}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder=" verify Email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>

                
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard" >
                    Go Back
                </Link>
            </form>
        </section>
    );
};

export default ProfileForm;