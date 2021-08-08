import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Text, TouchableOpacity } from 'react-native';

import ContactListPage from '../../Containers/ContactListPage/ContactListPage.container';
import ContactDetailPage from '../../Containers/ContactDetailPage/ContactDetailPage.container';
import { Routes } from '../index';
import { Colors } from '../../Theme';

const MainStackNavigator = createStackNavigator({
  ContactListPage: {
    screen: ContactListPage,
    navigationOptions: ({ navigation }) => ({
      title: 'Contact',
      headerRight: (
        <TouchableOpacity
          style={{
            height: 32,
            width: 32,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: Colors.GREY_MERCURY,
            borderWidth: 1,
            backgroundColor: Colors.GREY_SOLITUDE,
            marginRight: 16,
            borderRadius: 4,
            elevation: 4,
          }}
          onPress={() => navigation.navigate(Routes.MainStackNavigator.ContactDetailPage)}
        >
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>+</Text>
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
