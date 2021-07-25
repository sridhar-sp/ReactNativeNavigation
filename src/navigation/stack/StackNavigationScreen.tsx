import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import StackScreen from './StackScreen';
import {RootStackParamList} from './types';
import {Item} from '../../common/components/GridList';

const getStackScreenList = (): Array<Item> => {
  return [
    {
      title: 'Stack screen one',
      key: 'StackScreenOne',
    },
    {
      title: 'Stack screen two',
      key: 'StackScreenTwo',
    },
    {
      title: 'Stack screen three',
      key: 'StackScreenThree',
    },
    {
      title: 'Stack screen four',
      key: 'StackScreenFour',
    },
    {
      title: 'Stack screen five',
      key: 'StackScreenFive',
    },
    {
      title: 'Stack screen six',
      key: 'StackScreenSix',
    },
  ];
};

const StackNavigationScreen: React.FC<{}> = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  const screenList = getStackScreenList();

  return (
    <Stack.Navigator initialRouteName={'StackScreenOne'}>
      <Stack.Screen
        name="StackScreenOne"
        component={StackScreen}
        initialParams={{title: screenList[0].title, navigationList: screenList}}
        options={{title: screenList[0].title}}
      />
      <Stack.Screen
        name="StackScreenTwo"
        component={StackScreen}
        initialParams={{title: screenList[1].title, navigationList: screenList}}
        options={{title: screenList[1].title}}
      />
      <Stack.Screen
        name="StackScreenThree"
        component={StackScreen}
        initialParams={{title: screenList[2].title, navigationList: screenList}}
        options={{title: screenList[2].title}}
      />
      <Stack.Screen
        name="StackScreenFour"
        component={StackScreen}
        initialParams={{title: screenList[3].title, navigationList: screenList}}
        options={{title: screenList[3].title}}
      />
      <Stack.Screen
        name="StackScreenFive"
        component={StackScreen}
        initialParams={{title: screenList[4].title, navigationList: screenList}}
        options={{title: screenList[4].title}}
      />
      <Stack.Screen
        name="StackScreenSix"
        component={StackScreen}
        initialParams={{title: screenList[5].title, navigationList: screenList}}
        options={{title: screenList[5].title}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigationScreen;
