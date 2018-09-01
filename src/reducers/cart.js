import { DECREASE_COUNT, INCREASE_COUNT, CLEAR_COUNT, SHOW_PAYMENT } from '../constants/actionTypes';

const initialState = {
    cart: [],
    showPayment: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case DECREASE_COUNT: {
			return decreaseCount(state, action.payload)
		}
		case INCREASE_COUNT: {
			return increaseCount(state, action.payload)
		}
		case CLEAR_COUNT: {
			return clearCount(state, action.payload)
		}
		case SHOW_PAYMENT: {
			return showPayment(state)
		}
		default: return state;
	}	
}

const increaseCount = (state, id) => {
	const products = [...state.products];
	const cart = [...state.cart];
	const item = products.find((product) => product.id === id);

	if (item.count !== 0) {
		cart.find((product) => {
			return product.id === id
		}).count += 1;
	
		products.find((product) => {
			return product.id === id
		}).count -=1;
	}

	return {
		...state, 
		products, 
		cart
	}
}

const decreaseCount = (state, id) => {
	const products = [...state.products];
	const cart = [...state.cart];

	cart.find((product) => {
		return product.id === id
	}).count -= 1;

	const item = cart.find((product) => product.id === id);

	if (item.count === 0) {
		cart.splice(cart.indexOf(item), 1);
	}

	products.find((product) => {
		return product.id === id
	}).count += 1;
 
	return {
		...state, 
		products,
		cart
	}
}

const clearCount = (state, id) => {
	const products = [...state.products];
	const cart = [...state.cart];
	const item = cart.find((product) => product.id === id);

	products.find((product) => {
		return product.id === id
	}).count += item.count;

	cart.splice(cart.indexOf(item), 1);

	return {
		...state, 
		products,
		cart
	}
}

const showPayment = (state) => {
	return {
		...state, 
		showPayment: true
	}
}