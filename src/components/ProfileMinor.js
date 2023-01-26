const ProfileMinor = ({ profiles }) => {

    return (
        
        <section className="container profile-section" >
            <div className="profile-box">
            <img src={profiles.avatar} alt="profile-photo" className="profile-photo" style={{ maxWidth: "200px", maxHeight: "200px" }} />

                <ul className="profile-list">
                    <li>Name: {profiles.name}</li>
                    <li>Email: {profiles.email}</li>
                    <li>Location: {profiles.location}</li>
                    <li>Bio: {profiles.bio}</li>
                </ul>
            </div>
        </section>
    )
};

export default ProfileMinor;