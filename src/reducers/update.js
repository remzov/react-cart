import { ADD_TO_CART } from '../constants/actionTypes';

export default (state, action) => {

	switch (action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				cart: defineCart(state, action.payload)
			}
		}
		default: return state;
	}	
}



function defineCart(state, id) {

	let newCartItem = state.products.find(product => {
		return product.id === id
	})
	
	if (state.cart.some(product => product.id === newCartItem.id)) {

		state.products.find(product => {
			return product.id === id
		}).count += 1;
	
	} else {
		newCartItem.count = 1;
		state.cart.push(newCartItem)

	}
	
	return state.cart;
}


