import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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

export type Item = {
  title: string;
  key: string;
};

export type GridListScreenProps = {
  list: Array<Item>;
  onPress?: (key: string) => void;
};

const GridList: React.FC<GridListScreenProps> = ({list, onPress}) => {
  return (
    <FlatList
      style={styles.container}
      data={list}
      renderItem={({item}) => (
        <TextButton
          title={item.title}
          key={item.key}
          onPress={() => {
            onPress?.(item.key);
          }}
        />
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    minHeight: 100,
    minWidth: '48%',
    margin: '1%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default GridList;
