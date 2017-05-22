import React from 'react';
import PropTypes from 'prop-types';
import UserRepos from './UserRepos';

const UserInfo = ({user, repos}) => {
    let userInfo = user ?
        (
            <div className="row">
                <div className="col-lg-4">
                    <img className="img-circle"
                        src={user.avatar_url}
                        alt="avatar"
                        width="140"
                        height="140"
                    />
                    <h2>{user.login}</h2>
                    <p>{user.name}</p>
                    <p>Followers: {user.followers} / Following: {user.following}</p>
                    <p>
                        <a className="btn btn-default"
                            href={user.html_url}
                            role="button">View details
                            </a>
                    </p>
                </div>
                <div className="col-lg-8">
                    <UserRepos repos={repos} />
                </div>
            </div>
        ) : null;

    return userInfo;
}

UserInfo.PropTypes = {
    user: PropTypes.object,
    repos: PropTypes.array
}

export default UserInfo;