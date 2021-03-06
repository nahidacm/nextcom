import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes';
import {loadState} from '../../utils/localStorage';

const initialState =  loadState() ?.cart ?? {
  items: [],
  itemCount: 0
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.items.push(action.product);
      state.itemCount = state.items.length;
      return state;
    default:
      return state
  }
}

export default cart
