import React from 'react';
import { Link } from 'react-router';
import NavLink from './navLink';

class Repos extends React.Component {
    constructor() {
	super();
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
	event.preventDefault();
	const userName = event.target.elements[0].value;
	const repoName = event.target.elements[1].value;
	const path = `/repos/${userName}/${repoName}`;
	console.log(path);
	this.context.router.push(path);
    }

    render() {
	return (
	    <div>
		<h2>Repos</h2>
		<ul>
		    <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
		    <li><NavLink to="/repos/facebook/react">React</NavLink></li>
		    <li>
		        <form onSubmit={this.handleSubmit}>
			    <input type="text" placeholder="userName" /> / {' '}
			    <input type="text" placeholder="repoName" />{' '}
			    <button type="submit">Go</button>
			</form>
		    </li>
		</ul>
		{this.props.children}
	    </div>
	);
    }
}

Repos.contextTypes = {
    router: React.PropTypes.object
};

export default Repos;
