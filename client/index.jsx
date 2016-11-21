import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app';
import About from './about';
import Repos from './repos';
import Repo from './repo';
import Home from './home';

ReactDOM.render((
    <Router history={browserHistory}>
	<Route path="/" component={App}>
	    <IndexRoute component={Home} />
	    <Route path='/repos' component={Repos} >
	        <Route path='/repos/:userName/:repoName' component={Repo} />
	    </Route>
	    <Route path="/about" component={About} />
	</Route>
    </Router>
), document.getElementById('app'));
