import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Home from './containers/home';
import Signup from './containers/signup';
import Login from './containers/login';
import Favorites from './containers/favorites';
import RequireAuth from './containers/requireAuth';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
	    <Route path="/" component={App}>	
		<IndexRoute component={Home} />
		<Route path="signup" component={Signup} />
		<Route path="login" component={Login} />
		<Route path="favorites" component={RequireAuth(Favorites)} />
	    </Route>
	</Router>
    </Provider>,
    document.getElementById('app')
);
