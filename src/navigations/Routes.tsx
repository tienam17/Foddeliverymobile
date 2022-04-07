import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@src/screens/HomeScreen';
// import LandingScreen from '@src/screens/LandingScreen';
import ScreenName from './screenName';
import { RootStackParamList } from './types';
import LoginScreen from '@src/screens/LoginScreen';
import SignUpScreen from '@src/screens/SignUpScreen';
import PasswordForgetScreen from '@src/screens/PasswordForgetScreen';

interface RoutesProps {}

const Stack = createNativeStackNavigator<RootStackParamList>();

// const Tab = createBottomTabNavigator();

// const AppTab = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name=" Notifiactions" component={Notifications} />
//       <Tab.Screen name=" Profile" component={Profile} />
//       <Tab.Screen name=" Search" component={Search} />
//     </Tab.Navigator>
//   );
// };

const Routes = ({}: RoutesProps) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => {
    // TODO implement real sign in mechanism

    setIsAuthenticated(true);
  };

  const handleLogOut = () => {
    // TODO implement real sign out mechanism

    setIsAuthenticated(false);
  };

  const handleSignUp = () => {
    // TODO implement real sign up mechanism

    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name={ScreenName.Home}
            component={HomeScreen}
            options={{
              headerRight: () => (
                <Button onPress={handleLogOut} title="Log Out" />
              ),
            }}
          />
        ) : (
          <>
            {/* <Stack.Screen
              name={ScreenName.Landing}
              component={LandingScreen}
              options={{
                animationTypeForReplace: 'pop',
              }}
            /> */}

            <Stack.Screen name={ScreenName.Login}>
              {props => <LoginScreen {...props} onLogin={handleLogin} />}
            </Stack.Screen>

            <Stack.Screen name={ScreenName.SignUp}>
              {props => <SignUpScreen {...props} onSignUp={handleSignUp} />}
            </Stack.Screen>

            <Stack.Screen
              name={ScreenName.PasswordForget}
              component={PasswordForgetScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
