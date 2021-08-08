import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
} from 'react-native';
import {
  func, shape,
} from 'prop-types';

import { Styles } from './ContactDetailPage.component.style';

class ContactDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
    };
  }

  componentDidMount() {
    return this.setData();
  }

  setData = () => {
    const { navigation: { getParam } } = this.props;
    const item = getParam('item', 'NO-ITEM');

    if (item !== 'NO-ITEM') {
      this.setState({
        ...item,
      });
    }
  };

  renderImage = () => {
    const { photo } = this.state;
    if (photo) {
      return (
        <Image
          style={Styles.photo}
          source={{ uri: photo }}
        />
      );
    }

    return <View style={Styles.photo} />;
  };

  render() {
    const {
      id,
      firstName,
      lastName,
      age,
      photo,
    } = this.state;

    return (
      <View style={Styles.container}>
        {this.renderImage()}
        <TextInput
          style={Styles.textInput}
          value={id}
        />
        <TextInput
          style={Styles.textInput}
          value={firstName}
        />
        <TextInput
          value={lastName}
        />
        <TextInput
          value={age.toString()}
        />
        <TextInput
          value={photo}
        />
      </View>
    );
  }
}

ContactDetailPage.propTypes = {
  navigation: shape({
    getParam: func.isRequired,
  }),
};

export { ContactDetailPage };
