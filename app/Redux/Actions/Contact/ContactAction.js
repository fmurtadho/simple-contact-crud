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
  REQ_GET_CONTACT,
  REQ_GET_CONTACT_SUCCESS,
  REQ_GET_CONTACT_FAILURE,
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

const getContact = (id) => async (dispatch) => {
  dispatch({
    type: REQ_GET_CONTACT,
    id,
  });

  try {
    const response = await axios.get(`${BASE_URL}/contact/${id}`);

    if (response.status === ResponseCode.SUCCESS) {
      dispatch({
        type: REQ_GET_CONTACT_SUCCESS,
        payload: response.data.data,
      });
    } else {
      dispatch({
        type: REQ_GET_CONTACT_FAILURE,
        errorMessage: 'failed to get contact',
      });
    }
  } catch (error) {
    dispatch({
      type: REQ_GET_CONTACT_FAILURE,
      errorMessage: 'failed to get contact',
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
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      error,
      errorResponse: error.response,
      type: REQ_CREATE_CONTACT_FAILURE,
      errorMessage: error.response.data.message || 'Failed To Add New Contact',
    });
  }
};

const deleteContact = (id) => async (dispatch) => {
  const api = `${BASE_URL}/contact/${id}`;

  dispatch({
    api,
    type: REQ_DELETE_CONTACT,
    id,
  });

  try {
    const response = await axios.delete(api);

    dispatch({
      type: REQ_DELETE_CONTACT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      error,
      errorResponse: error.response,
      type: REQ_DELETE_CONTACT_FAILURE,
      errorMessage: error.response.data.message || 'Failed To Delete Contact',
    });
  }
};

const putContact = (id, body) => async (dispatch) => {
  dispatch({
    type: REQ_EDIT_CONTACT,
    id,
    body,
  });

  try {
    const response = await axios.put(`${BASE_URL}/contact/${id}`, { ...body });

    dispatch({
      type: REQ_EDIT_CONTACT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      error,
      errorResponse: error.response,
      type: REQ_EDIT_CONTACT_FAILURE,
      errorMessage: error.response.data.message || 'Failed To Edit Contact',
    });
  }
};

export {
  getContactList,
  getContact,
  postContact,
  putContact,
  deleteContact,
};
