import React, { Component } from 'react';

export default class UserRepos extends React.Component {

    render() {
        const {repos} = this.props;
        let reposList = repos.map((repo, index) =>
            <div key={index} className="thumbnail">
                <div className="caption">
                    <h3>{repo.name + ' '}
                        <span className="badge">{repo.stargazers_count} STARS</span>
                    </h3>
                    <p>{repo.description}</p>
                    <div className="btn-group" role="group">
                        <a href={repo.homepage}
                            className={"btn btn-success " + (repo.homepage ? "" : "disabled")}
                            role="button">HomePage
                        </a>
                        <a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>
                        <a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues</a>
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                <h2>{repos.length} repositories</h2>
                {reposList}
            </div>);

    }
}