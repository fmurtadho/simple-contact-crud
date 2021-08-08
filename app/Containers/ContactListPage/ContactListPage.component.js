import React, { Component } from 'react';
import {
  func,
  shape,
  arrayOf,
  string,
  bool,
  number,
} from 'prop-types';
import {
  FlatList,
  View,
} from 'react-native';

import { Styles } from './ContactListPage.component.style';
import { Routes } from '../../Navigation';
import { ContactListItem } from '../../Components/ContactListItem/ContactListItem.component';

class ContactListPage extends Component {
  componentDidMount() {
    return this.fetchData();
  }

  fetchData = async () => {
    const { getContactList } = this.props;

    await getContactList();
  }

  renderItem = ({ item }) => (
    <ContactListItem
      firstName={item.firstName}
      lastName={item.lastName}
      photo={item.photo}
      id={item.id}
      onPress={this.onPressItem(item.id)}
    />
  );

  onPressItem = (id) => () => {
    const { navigation: { navigate } } = this.props;

    navigate(Routes.MainStackNavigator.ContactDetailPage, { id });
  };

  keyExtractor = (item) => item.id

  itemSeparatorComponent = () => <View style={Styles.separator} />

  render() {
    const { contactList, loading } = this.props;
    return (
      <FlatList
        refreshing={loading}
        onRefresh={this.fetchData}
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
    id: string,
    firstName: string,
    lastName: string,
    age: number,
    photo: string,
  })),
  loading: bool.isRequired,
};

export { ContactListPage };
