import React from 'react';
import {StyleSheet, View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import {RouteProp} from '@react-navigation/native';
import GridList, {Item} from '../common/components/GridList';

export type NavigationListScreenProps = {
  navigationList: Array<Item>;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NavigationListScreen'
>;

type HomeScreenRoute = RouteProp<RootStackParamList, 'NavigationListScreen'>;

type Prop = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRoute;
};

const NavigationList: React.FC<Prop> = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <GridList
        list={route.params.navigationList}
        onPress={navigationItem => {
          navigation.navigate(navigationItem);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

export default NavigationList;
