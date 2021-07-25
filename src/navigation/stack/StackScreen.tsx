import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from './types';
import GridList from '../../common/components/GridList';
import {Picker} from '@react-native-community/picker';

export type ScreenProps = {
  navigationType?: string;
};

type Props = StackScreenProps<RootStackParamList, 'StackScreenOne'>;

const StackScreen: React.FC<Props> = ({route, navigation}) => {
  const {navigationList, title, navigationType} = route.params;

  const NavigationType = {
    NAVIGATE: 'navigate',
    PUSH: 'push',
    REPLACE: 'replace',
  };

  const [selectedValue, setSelectedValue] = useState(
    navigationType || NavigationType.NAVIGATE,
  );

  const doNavigation = (screenkey: string) => {
    //update navigationType with initialProps set in StackNavigationScreen
    if (selectedValue === NavigationType.NAVIGATE) {
      navigation.navigate(screenkey, {navigationType: selectedValue});
    } else if (selectedValue === NavigationType.PUSH) {
      navigation.push(screenkey, {navigationType: selectedValue});
    } else {
      navigation.replace(screenkey, {navigationType: selectedValue});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are in {title}</Text>

      <Text style={styles.headingText}>Actions</Text>
      <View style={styles.actionButtonContaineer}>
        <Button title={'Go back'} onPress={navigation.goBack} />
        <Button title={'Pop'} onPress={() => navigation.pop()} />
        <Button title={'Pop to top'} onPress={navigation.popToTop} />
      </View>

      <Text style={styles.headingText}>Navigatoin mode</Text>
      <Picker
        selectedValue={selectedValue}
        mode={'dropdown'}
        onValueChange={(itemValue, _) =>
          setSelectedValue(itemValue.toString())
        }>
        {Object.values(NavigationType).map(navType => (
          <Picker.Item label={navType} value={navType} />
        ))}
      </Picker>

      <Text style={styles.text}>
        Click below button to navigate to other screen
      </Text>
      <GridList list={navigationList} onPress={doNavigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  actionButtonContaineer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 8,
    margin: 4,
    borderWidth: 1,
  },
  headingText: {
    fontSize: 18,
    marginBottom: 4,
  },
});

export default StackScreen;
