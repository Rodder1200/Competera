import { ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE } from '../constants';

export const addNewNote = item => dispatch => {
    dispatch({ type: ADD_NEW_NOTE, payload: item });
  },
  removeNote = id => dispatch => {
    dispatch({ type: REMOVE_NOTE, payload: id });
  },
  editNote = note => dispatch => {
    dispatch({ type: EDIT_NOTE, payload: note });
  };
