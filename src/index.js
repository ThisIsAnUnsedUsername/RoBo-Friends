import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css'; //css stylesheet import will apply to all js script on this index.html page, so dont need to import multiple time
import 'tachyons';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './container/App'; //if no ". after the filename, then it is ".js"(maybe it means same extension as this file?)
import { searchRobots } from './reducer';
//this is not export default, so you can export many other thing, and you need curly bracket

const store = createStore(searchRobots);

ReactDOM.render(
	//render() is mounting(run when page load) and updating(rerender when any STATE change happen in website) method, this is part of life cycle hook
	<Provider store={store}> {/*provider pass down store to anything in App instaed of passing it by props one level per one level*/}
		<App /> {/*JSX self close tag need '/' symbol*/}
	</Provider>,
	document.getElementById('root') //<App /> are mounted on index.html selector with 'root' id
);

registerServiceWorker();
