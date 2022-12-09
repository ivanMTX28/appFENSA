import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/homeScreen';
import DetailsScreen from '../screens/Details/detailsScreen';
import ExtraScreen from '../screens/Extra/extraScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="details" component={DetailsScreen} />
      <Stack.Screen name="extra" component={ExtraScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
