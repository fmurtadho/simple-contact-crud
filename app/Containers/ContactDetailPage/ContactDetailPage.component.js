import React, { Component } from 'react';
import {
  View,
  Button,
  Alert,
  ScrollView,
  ActivityIndicator,
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
import { ContactDetailImage } from '../../Components/ContactDetailImage/ContactDetailImage.component';
import { CustomTextInput } from '../../Components/CustomTextInput/CustomTextInput.component';

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
    const { navigation: { pop }, postContact, getContactList } = this.props;

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
      onPress: () => {
        getContactList();
        return pop(1);
      },
      style: 'default',
    }];

    const successAlertOptions = {
      cancelable: true,
      onDismiss: () => {
        getContactList();
        return pop(1);
      },
    };

    return Alert.alert('SUCCESS', message, successAlertButtons, successAlertOptions);
  };

  onPressDelete = async () => {
    const { id } = this.state;
    const { deleteContact, navigation: { pop }, getContactList } = this.props;

    await deleteContact(id);

    const { error, errorMessage, message } = this.props;

    if (error) {
      return Alert.alert('ERROR', errorMessage);
    }

    const successAlertButtons = [{
      text: 'OK',
      onPress: () => {
        getContactList();
        return pop(1);
      },
      style: 'default',
    }];

    const successAlertOptions = {
      cancelable: true,
      onDismiss: () => {
        getContactList();
        return pop(1);
      },
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
        <ContactDetailImage uri={photo} />
        <CustomTextInput
          label="First Name"
          onChangeText={this.onChangeText}
          fieldName="firstName"
          value={firstName}
        />
        <CustomTextInput
          label="Last Name"
          onChangeText={this.onChangeText}
          fieldName="lastName"
          value={lastName}
        />
        <CustomTextInput
          keyboardType="numeric"
          label="Age"
          onChangeText={this.onChangeText}
          fieldName="age"
          value={String(age)}
        />
        <CustomTextInput
          multiline
          label="Photo URL"
          onChangeText={this.onChangeText}
          fieldName="photo"
          value={photo}
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
  getContactList: func.isRequired,
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
