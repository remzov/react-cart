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
  let newCart = [...state.cart]
  
	if (newCart.some(product => product.id === newCartItem.id)) {

		newCart.find(product => {
			return product.id === id
		}).count += 1;
	
	} else {
		newCart.push({...newCartItem, count: 1})
	}
  return newCart;
  
}


