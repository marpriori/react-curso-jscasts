import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = function (props) {
    let userProp = props.user;
    let userInfo = userProp ?
        (
            <div className="row">
                <div className="col-lg-4">
                    <img className="img-circle"
                        src={userProp.avatar_url}
                        alt="avatar"
                        width="140"
                        height="140"
                    />
                    <h2>{userProp.login}</h2>
                    <p>{userProp.name}</p>
                    <p>Followers: {userProp.followers} / Following: {userProp.following}</p>
                    <p>
                        <a className="btn btn-default"
                            href={userProp.html_url}
                            role="button">View details
                            </a>
                    </p>
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