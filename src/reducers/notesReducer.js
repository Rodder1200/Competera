import { ADD_NEW_NOTE, REMOVE_NOTE } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_NOTE:
      return state.concat(action.payload);
    case REMOVE_NOTE:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};
