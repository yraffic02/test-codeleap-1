import { SET_MODAL_TYPE, SET_MODAL_ID, OPEN_MODAL, CLOSE_MODAL } from '../types'

export const setModalType = (type) => ({
  type: SET_MODAL_TYPE,
  payload: type,
})

export const setModalId = (id) => ({
  type: SET_MODAL_ID,
  payload: id,
})

export const openModal = () => ({
  type: OPEN_MODAL,
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})