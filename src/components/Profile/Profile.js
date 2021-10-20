import React from 'react';

const Profile = () => {
  return (
    <div
      className=" d-flex flex-column justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <div>user image should go here</div>
      <div className="text-center">
        <h1 className="d-3">welcome, name</h1>
        <small>Thanks for being with us</small>
      </div>
    </div>
  );
};

export default Profile;
