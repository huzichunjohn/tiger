import React from 'react';
import NavLink from './navLink';
import Home from './home';

export default class App extends React.Component {
    render() {
	return (
	    <div>
		<h1>React Router Tutorial</h1>
		<ul role="nav">
		    <li><NavLink to="/about" >About</NavLink></li>
		    <li><NavLink to="/repos" >Repos</NavLink></li>
		</ul>
		{ this.props.children || <Home /> }
	    </div>
	);
    }
}
