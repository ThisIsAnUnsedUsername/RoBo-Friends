import React from 'react'; //need this to use JSX
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css'; //this has global css isssue
import 'tachyons'; //this also has global css issue
import App from './container/App'; //if no "."" after the filename, then it is ".js"
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { searchRobots, requestRobots } from './reducer';

const logger = createLogger(); //create middleware, it will show information of state in console log
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, logger)
	// applyMiddleware(thunkMiddleware)
); //normally the first argument name is rootReducer

ReactDOM.render(
	/*render() is mounting(run when page load) and updating(rerender when any STATE change happen in website) method, this is part of life cycle hook
	provider pass down store to anything in App instead of passing it by individual props one level per one level
	JSX self close tag need '/' symbol
	React-redux Provider think comment is another React element child, thus no comment inside*/
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') //<App /> are mounted on index.html selector with 'root' id
);

registerServiceWorker();
