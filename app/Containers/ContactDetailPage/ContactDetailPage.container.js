import { connect } from 'react-redux';

import { ContactDetailPage } from './ContactDetailPage.component';
import {
  getContact,
  postContact,
  putContact,
  deleteContact,
} from '../../Redux/Actions/Contact/ContactAction';

const mapStateToProps = (state) => ({
  loading: state.contact.loading,
  error: state.contact.error,
  errorMessage: state.contact.errorMessage,
  contactDetail: state.contact.contactDetail,
  message: state.contact.message,
});

const mapDispatchToProps = (dispatch) => ({
  getContact: (id) => dispatch(getContact(id)),
  postContact: (body) => dispatch(postContact(body)),
  putContact: (id, body) => dispatch(putContact(id, body)),
  deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailPage);
