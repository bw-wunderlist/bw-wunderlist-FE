import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../src/Components/reducers/reducer.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider} from 'react-cookie';



ReactDOM.render(
    <Provider store={createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>

       <Router><CookiesProvider><App /></CookiesProvider></Router>
    </Provider>, 
    document.getElementById('root')
 );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
