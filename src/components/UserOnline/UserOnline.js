import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./UserOnline.css";

const UserOnline = ({ users }) => {
  return (
    <div className="userOnline">
        <p>Users Online:</p>
      {users ? (
        <div className="userOnline_map">
          {users.map(({ name }) => (
            <p key={name} className="userOnline_text">
              <img alt="Online Icon" src={onlineIcon} /> {name}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default UserOnline;