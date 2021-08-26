import {pick} from 'lodash';

const persistStatekeys = ['cart']

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const picked = pick(state, persistStatekeys);

    const serializedState = JSON.stringify(picked);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};
