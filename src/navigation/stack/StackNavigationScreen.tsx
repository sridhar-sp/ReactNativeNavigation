import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import StackScreenOne from './StackScreenOne';

const StackNavigationScreen: React.FC<{}> = () => {
  type RootStackParamList = {
    StackScreenOne: undefined;
  };

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName={'StackScreenOne'}>
      <Stack.Screen name="StackScreenOne" component={StackScreenOne} />
    </Stack.Navigator>
  );
};

export default StackNavigationScreen;
