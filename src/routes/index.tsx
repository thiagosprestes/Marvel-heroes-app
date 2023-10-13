import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../features/Home';
import {RoutesName, RoutesParams} from './routes';

const Stack = createNativeStackNavigator<RoutesParams>();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RoutesName.Home} component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export {Routes};
