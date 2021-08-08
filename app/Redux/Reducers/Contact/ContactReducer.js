import {
  REQ_CONTACT_LIST,
  REQ_CONTACT_LIST_SUCCESS,
  REQ_CONTACT_LIST_FAILURE,
  REQ_GET_CONTACT,
  REQ_GET_CONTACT_SUCCESS,
  REQ_GET_CONTACT_FAILURE,
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
  contactDetail: {},
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
  case REQ_GET_CONTACT:
    return {
      ...state,
      contactDetail: {},
      loading: true,
      error: false,
      errorMessage: '',
    };
  case REQ_GET_CONTACT_SUCCESS:
    return {
      ...state,
      contactDetail: action.payload,
      loading: false,
      error: false,
      errorMessage: '',
    };
  case REQ_GET_CONTACT_FAILURE:
    return {
      ...state,
      contactDetail: {},
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
  case REQ_EDIT_CONTACT:
    return {
      ...state,
      loading: true,
    };
  case REQ_EDIT_CONTACT_SUCCESS:
    return {
      ...state,
      loading: false,
      error: false,
      errorMessage: '',
    };
  case REQ_EDIT_CONTACT_FAILURE:
    return {
      ...state,
      loading: false,
      error: true,
      errorMessage: action.errorMessage,
    };
  case REQ_DELETE_CONTACT:
    return {
      ...state,
      loading: true,
    };
  case REQ_DELETE_CONTACT_SUCCESS:
    return {
      ...state,
      loading: false,
      error: false,
      errorMessage: '',
    };
  case REQ_DELETE_CONTACT_FAILURE:
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
