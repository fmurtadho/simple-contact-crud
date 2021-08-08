import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput, Button,
} from 'react-native';
import {
  func,
  shape,
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

  onChangeText = (text, name) => this.setState({
    [name]: text,
  });

  onPressSave = async () => {
    const {
      firstName,
      lastName,
      age,
      photo,
    } = this.state;

    const { postContact } = this.props;

    await postContact({
      firstName,
      lastName,
      age: Number(age),
      photo,
    });
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
          placeholder="firstName"
          onChangeText={(text) => this.onChangeText(text, 'firstName')}
        />
        <TextInput
          style={Styles.textInput}
          value={lastName}
          onChangeText={(text) => this.onChangeText(text, 'lastName')}
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={(text) => this.onChangeText(text, 'age')}
          keyboardType="numeric"
          value={String(age)}
        />
        <TextInput
          style={Styles.textInput}
          value={photo}
          onChangeText={(text) => this.onChangeText(text, 'photo')}
        />
        <Button title="TEST SAVE" onPress={this.onPressSave} />
      </View>
    );
  }
}

ContactDetailPage.propTypes = {
  navigation: shape({
    getParam: func.isRequired,
  }),
  postContact: func.isRequired,
};

export { ContactDetailPage };
