import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';

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
} from '../index';
import { ResponseCode } from '../../../Constants';

const getContactList = () => async (dispatch) => {
  dispatch({
    type: REQ_CONTACT_LIST,
  });

  try {
    const response = await axios.get(`${BASE_URL}/contact`);

    if (response.status === ResponseCode.SUCCESS) {
      dispatch({
        type: REQ_CONTACT_LIST_SUCCESS,
        payload: response.data.data,
      });
    } else {
      dispatch({
        type: REQ_CONTACT_LIST_FAILURE,
        errorMessage: 'Failed to fetch contact list',
      });
    }
  } catch (error) {
    dispatch({
      type: REQ_CONTACT_LIST_FAILURE,
      errorMessage: 'Failed to fetch contact list',
    });
  }
};

const postContact = (body) => async (dispatch) => {
  dispatch({
    type: REQ_CREATE_CONTACT,
    body,
  });

  try {
    const response = await axios.post(`${BASE_URL}/contact`, { ...body });

    dispatch({
      type: REQ_CREATE_CONTACT_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      error,
      errorResponse: error.response,
      type: REQ_CREATE_CONTACT_FAILURE,
      errorMessage: 'failed to create new contact',
    });
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch({
    type: REQ_DELETE_CONTACT,
    id,
  });

  try {
    const response = await axios.delete(`${BASE_URL}/contact`);

    if (response.status === ResponseCode.SUCCESS) {
      dispatch({
        type: REQ_DELETE_CONTACT_SUCCESS,
        payload: response.data.data,
      });
    } else {
      dispatch({
        type: REQ_DELETE_CONTACT_FAILURE,
        errorMessage: 'failed to delete contact',
      });
    }
  } catch (error) {
    dispatch({
      type: REQ_DELETE_CONTACT_FAILURE,
      errorMessage: 'failed to delete contact',
    });
  }
};

const putContact = (body) => async (dispatch) => {
  dispatch({
    type: REQ_EDIT_CONTACT,
    body,
  });

  try {
    const response = await axios.put(`${BASE_URL}/contact`);

    if (response.status === ResponseCode.SUCCESS) {
      dispatch({
        type: REQ_EDIT_CONTACT_SUCCESS,
        payload: response.data.data,
      });
    } else {
      dispatch({
        type: REQ_EDIT_CONTACT_FAILURE,
        errorMessage: 'failed to edit contact',
      });
    }
  } catch (error) {
    dispatch({
      type: REQ_EDIT_CONTACT_FAILURE,
      errorMessage: 'failed to edit contact',
    });
  }
};

export {
  getContactList,
  postContact,
  putContact,
  deleteContact,
};
