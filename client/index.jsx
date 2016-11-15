import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './app';
import Login from './login';
import Auth from './auth';

function requireAuth(nextState, replace) {
    if (!Auth.loggedIn()) {
        replace({
	    pathname: '/login/',
	    state: {nextPathname: '/'}
        });
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
	<Route path='/login/' component={Login} />
	<Route path='/' component={App} onEnter={requireAuth} />
    </Router>,
    document.getElementById('app'));
