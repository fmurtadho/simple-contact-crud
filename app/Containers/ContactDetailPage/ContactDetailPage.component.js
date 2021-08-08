import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {
  bool,
  func,
  shape,
  string,
  number,
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
    return this.fetchContact();
  }

  fetchContact = async () => {
    const { navigation: { getParam }, getContact } = this.props;
    const id = getParam('id', 'NO-ID');

    if (id !== 'NO-ID') {
      await getContact(id);

      const {
        contactDetail,
        error,
        errorMessage,
      } = this.props;

      if (!error) {
        return this.setState({
          id: contactDetail.id,
          firstName: contactDetail.firstName,
          lastName: contactDetail.lastName,
          age: contactDetail.age,
          photo: contactDetail.photo,
        });
      }

      return Alert.alert(errorMessage);
    }

    return Alert.alert('Invalid Contact ID');
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

  onPressDelete = async () => {
    const { id } = this.state;
    const { deleteContact } = this.props;

    await deleteContact(id);
  };

  onPressEdit = async () => {
    const { id } = this.state;
    const { putContact } = this.props;
    const {
      firstName,
      lastName,
      age,
      photo,
    } = this.state;

    await putContact(id, {
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
        <Button title="TEST DELETE" onPress={this.onPressDelete} />
        <Button title="TEST UPDATE" onPress={this.onPressEdit} />
      </View>
    );
  }
}

ContactDetailPage.propTypes = {
  navigation: shape({
    getParam: func.isRequired,
  }),
  postContact: func.isRequired,
  deleteContact: func.isRequired,
  putContact: func.isRequired,
  getContact: func.isRequired,
  contactDetail: {
    firstName: string.isRequired,
    lastName: string.isRequired,
    age: number.isRequired,
    photo: string.isRequired,
  },
  error: bool.isRequired,
  errorMessage: string,
};

export { ContactDetailPage };
