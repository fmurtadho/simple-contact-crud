import { connect } from 'react-redux';

import { ContactDetailPage } from './ContactDetailPage.component';
import { postContact } from '../../Redux/Actions/Contact/ContactAction';

const mapStateToProps = (state) => ({
  loading: state.contact.loading,
  error: state.contact.error,
  errorMessage: state.contact.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  postContact: (body) => dispatch(postContact(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailPage);
