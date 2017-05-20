import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GitHubUser from '../services/GitHubUser';

export default class SearchUser extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        GitHubUser.getByUsername(this.state.username)
            .then(function (response) {
                this.props.updateUser(response.data);
            }.bind(this));
        GitHubUser.getReposByUsername(this.state.username)
            .then(function (response) {
                this.props.updateRepos(response.data);
            }.bind(this));
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>GitHub Info</h1>
                    <div className="row">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleUsernameChange.bind(this)}
                                    className="form-control"
                                    placeholder="Ex: marpriori"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
SearchUser.PropTypes = {
    updateUser : PropTypes.func.isRequired,
    updateRepos : PropTypes.func.isRequired,
}