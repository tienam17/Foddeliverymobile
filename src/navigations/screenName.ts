import { RootStackParamList } from './types';

// interface ScreenNameType {
//   Landing: keyof RootStackParamList;
//   Home: keyof RootStackParamList;
//   SignIn: keyof RootStackParamList;
// }

const ScreenName = {
  Landing: 'Landing' as keyof RootStackParamList,
  Home: 'Home' as keyof RootStackParamList,
  Login: 'Login' as keyof RootStackParamList,
  SignUp: 'SignUp' as keyof RootStackParamList,
  PasswordForget: 'PasswordForget' as keyof RootStackParamList,
};

export default ScreenName;
