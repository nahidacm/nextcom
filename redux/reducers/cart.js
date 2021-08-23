import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  items: []
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.items.push(action.product)
      return state;
    default:
      return state
  }
}

export default cart
