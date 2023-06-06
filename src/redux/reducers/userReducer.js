import { SET_USERNAME } from '../types';

const initialState = {
  user: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

