import React from 'react';
import PropTypes from 'prop-types';
import { Platform, Text as RNText, StyleSheet } from 'react-native';

const propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 16,
  color: '#696969',
};

function Text({
  children,
  size,
  color,
}) {
  const { container } = StyleSheet.create({
    container: {
      color,
      fontSize: size,
      ...Platform.select({
        android: {
          fontFamily: 'Roboto',
        },
        ios: {
          fontFamily: 'SFNS Display',
        },
      }),
    },
  });

  return (
    <RNText style={container}>
      {children}
    </RNText>
  );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
