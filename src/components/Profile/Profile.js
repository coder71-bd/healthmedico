import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div
      className=" d-flex flex-column justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <img
        className="img-fluid"
        style={{ maxHeight: 500 }}
        src={
          user.photoURL
            ? user.photoURL
            : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
        }
        alt={user.displayName}
      />

      <div className="text-center">
        <h1 className="d-3">
          Welcome, <span className="text-primary">{user.displayName}</span>
        </h1>
        <small>Thanks for being with us</small>
      </div>
    </div>
  );
};

export default Profile;
