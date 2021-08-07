import {
    REQ_CONTACT_LIST,
    REQ_CONTACT_LIST_SUCCESS,
    REQ_CONTACT_LIST_FAILURE
} from "../../Actions";

const initialState = {
    loading: false
};

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQ_CONTACT_LIST:
            return {
                loading: true,
                ...state,
            }
        case REQ_CONTACT_LIST_SUCCESS:
            return {
                loading: false,
                ...state,
            }
        case REQ_CONTACT_LIST_FAILURE:
            return {
                loading: false,
                ...state
            }
        default:
            return {...state}
    }
};

export { ContactReducer }
