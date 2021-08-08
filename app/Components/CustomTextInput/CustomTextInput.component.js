import React from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  string,
  func,
  bool,
} from 'prop-types';

import { Styles } from './CustomTextInput.component.style';

const CustomTextInput = ({
  fieldName, label, value, onChangeText, multiline, keyboardType,
}) => {
  const placeholder = `Input ${label}`;
  return (
    <View style={Styles.textInputContainer}>
      <Text style={Styles.textInputLabel}>
        {label}
      </Text>
      <TextInput
        keyboardType={keyboardType}
        multiline={multiline}
        placeholder={placeholder}
        style={Styles.textInput}
        value={value}
        onChangeText={(text) => onChangeText(text, fieldName)}
      />
    </View>
  );
};

CustomTextInput.propTypes = {
  multiline: bool,
  fieldName: string.isRequired,
  label: string.isRequired,
  value: string.isRequired,
  onChangeText: func.isRequired,
  keyboardType: string,
};

export { CustomTextInput };
