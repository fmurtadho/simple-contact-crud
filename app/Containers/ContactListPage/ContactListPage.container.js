import { connect } from 'react-redux';

import { ContactListPage } from './ContactListPage.component';
import { getContactList } from '../../Redux/Actions/Contact/ContactAction';

const mapStateToProps = (state) => ({
  contactList: state.contact.data,
  loading: state.contact.loading,
  error: state.contact.error,
  erorrMessage: state.contact.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getContactList: () => dispatch(getContactList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListPage);
