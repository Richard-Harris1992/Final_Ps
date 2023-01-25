import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCurrentProfile, deleteAccount } from '../../api/profileApi';
import DashboardActions from '../DashboardActions';

const Dashboard = () => {
const [profile, setProfile] = useState(null);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const { id } = useParams();


useEffect(() => {
    const fetchData = async () => {
        try {
            const { data: { prof, use } } = await getCurrentProfile(id);
            setProfile(prof);
            setUser(use);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };
    fetchData();
}, [id]);
    // const handleDeleteAccount = async () => {
    //     await deleteAccount();
    // }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <section className="container">
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
                <i className="fas fa-user" /> Welcome {profile.name}
            </p>
            {profile !== null ? (
                <>
                    {<DashboardActions />
                    /*<Experience experience={profile.experience} />
                    <Education education={profile.education} /> */}

                    <div className="my-2">
                        {/* <button className="btn btn-danger" onClick={handleDeleteAccount}>
                            <i className="fas fa-user-minus" /> Delete My Account
                        </button> */}
                    </div>
                </>
            ) : (
        <>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
                Create Profile
            </Link>
        </>
            )}
    </section>
    );

};

export default Dashboard;