import ScreenName from '@src/navigations/screenName';
import { StackNavProps } from '@src/navigations/types';

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props extends StackNavProps<typeof ScreenName.Login> {
  onLogin: () => void;
}

const LoginScreen = (props: Props) => {
  const { navigation, onLogin } = props;
  return (
    <View style={styles.container}>
      <Image source={require('./src/assets/logo.png')} style={styles.logo} />
      <Text style={styles.foodninja}>FoodNinja </Text>
      {/* <Text style={styles.food}>Deliever Favorite Food </Text>
      <Text style={styles.text3}>Login To Your Account </Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    with: 175,
    height: 139,
    left: 100,
    top: 47,
  },
  foodninja: {
    width: 188,
  },
});

export default LoginScreen;
