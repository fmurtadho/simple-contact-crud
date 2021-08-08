import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {
  Text,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';

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
          onPress={() => navigation.navigate(
            Routes.MainStackNavigator.ContactDetailPage, {
              new: true,
            },
          )}
        >
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
      ),
    }),
  },
  ContactDetailPage: {
    screen: ContactDetailPage,
    navigationOptions: ({ navigation }) => {
      const onPressSave = navigation.getParam('onPressSave');
      const isEditing = navigation.getParam('isEditing', false);
      const isNewContact = navigation.getParam('new', false);
      return {
        title: 'Contact Detail',
        headerRight: (
          <View style={{ marginRight: 16 }}>
            <Button
              disabled={!isEditing && !isNewContact}
              title="save"
              onPress={onPressSave}
              color={Colors.CARAMEL.LAKE}
            />
          </View>
        ),
      };
    },
  },
});

export const RootNavigator = createAppContainer(MainStackNavigator);
