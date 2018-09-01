import { CHECK_FORM, SHOW_NAME_ERROR, SHOW_NUMBER_ERROR, HIDE_NAME_ERROR, HIDE_NUMBER_ERROR, PAY } from '../constants/actionTypes';

const initialState = {
    form: {
        checked: false,
        errors: {
            cardNumber: false,
            cardName: false
        }
    }
}

export default (state = initialState, action) => {
	switch (action.type) {
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