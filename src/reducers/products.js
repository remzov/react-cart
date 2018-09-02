import { PURCHASE } from '../constants/actionTypes';
import productList from '../store.json'

const initialState = {
	items: productList
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
	debugger;
	const products = [...state.products.items];
	const cart = [...state.cart.items];
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