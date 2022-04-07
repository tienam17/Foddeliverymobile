import ScreenName from '@src/navigations/screenName';
import { StackNavProps } from '@src/navigations/types';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LandingScreen = ({ navigation }: StackNavProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <Text>Public Landing Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(ScreenName.Home)}
      />
    </View>
  );
};

export default LandingScreen;
