import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  const { name, full_name, html_url } = repo;
  return (
    <div className="card">
      <h3>
        <a href={html_url}>{name}</a>
      </h3>
      <h4>{full_name}</h4>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
