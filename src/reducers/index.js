import { combineReducers } from 'redux'; 
import store from './store';
import cart from './cart';
import form from './form';

export default combineReducers({
    store,
    cart,
    form
});