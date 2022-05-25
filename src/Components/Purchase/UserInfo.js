import React from "react";

const UserInfo = ({ userData }) => {
  const { email, about, name, phone, address } = userData || {};
  return (
    <div className="">
      <h2 className="text-2xl font-bold">
        Name: <span className="text-slate-700">{name}</span>{" "}
      </h2>
      <p>Email: {email}</p>
      <p>About : {about}</p>
      <p>Phone: {phone}</p>
      <h2>Address: {address}</h2>
      <div></div>
    </div>
  );
};

export default UserInfo;
