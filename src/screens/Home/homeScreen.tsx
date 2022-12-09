/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import VdsLayout from '../../components/layout/layout';
import VdsHeader from '../../components/header/header';
import styles from './styles';
import VdsButton from '../../components/button/button';

interface IMovement {
  createdAt: string;
  product: string;
  price: number;
  image: string;
  is_redemption: boolean;
  id: number;
}

const HomeScreen = ({navigation}: any) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<IMovement[]>([]);

  useEffect(() => {
    getTikes();
  }, []);

  const getTikes = async () => {
    try {
      const response = await fetch(
        'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
      );
      const json = await response.json();
      json.forEach((element: any, index: number) => {
        element.price =
          index % 2 === 0 ? Math.abs(element.price) : -Math.abs(element.price);
        data.push(element);
      });
    } catch (error) {
      setData([]);
    } finally {
      setLoading(false);
    }
  };
  const numberNegative = (numero: number, index: number) => {
    return index % 2 === 0 ? Math.abs(numero) : -Math.abs(numero);
  };

  return (
    <VdsLayout>
      <VdsHeader />
      <View style={styles.card}>
        <Text style={styles.title}>Tus movimientos:</Text>
      </View>
      <View style={styles.data}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => `key-${index}`}
            renderItem={({item, index}) => (
              <View key={item.id}>
                <TouchableOpacity
                  style={styles.body}
                  onPress={() =>
                    navigation.navigate('details', {
                      id: item.id,
                      product: item.product,
                      price: item.price,
                    })
                  }>
                  <View>
                    <Image
                      style={styles.img}
                      source={{
                        uri: 'http://loremflickr.com/640/480/city',
                      }}
                    />
                  </View>
                  <View>
                    <Text style={styles.name}>{item.product}</Text>
                  </View>
                  <View>
                    <Text style={styles.money}>
                      {numberNegative(Number(item.price), index)}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
      <View>
        <VdsButton
          onPress={() =>
            navigation.navigate('extra', {
              data: data.filter(x => Number(x.price) < 0),
              title: 'Canjeados',
            })
          }
          text="Canjeados"
        />
        <VdsButton
          onPress={() =>
            navigation.navigate('extra', {
              data: data.filter(x => Number(x.price) > 0),
              title: 'Ganados',
            })
          }
          text="Ganados"
        />
      </View>
    </VdsLayout>
  );
};

export default HomeScreen;
