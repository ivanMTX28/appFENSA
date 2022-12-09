import {View, Text} from 'react-native';
import React from 'react';
import VdsLayout from '../../components/layout/layout';
import VdsButton from '../../components/button/button';
import styles from './styles';

const DetailsScreen = ({route, navigation}: any) => {
  const {product, price} = route.params;

  const titlePoint = () => {
    return Math.sign(price) === 1 ? 'Ganaste' : 'Canjeaste';
  };

  return (
    <VdsLayout>
      <View style={styles.card}>
        <Text style={styles.title}>{product}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{titlePoint()}</Text>
        <Text style={styles.title}>
          {price} {'puntos'}
        </Text>
      </View>
      <View>
        <VdsButton text="Regresar" onPress={() => navigation.goBack()} />
      </View>
    </VdsLayout>
  );
};

export default DetailsScreen;
