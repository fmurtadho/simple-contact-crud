import {
  REQ_CONTACT_LIST,
  REQ_CONTACT_LIST_SUCCESS,
  REQ_CONTACT_LIST_FAILURE,
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
  default:
    return { ...state };
  }
};

export { ContactReducer };
