import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  PasswordForget: undefined;
};

export type StackNavProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
