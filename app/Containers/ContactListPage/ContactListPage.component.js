import React, { Component } from 'react';
import { func, shape, arrayOf }  from 'prop-types';

import { View, Text } from 'react-native';
import { Styles } from './ContactListPage.component.style';

class ContactListPage extends Component {
  componentDidMount() {
    return this.fetchData();
  }

  fetchData = async () => {
    const { getContactList } = this.props;

    await getContactList();
  }

  render() {
    const { contactList } = this.props;
    return (
      <View style={Styles.container}>
        <Text>{JSON.stringify(contactList)}</Text>
      </View>
    );
  }
}

ContactListPage.propTypes = {
  getContactList: func.isRequired,
  contactList: arrayOf(shape({})),
};

export { ContactListPage };
