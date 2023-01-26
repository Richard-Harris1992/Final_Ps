import React from 'react';
import { Link } from 'react-router-dom';

const EditProfileButton = ({id}) => {
  const url = `/${id}/edit-profile`;

  return (
    <div className='dash-buttons'>
      <Link to={url} className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
    </div>
  );
};

export default EditProfileButton  ;
