export const purchase = (id) => ({
    type: 'PURCHASE',
    payload: id
})

export const decreaseCount = (id) => ({
    type: 'DECREASE_COUNT',
    payload: id
})

export const increaseCount = (id) => ({
    type: 'INCREASE_COUNT',
    payload: id
})

export const clearCount = (id) => ({
    type: 'CLEAR_COUNT',
    payload: id
})

export const showPayment = () => ({
    type: 'SHOW_PAYMENT'
})

export const checkForm = () => ({
    type: 'CHECK_FORM'
})

export const showNameError = () => ({
    type: 'SHOW_NAME_ERROR'
})

export const showNumberError = () => ({
    type: 'SHOW_NUMBER_ERROR'
})

export const hideNameError = () => ({
    type: 'HIDE_NAME_ERROR'
})

export const hideNumberError = () => ({
    type: 'HIDE_NUMBER_ERROR'
})

export const pay = () => ({
    type: 'PAY'
})