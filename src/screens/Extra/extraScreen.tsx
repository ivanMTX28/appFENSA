import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import VdsLayout from '../../components/layout/layout';
import VdsButton from '../../components/button/button';
import styles from './styles';

const ExtraScreen = ({route, navigation}: any) => {
  const {data, title} = route.params;

  return (
    <VdsLayout>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.card}>
        {data &&
          data.map((item: any, index: number) => (
            <View key={index}>
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
                  <Text style={styles.money}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
      </View>
      <View>
        <VdsButton text="Regresar" onPress={() => navigation.goBack()} />
      </View>
    </VdsLayout>
  );
};

export default ExtraScreen;
