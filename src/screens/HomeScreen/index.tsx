import { RootStackParamList } from '@src/navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = (props: Props) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>Protected Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
