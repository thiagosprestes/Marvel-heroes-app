import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './assets/icons/menu.svg';
import Search from './assets/icons/search.svg';

import Home from './pages/Home';
import Character from './pages/Character';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerStyle: {
                            backgroundColor: '#f8f8f8',
                            elevation: 0,
                        },
                        headerLeftContainerStyle: {
                            paddingLeft: 20,
                        },
                        headerRightContainerStyle: {
                            paddingRight: 20,
                        },
                        headerTitleAlign: 'center',
                        headerLeft: () => <Menu />,
                        headerTitle: () => (
                            <Image source={require('./assets/logo.png')} />
                        ),
                        headerRight: () => <Search />,
                    }}
                />
                <AppStack.Screen
                    name="Character"
                    component={Character}
                    options={{
                        headerTransparent: true,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            display: 'none',
                        },
                    }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
