import { PURCHASE, DECREASE_COUNT, INCREASE_COUNT, CLEAR_COUNT, SHOW_PAYMENT } from '../constants/actionTypes';

export default (state, action) => {
	switch (action.type) {
		case PURCHASE: {
			return purchase(state, action.payload)
		}
		case DECREASE_COUNT: {
			return decreaseCount(state, action.payload)
		}
		case INCREASE_COUNT: {
			return increaseCount(state, action.payload)
		}
		case CLEAR_COUNT: {
			return clearCount(state, action.payload)
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

function purchase(state, id) {
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

  return {...state, products, cart};
}

function decreaseCount(state, id) {
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
 
	return {...state, products, cart}
}

function increaseCount(state, id) {
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

	return {...state, products, cart}
}

function clearCount(state, id) {
	const products = [...state.products];
	const cart = [...state.cart];
	const item = cart.find((product) => product.id === id);

	products.find((product) => {
		return product.id === id
	}).count += item.count;

	cart.splice(cart.indexOf(item), 1);

	return {...state, products, cart}
}

function showPayment(state) {
	return {...state, showPayment: true}
}