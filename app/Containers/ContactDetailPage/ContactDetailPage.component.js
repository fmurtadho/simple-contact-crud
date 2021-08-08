import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
  Button,
  Alert,
  Text,
  ScrollView, ActivityIndicator,
} from 'react-native';
import {
  bool,
  func,
  shape,
  string,
  number,
} from 'prop-types';

import { Styles } from './ContactDetailPage.component.style';
import { Colors } from '../../Theme';

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
    this.setupOnPressSave();
    return this.fetchContact();
  }

  setupOnPressSave = () => {
    const { navigation: { setParams, getParam } } = this.props;
    const isNewContact = getParam('new', false);

    if (isNewContact) {
      return setParams({ onPressSave: this.onPressSave });
    }

    return setParams({ onPressSave: this.onPressEdit });
  };

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

    return false;
  };

  renderImage = () => {
    const { photo } = this.state;
    if (photo) {
      return (
        <View style={Styles.photoContainer}>
          <Image
            style={Styles.photo}
            source={{ uri: photo }}
          />
        </View>
      );
    }

    return (
      <View style={Styles.photoContainer}>
        <View style={Styles.photoPlaceholder} />
      </View>
    );
  };

  onChangeText = (text, name) => this.setState({
    [name]: text,
  }, this.checkValue);

  checkValue = () => {
    const { contactDetail, navigation: { setParams } } = this.props;
    const {
      firstName,
      lastName,
      age,
      photo,
    } = this.state;

    if (firstName !== contactDetail.firstName) {
      return setParams({ isEditing: true });
    }

    if (lastName !== contactDetail.lastName) {
      return setParams({ isEditing: true });
    }

    if (Number(age) !== Number(contactDetail.age)) {
      return setParams({ isEditing: true });
    }

    if (photo !== contactDetail.photo) {
      return setParams({ isEditing: true });
    }

    return setParams({ isEditing: false });
  };

  onPressSave = async () => {
    const {
      firstName,
      lastName,
      age,
      photo,
    } = this.state;
    const { navigation: { pop } } = this.props;

    const { postContact } = this.props;

    await postContact({
      firstName,
      lastName,
      age: Number(age),
      photo,
    });

    const {
      message,
      error,
      errorMessage,
    } = this.props;

    if (error) {
      return Alert.alert('ERROR', errorMessage);
    }

    const successAlertButtons = [{
      text: 'OK',
      onPress: () => pop(1),
      style: 'default',
    }];

    const successAlertOptions = {
      cancelable: true,
      onDismiss: () => pop(1),
    };

    return Alert.alert('SUCCESS', message, successAlertButtons, successAlertOptions);
  };

  onPressDelete = async () => {
    const { id } = this.state;
    const { deleteContact, navigation: { pop } } = this.props;

    await deleteContact(id);

    const { error, errorMessage, message } = this.props;

    if (error) {
      return Alert.alert('ERROR', errorMessage);
    }

    const successAlertButtons = [{
      text: 'OK',
      onPress: () => pop(1),
      style: 'default',
    }];

    const successAlertOptions = {
      cancelable: true,
      onDismiss: () => pop(1),
    };

    return Alert.alert('SUCCESS', message, successAlertButtons, successAlertOptions);
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

    const { error, errorMessage, message } = this.props;

    if (error) {
      return Alert.alert('ERROR', errorMessage);
    }

    const successAlertButtons = [{
      text: 'OK',
      onPress: this.fetchContact,
      style: 'default',
    }];

    const successAlertOptions = {
      cancelable: true,
      onDismiss: this.fetchContact,
    };

    return Alert.alert('SUCCESS', message, successAlertButtons, successAlertOptions);
  };

  renderDeleteButton = () => {
    const { navigation: { getParam } } = this.props;
    const isNewContact = getParam('new', false);

    if (!isNewContact) {
      return (
        <View style={Styles.deleteButtonContainer}>
          <Button
            color={Colors.CARAMEL.RED_LIP}
            title="DELETE CONTACT"
            onPress={this.onPressDelete}
          />
        </View>
      );
    }

    return <View />;
  }

  render() {
    const {
      firstName,
      lastName,
      age,
      photo,
    } = this.state;
    const { loading } = this.props;

    if (loading) {
      return (
        <View style={Styles.loadingContainer}>
          <ActivityIndicator
            color={Colors.CARAMEL.LAKE}
            size="large"
          />
        </View>
      );
    }

    return (
      <ScrollView style={Styles.container}>
        {this.renderImage()}
        <Text style={Styles.textInputLabel}>
          First Name
        </Text>
        <TextInput
          placeholder="Input First Name"
          style={Styles.textInput}
          value={firstName}
          onChangeText={(text) => this.onChangeText(text, 'firstName')}
        />
        <Text style={Styles.textInputLabel}>
          Last Name
        </Text>
        <TextInput
          placeholder="Input Last Name"
          style={Styles.textInput}
          value={lastName}
          onChangeText={(text) => this.onChangeText(text, 'lastName')}
        />
        <Text style={Styles.textInputLabel}>
          Age
        </Text>
        <TextInput
          placeholder="Input Age"
          style={Styles.textInput}
          onChangeText={(text) => this.onChangeText(text, 'age')}
          keyboardType="numeric"
          value={String(age)}
        />
        <Text style={Styles.textInputLabel}>
          Photo URL
        </Text>
        <TextInput
          placeholder="Input Photo URL"
          multiline
          style={Styles.textInput}
          value={photo}
          onChangeText={(text) => this.onChangeText(text, 'photo')}
        />
        {this.renderDeleteButton()}
      </ScrollView>
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
  loading: bool.isRequired,
  message: string,
};

export { ContactDetailPage };
