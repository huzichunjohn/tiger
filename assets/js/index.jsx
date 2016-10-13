import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello.jsx';
import World from './world.jsx';

ReactDOM.render(<Hello/>, document.getElementById('hello'))
ReactDOM.render(<World/>, document.getElementById('world'))
