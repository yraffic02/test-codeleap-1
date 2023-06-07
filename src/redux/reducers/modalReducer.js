import { OPEN_MODAL, CLOSE_MODAL, SET_MODAL_TYPE, SET_MODAL_ID } from '../types'

const initialState = {
  id: null,
  isOpen: false,
  tipo: null,
}



const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      }
      case CLOSE_MODAL:
        return {
        ...state,
        isOpen: false,
      }
    case SET_MODAL_TYPE:
      return {
        ...state,
        tipo: action.payload,
      }
    case SET_MODAL_ID:
      return {
        ...state,
        id: action.payload,
      }
    default:
      return state
  }
}

export default modalReducer

