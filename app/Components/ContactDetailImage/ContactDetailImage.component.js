import React from 'react';
import { Image, View } from 'react-native';
import { string } from 'prop-types';

import { Styles } from './ContactDetailImage.component.style';

const ContactDetailImage = ({ uri }) => {
  if (uri) {
    return (
      <View style={Styles.photoContainer}>
        <Image
          style={Styles.photo}
          source={{ uri }}
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

ContactDetailImage.propTypes = {
  uri: string.isRequired,
};

export { ContactDetailImage };
