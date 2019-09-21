import { SET_ITEM, SORT } from '../constants/action-types';

export const setItem = payload => {
  return { type: SET_ITEM, payload }
}

export const sortData = payload => {
  return { type: SORT, payload }
}