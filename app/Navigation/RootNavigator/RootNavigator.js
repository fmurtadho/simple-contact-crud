import { createAppContainer, createStackNavigator } from 'react-navigation';
import ContactListPage from '../../Containers/ContactListPage/ContactListPage.container';

const MainStackNavigator = createStackNavigator({
  ContactListPage: { screen: ContactListPage },
});

export const RootNavigator = createAppContainer(MainStackNavigator);
