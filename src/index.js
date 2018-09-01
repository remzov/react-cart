import React  from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app/app';
import reducer from './reducers/index'

const mountPoint = document.getElementById('root');

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    mountPoint
);

//  store.subscribe( () =>  console.log(store.getState()) );