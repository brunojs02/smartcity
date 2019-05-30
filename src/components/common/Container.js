import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: 10,
  },
});

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function Container({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

Container.propTypes = propTypes;

export default Container;
