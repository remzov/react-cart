import { PURCHASE, DECREASE_COUNT, INCREASE_COUNT, CLEAR_COUNT, SHOW_PAYMENT, CHECK_FORM, SHOW_NAME_ERROR, SHOW_NUMBER_ERROR, HIDE_NAME_ERROR, HIDE_NUMBER_ERROR, PAY } from '../constants/actionTypes';

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
		case SHOW_PAYMENT: {
			return showPayment(state)
		}
		case CHECK_FORM: {
			return checkForm(state)
		}
		case SHOW_NAME_ERROR: {
			return showNameError(state)
		}
		case SHOW_NUMBER_ERROR: {
			return showNumberError(state)
		}
		case HIDE_NAME_ERROR: {
			return hideNameError(state)
		}
		case HIDE_NUMBER_ERROR: {
			return hideNumberError(state)
		}
		case PAY: {
			return pay(state)
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

	return {...state, products, cart};
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
 
	return {...state, products, cart}
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

	return {...state, products, cart}
}

const clearCount = (state, id) => {
	const products = [...state.products];
	const cart = [...state.cart];
	const item = cart.find((product) => product.id === id);

	products.find((product) => {
		return product.id === id
	}).count += item.count;

	cart.splice(cart.indexOf(item), 1);

	return {...state, products, cart}
}

const showPayment = (state) => {
	return {...state, showPayment: true}
}

const checkForm = (state) => {
	return {
		...state,
		...state.form.checked = true
	}
}

const showNameError = (state) => {
	return {
		...state, 
		...state.form.errors.cardName = true
	}
}
 
const showNumberError = (state) => {
	return {
		...state, 
		...state.form.errors.cardNumber = true
	}
}

const hideNameError = (state) => {
	return {
		...state, 
		...state.form.errors.cardName = false
	}
}

const hideNumberError = (state) => {
	return {
		...state, 
		...state.form.errors.cardNumber = false
	}
}

const pay = (state) => {
	return {
		...state, 
		...state.cart = [],
		...state.showPayment = false,
		...state.form.checked = false
	}
}