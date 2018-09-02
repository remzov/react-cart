import { combineReducers } from 'redux'; 
import products from './products';
import cart from './cart';
import form from './form';

export default combineReducers({
    products,
    cart,
    form
});
