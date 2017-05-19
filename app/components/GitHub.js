var React = require('react');

var GitHub = React.createClass({
    render : function() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>GitHub Info</h1>
                    <div className="row">
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="Ex: marpriori" />
                            </div>
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = GitHub;