import React from 'react';
import { Provider } from 'react-redux';
import store from '../../Redux/CreateStore/CreateStore';
import { RootNavigator } from '../../Navigation/RootNavigator/RootNavigator';

export default function AppComponent() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
