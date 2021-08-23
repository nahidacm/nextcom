import * as types from '../constants/ActionTypes'

export const addToCart = product => ({
  type: types.ADD_TO_CART,
  product
})
