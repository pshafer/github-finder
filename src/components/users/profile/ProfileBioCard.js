import React, { Fragment } from "react";

const ProfileBioCard = ({ bio, html_url, login, company, blog }) => {
  return (
    <div>
      {bio && (
        <Fragment>
          <h3>Bio</h3>
          <p>{bio}</p>
        </Fragment>
      )}
      <a href={html_url} className="btn btn-dark my-1">
        Visit GitHub Profile
      </a>
      <ul>
        {login && (
          <li>
            <strong>Username: </strong> {login}
          </li>
        )}
        {company && (
          <li>
            <strong>Company: </strong> {company}
          </li>
        )}
        {blog && (
          <li>
            <strong>Website: </strong> {blog}
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProfileBioCard;
