import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const VdsButton = ({onPress, text}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default VdsButton;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#CEECF5',
    borderRadius: 25,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
