import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
	rootReducer,
	initialState,
	compose (
	    applyMiddleware(ReduxPromise),
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
    return store;
}