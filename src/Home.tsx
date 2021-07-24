import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextButton title={'Stack'} />
        <TextButton title={'Drawer'} />
        <TextButton title={'Top tab'} />
        <TextButton title={'Bottom tab'} />
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
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Home;
