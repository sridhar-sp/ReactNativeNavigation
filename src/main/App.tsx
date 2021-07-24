/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationList from './NavigationList';
import StackNavigationScreen from '../navigation/stack/StackNavigationScreen';
import {RootStackParamList} from './types';

const App = () => {
  const data = require('../assets/data.json');
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'NavigationListScreen'}>
        <Stack.Screen
          name="NavigationListScreen"
          component={NavigationList}
          initialParams={{
            navigationList: data.navigationList,
            onPress: key => {
              console.log(key);
            },
          }}
        />
        <Stack.Screen
          name="StackNavigationScreen"
          component={StackNavigationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
