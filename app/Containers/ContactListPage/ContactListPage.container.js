import { connect } from 'react-redux';

import {ContactListPage} from "./ContactListPage.component";
import {getContactList} from "../../Redux/Actions/Contact/ContactAction";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    getContactList: () => dispatch(getContactList())
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactListPage)
