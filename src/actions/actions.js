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

