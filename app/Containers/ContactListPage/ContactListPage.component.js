import React, { Component } from 'react';
import {
  func,
  shape,
  arrayOf,
  string,
} from 'prop-types';
import {
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';

import { Styles } from './ContactListPage.component.style';
import { Routes } from '../../Navigation';

class ContactListPage extends Component {
  componentDidMount() {
    return this.fetchData();
  }

  fetchData = async () => {
    const { getContactList } = this.props;

    await getContactList();
  }

  renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      onPress={this.onPressItem(item)}
      style={Styles.item}
    >
      <Text>
        {`${item.firstName} ${item.lastName}`}
      </Text>
    </TouchableOpacity>
  );

  onPressItem = (item) => () => {
    const { navigation: { navigate } } = this.props;

    navigate(Routes.MainStackNavigator.ContactDetailPage, { item });
  };

  keyExtractor = (item) => item.id

  itemSeparatorComponent = () => <View style={Styles.separator} />

  render() {
    const { contactList } = this.props;
    return (
      <FlatList
        ItemSeparatorComponent={this.itemSeparatorComponent}
        keyExtractor={this.keyExtractor}
        contentContainerStyle={Styles.container}
        data={contactList}
        renderItem={this.renderItem}
      />
    );
  }
}

ContactListPage.propTypes = {
  navigation: {
    navigate: func.isRequired,
  },
  getContactList: func.isRequired,
  contactList: arrayOf(shape({
    firstName: string,
    lastName: string,
  })),
};

export { ContactListPage };
