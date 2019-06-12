import { createStore } from "redux";

const reducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            cart: [...state.cart, action.product]
        }
    }
    return state;
}

export default createStore(reducer, { cart: []});
