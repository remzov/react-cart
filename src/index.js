import React  from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app/app';
import update from './reducers/update'
import productList from './store.json'

const mountPoint = document.getElementById('root');
const initialState = {
    products: productList,
    cart: [],
    showPayment: false,
    form: {
        checked: false,
        errors: {
            cardNumber: false,
            cardName: false
        }
    }
}
const store = createStore(update, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    mountPoint
);

//  store.subscribe( () =>  console.log(store.getState()) );