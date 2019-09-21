import { SET_ITEM, SORT } from '../constants/action-types';

const initialState = {
  item: null,
  table_data: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEM:
      return {
        ...state,
        item: action.payload,
        table_data: action.payload.sales
      }
    case SORT:
      let data = [...state.table_data]
      data.sort(compareValues(action.payload))
      return {
        ...state,
        table_data: data
      }
    default:
      return state
  }
}

function compareValues(key, order = 'asc') {
  return function (a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = a[key];
    const varB = b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
}

export default reducer