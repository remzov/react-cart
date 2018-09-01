import { PURCHASE } from '../constants/actionTypes';
import productList from '../store.json'

const initialState = {
	products: productList,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case PURCHASE: {
			return purchase(state, action.payload)
		}		
		default: return state;
	}	
}

const purchase = (state, id) => {
	const products = [...state.products];
	const cart = [...state.cart];
	const item = products.find((product) => {
		return product.id === id
	});
	
	products.find((product) => {
		return product.id === id
	}).count -=1;
	
	if (cart.some((product) => product.id === id)) {

		cart.find((product) => {
			return product.id === id
		}).count += 1;
	
	} else {
		cart.push({...item, count: 1})
	}

	return {
		...state, 
		products,
		cart
	}
}