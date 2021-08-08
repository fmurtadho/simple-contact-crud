import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Text, TouchableOpacity } from 'react-native';

import ContactListPage from '../../Containers/ContactListPage/ContactListPage.container';
import ContactDetailPage from '../../Containers/ContactDetailPage/ContactDetailPage.container';
import { Routes } from '../index';

const MainStackNavigator = createStackNavigator({
  ContactListPage: {
    screen: ContactListPage,
    navigationOptions: ({ navigation }) => ({
      title: 'Contact',
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.MainStackNavigator.ContactDetailPage)}
        >
          <Text>+</Text>
        </TouchableOpacity>
      ),
    }),
  },
  ContactDetailPage: {
    screen: ContactDetailPage,
    navigationOptions: ({
      title: 'Contact Detail',
    }),
  },
});

export const RootNavigator = createAppContainer(MainStackNavigator);
