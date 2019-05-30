import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { default as Ionicons } from 'react-native-vector-icons/Ionicons';

const propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

const defaultProps = {
  size: 22,
};

const os = Platform.OS === 'ios' ? 'ios' : 'md';

function Icon({ name, size }) {
  return (
    <Ionicons
      name={`${os}-${name}`}
      size={size}
    />
  );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
