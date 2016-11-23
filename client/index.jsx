import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar';
import GifList from './gifList';
import request from 'superagent';

class App extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    gifs: [
		/*
		{
		    id: 1,
		    url: 'http://fakeimg.pl/300/'
		},
		{
		    id: 2,
		    url: 'http://fakeimg.pl/300/'
		},
		{
		    id: 3,
		    url: 'http://fakeimg.pl/300/'
		}
		*/
	    ]
	};
	this.handleTermChange = this.handleTermChange.bind(this);
    }



    handleTermChange(term) {
	const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
	
	request.get(url, function(err, res) {
	    this.setState({ gifs: res.body.data });
	});
    }

    render() {
	return (
	    <div>
	        <SearchBar onTermChange={this.handleTermChange} />
		<GifList gifs={this.state.gifs} />
	    </div>
	);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
