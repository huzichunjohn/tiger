import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import * as Actions from '../actions';

export default function configureStore(initialState) {
    const store = createStore(
	rootReducer,
	initialState,
	compose (
	    applyMiddleware(ReduxThunk),
	    window.devToolsExtension ? window.devToolsExtension() : f => f
	)
    );

    if (module.hot) {
	console.log("hot");
	module.hot.accept('../reducers', () => {
	    const nextRootReducer = require('../reducers').default;
	    store.replaceReducer(nextRootReducer);
	});
    }

    store.dispatch(Actions.verifyAuth());

    return store;
}
