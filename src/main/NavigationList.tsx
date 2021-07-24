import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import {RouteProp} from '@react-navigation/native';

type TextButtonProps = {
  title: string;
  onPress?: () => void;
};

const TextButton = ({title, onPress}: TextButtonProps) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export type NavigationItem = {
  title: string;
  key: string;
};

export type NavigationListScreenProps = {
  navigationList: Array<NavigationItem>;
  onPress?: (key: string) => void;
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

const NavigationList: React.FC<Prop> = ({route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {route.params.navigationList.map(navigationItem => (
          <TextButton
            title={navigationItem.title}
            key={navigationItem.key}
            onPress={() => {
              route.params.onPress?.(navigationItem.key);
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-between',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    minHeight: '20%',
    minWidth: '49%',
    marginTop: '2%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default NavigationList;
