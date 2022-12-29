import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SelectionButton = ({ title,draftHandler }) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor:
            title === 'Team' ? 'green' : title === 'Enemy' ? 'red' : 'grey',
        },
      ]}
      onPress={draftHandler}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

export default SelectionButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    borderRadius:2
  },
});
