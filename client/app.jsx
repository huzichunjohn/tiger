import React, { PropTypes } from 'react';
import Auth from './auth';

class App extends React.Component {
    static propTypes = {
	router: PropTypes.object.isRequired
    }

    state = {
	user: []
    }

    constructor () {
	super();
	this.loadUserData();
    }

    handleClick () {
	Auth.logout();
	this.props.router.replace('/login/');
    }

    loadUserData () {
	$.ajax({
	    method: 'GET',
	    url: '/api/users/i/',
	    datatype: 'json',
	    headers: {
		'Authorization': 'Token ' + localStorage.token
	    },
	    success: function(response) {
		this.setState({user: response});
	    }.bind(this)
	});
    }

    render () {
	return (
	    <div>
		<h1>You are now logged in, {this.state.user.username}</h1>
		<button onClick={this.handleClick.bind(this)}>Log out</button>
	    </div>
	);
    };
}

export default App;
