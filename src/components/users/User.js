import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Badges from "./profile/Badges";
import ProfileImageCard from "./profile/ProfileImageCard";
import ProfileBioCard from "./profile/ProfileBioCard";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, getUserRepos, loading, user, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.username);
    getUserRepos(match.params.username);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to="/" className="btn btn-light btn-sm">
        <i className="fas fa-chevron-left"></i> Back to Search
      </Link>
      <div className="card grid-2">
        <ProfileImageCard
          avatar_url={avatar_url}
          name={name}
          location={location}
          hireable={hireable}
        />
        <ProfileBioCard
          bio={bio}
          html_url={html_url}
          login={login}
          company={company}
          blog={blog}
        />
      </div>
      <Badges
        followers={followers}
        following={following}
        publicRepos={public_repos}
        publicGists={public_gists}
      />
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
