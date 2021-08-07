import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from "../../Redux/CreateStore/CreateStore";
import {RootNavigator} from "../../Navigation/RootNavigator/RootNavigator";

type Props = {};
export default class AppComponent extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
          <RootNavigator />
        </Provider>
    );
  }
}
