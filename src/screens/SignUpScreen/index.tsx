import ScreenName from '@src/navigations/screenName';
import { StackNavProps } from '@src/navigations/types';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props extends StackNavProps<typeof ScreenName.SignUp> {
  onSignUp: () => void;
}

const SignUpScreen = (props: Props) => {
  const { onSignUp } = props;
  return (
    <View style={styles.container}>
      <Text>Public Sign Up Screen</Text>
      <Button title="Sign Up" onPress={onSignUp} />
    </View>
  );
};

export default SignUpScreen;
