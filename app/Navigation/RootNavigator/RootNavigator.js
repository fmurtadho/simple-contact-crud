import { createAppContainer, createStackNavigator } from 'react-navigation';
import ContactListPage from '../../Containers/ContactListPage/ContactListPage.container';
import ContactDetailPage from '../../Containers/ContactDetailPage/ContactDetailPage.container';

const MainStackNavigator = createStackNavigator({
  ContactListPage: { screen: ContactListPage },
  ContactDetailPage: { screen: ContactDetailPage },
});

export const RootNavigator = createAppContainer(MainStackNavigator);
