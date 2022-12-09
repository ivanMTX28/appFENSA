import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import React from 'react';

type Props = {
  children?: any;
};

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const VdsLayout = ({children}: Props) => {
  const styles = StyleSheet.create({
    body: {
      backgroundColor: '#F5F5F5',
      height: '100%',
    },
    container: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.body}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: SCREEN_HEIGHT}}
          contentInsetAdjustmentBehavior="automatic">
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VdsLayout;
