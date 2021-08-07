import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';

import {
  REQ_CONTACT_LIST,
  REQ_CONTACT_LIST_FAILURE,
  REQ_CONTACT_LIST_SUCCESS,
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

export { getContactList };
