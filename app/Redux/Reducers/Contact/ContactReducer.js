import {
  REQ_CONTACT_LIST,
  REQ_CONTACT_LIST_SUCCESS,
  REQ_CONTACT_LIST_FAILURE,
  REQ_CREATE_CONTACT,
  REQ_CREATE_CONTACT_SUCCESS,
  REQ_CREATE_CONTACT_FAILURE,
  REQ_EDIT_CONTACT,
  REQ_EDIT_CONTACT_SUCCESS,
  REQ_EDIT_CONTACT_FAILURE,
  REQ_DELETE_CONTACT,
  REQ_DELETE_CONTACT_SUCCESS,
  REQ_DELETE_CONTACT_FAILURE,
} from '../../Actions';

const initialState = {
  loading: false,
  data: [],
  error: false,
  errorMessage: '',
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
  case REQ_CONTACT_LIST:
    return {
      ...state,
      loading: true,
    };
  case REQ_CONTACT_LIST_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload,
      error: false,
      errorMessage: '',
    };
  case REQ_CONTACT_LIST_FAILURE:
    return {
      ...state,
      loading: false,
      data: [],
      error: true,
      errorMessage: action.errorMessage,
    };
  case REQ_CREATE_CONTACT:
    return {
      ...state,
      loading: true,
    };
  case REQ_CREATE_CONTACT_SUCCESS:
    return {
      ...state,
      loading: false,
      error: false,
      errorMessage: '',
    };
  case REQ_CREATE_CONTACT_FAILURE:
    return {
      ...state,
      loading: false,
      error: true,
      errorMessage: action.errorMessage,
    };
  default:
    return { ...state };
  }
};

export { ContactReducer };
