import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { Styles } from "./ContactListPage.component.style";

class ContactListPage extends Component {

    componentDidMount() {
        return this.fetchData();
    }

    fetchData = async () => {
        const { getContactList } = this.props;

        await getContactList();
    }


    render() {
    return (
        <View style={Styles.container}>
            <Text>Contact List Page</Text>
        </View>
    );
  }
}

export { ContactListPage }
