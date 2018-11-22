import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'

let Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
