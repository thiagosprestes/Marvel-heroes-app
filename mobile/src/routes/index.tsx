import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RoutesName, RoutesParams} from './routes';
import {HomeScreen} from '../features/Home';
import {CharacterScreen} from '../features/Character';

const Stack = createNativeStackNavigator<RoutesParams>();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RoutesName.Home} component={HomeScreen} />
      <Stack.Screen name={RoutesName.Character} component={CharacterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export {Routes};
