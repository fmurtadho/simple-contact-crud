import axios from "axios";

import {
    REQ_CONTACT_LIST,
    REQ_CONTACT_LIST_FAILURE,
    REQ_CONTACT_LIST_SUCCESS
} from '../index';

const getContactList = () => async (dispatch) => {
    dispatch({
        type: REQ_CONTACT_LIST
    })

    try {
        const response = await axios.get('https://simple-contact-crud.herokuapp.com/contact');
        dispatch({
            type: REQ_CONTACT_LIST_SUCCESS,
            response
        })

    } catch (error) {
        dispatch({
            type: REQ_CONTACT_LIST_FAILURE
        })
    }
}

export { getContactList }
