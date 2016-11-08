import { AppContainer } from 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello.jsx';
import World from './world.jsx';
import TodoList from './todos.jsx';

ReactDOM.render(<Hello/>, document.getElementById('hello'))
ReactDOM.render(
  <AppContainer>
    <World/>
  </AppContainer>,
  document.getElementById('world')
)
ReactDOM.render(<TodoList/>, document.getElementById('todo'))

if (module.hot) {
  module.hot.accept('./world.jsx', () => {
    const NextApp = require('./world.jsx').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('world')
    );
  });
}
