import React from "react";

const Profile = ({ user }) => {
  console.log(user);
  return (
    <div className="flex flex-col  mx-auto my-5 items-start text-justify">
      <div className="flex space-x-8 items-center  p-4">
        <label>Name:</label>
        <p>{user?.name}</p>
      </div>
      <div className="flex space-x-8 items-center  p-4">
        <label>Email:</label>
        <p>{user?.email}</p>
      </div>

      <div className="flex space-x-8 items-start text-start p-4">
        <label>Mobile</label>
        <p>{user?.mobile}</p>
      </div>

      <div className="flex space-x-8 items-center  p-4">
        <label>address</label>
        <p>{user?.address}</p>
      </div>
    </div>
  );
};

export default Profile;
