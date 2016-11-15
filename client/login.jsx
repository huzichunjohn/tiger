import React, { PropTypes } from 'react';
import Auth from './auth';

class Login extends React.Component {
    static propTypes = {
	router: PropTypes.object.isRequired
    }

    handleSubmit (event) {
	event.preventDefault();
        var username = this.refs.username.value;
	var password = this.refs.password.value;
	
	Auth.login(username, password, (loggedIn) => {
	    if (loggedIn) {
		this.props.router.replace('/');
	    }
	});
    }

    render () {
	return (
	    <form onSubmit={this.handleSubmit.bind(this)}>
		<input type="text" placeholder="username" ref="username" />
		<input type="password" placeholder="password" ref="password" />
		<input type="submit" />
	    </form>	
	);
   }
}

export default Login;

