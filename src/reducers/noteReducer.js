import { EDIT_NOTE } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_NOTE:
      return action.payload[0];
    default:
      return state;
  }
};
