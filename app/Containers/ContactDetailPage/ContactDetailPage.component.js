import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Styles } from '../ContactListPage/ContactListPage.component.style';

class ContactDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>
          ContactDetailPage
        </Text>
      </View>
    );
  }
}

export { ContactDetailPage };
