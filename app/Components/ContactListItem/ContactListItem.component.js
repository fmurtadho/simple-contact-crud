import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  string,
  func,
} from 'prop-types';

import { Styles } from './ContactLIstItem.component.style';

const ContactListItem = ({
  id, onPress, photo, firstName, lastName,
}) => (
  <TouchableOpacity
    key={id}
    onPress={onPress}
    style={Styles.item}
  >
    <Image
      style={Styles.avatar}
      source={{ uri: photo }}
    />
    <Text style={Styles.name}>
      {`${firstName} ${lastName}`}
    </Text>
  </TouchableOpacity>
);

ContactListItem.propTypes = {
  id: string.isRequired,
  onPress: func.isRequired,
  photo: string.isRequired,
  firstName: string.isRequired,
  lastName: string.isRequired,
};

export {
  ContactListItem,
};
