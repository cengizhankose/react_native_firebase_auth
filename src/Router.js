import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import MainScreen from './screens/mainScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
