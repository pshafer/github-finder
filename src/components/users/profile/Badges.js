import React from "react";
import BadgeItem from "./BadgeItem";

const Badges = ({ followers, following, publicRepos, publicGists }) => {
  return (
    <div className="card text-center">
      <BadgeItem type="primary" label="Followers" value={followers} />
      <BadgeItem type="success" label="Following" value={following} />
      <BadgeItem type="light" label="Public Repos" value={publicRepos} />
      <BadgeItem type="dark" label="Public Gists" value={publicGists} />
    </div>
  );
};

export default Badges;
