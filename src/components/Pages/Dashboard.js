import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getCurrentProfile, deleteAccount } from '../../api/profileApi';
import EditProfileButton from '../EditProfileButton';
import NavBar from '../NavBar';
import ProfileMinor from '../ProfileMinor';
import TotalUsers from '../TotalUsers';



const Dashboard = () => {
    const [profiles, setProfile] = useState(null);
    const { id } = useParams();
    const nav = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCurrentProfile(id);
                setProfile(response.profile);
                console.log(profiles)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [id]);


    const handleDeleteAccount = async () => {
        try {
            const { data: { success } } = await deleteAccount(id);

            if (success === true) {

                nav(`/`);
            } else {
                console.log(success)
            }
        } catch (error) {
            console.log(error);
        }
    }


    if (profiles !== null && profiles !== undefined) {
        return (
            <>
                <NavBar />


                <section className="container">
                    <h1 className="large text-primary">Dashboard</h1>
                    <p className="lead">
                        <i className="fas fa-user" /> Welcome To EchoSphere
                    </p>
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <ProfileMinor profiles={profiles} />
                            <TotalUsers id={id} />
                        </div>

                        <EditProfileButton id={id} />
                        <div className="my-2">
                            <button className="btn btn-danger" onClick={handleDeleteAccount}>
                                <i className="fas fa-user-minus" /> Delete My Account
                            </button>
                        </div>
                    </>
                </section>
            </>
        )
    } else {
        return (
            <>
                <section className="container">
                    <h1 className="large text-primary">Dashboard</h1>
                    <p className="lead">
                        <i className="fas fa-user" /> Welcome To EchoSphere
                    </p>
                    <>
                        <p>You have not yet setup a profile, please add some info</p>
                        <Link to="/create-profile" className="btn btn-primary my-1">
                            Create Profile
                        </Link>
                    </>

                </section>
            </>
        )
    }

};

export default Dashboard;