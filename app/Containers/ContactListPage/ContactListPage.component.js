import React, { Component } from 'react';
import {
  func,
  shape,
  arrayOf,
  string,
  bool,
} from 'prop-types';
import {
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Image,
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
      onPress={this.onPressItem(item.id)}
      style={Styles.item}
    >
      <Image
        style={Styles.avatar}
        source={{ uri: item.photo }}
      />
      <Text style={Styles.name}>
        {`${item.firstName} ${item.lastName}`}
      </Text>
    </TouchableOpacity>
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
    firstName: string,
    lastName: string,
  })),
  loading: bool.isRequired,
};

export { ContactListPage };
