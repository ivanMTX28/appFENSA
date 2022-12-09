import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const VdsHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.name}>Jose Perez Joglar</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subTitle}>Cumpleaños: 18 de Octubre</Text>
      </View>
    </View>
  );
};

export default VdsHeader;
