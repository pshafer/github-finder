import React from "react";

const ProfileImageCard = ({ avatar_url, name, location, hireable }) => {
  return (
    <div className="all-center">
      <img
        src={avatar_url}
        className="round-img"
        alt=""
        style={{ width: "150px" }}
      />
      <h1>{name}</h1>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Hireable:</strong>{" "}
        {hireable ? (
          <i className="fas fa-check text-success"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
      </p>
    </div>
  );
};

export default ProfileImageCard;
