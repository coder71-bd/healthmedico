import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const {user} = useAuth()

  return (
    <div
      className=" d-flex flex-column justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <img src={user.photoURL} alt={user.displayName} />
      
      <div className="text-center">
        <h1 className="d-3">welcome, {user.displayName}</h1>
        <small>Thanks for being with us</small>
      </div>
    </div>
  );
};

export default Profile;
