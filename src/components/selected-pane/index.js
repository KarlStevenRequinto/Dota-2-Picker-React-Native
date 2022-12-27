import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SelectionButton from '../selection-button';

const SelectedPane = ({ heroType }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: require(`../../../assets/images/hero-types-icons/${heroType}.png`),
        }}
        style={styles.icon}
      />
      <View style={styles.btnContainer}>
        <SelectionButton title="Team" />
        <SelectionButton title="Ban" />
        <SelectionButton title="Enemy" />
      </View>
    </View>
  );
};

export default SelectedPane;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 180,
  },
  icon: {
    width: 40,
    height: 40,
    position:"absolute",
    top:4,
    left:4
  },
  btnContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 2,
  },
});
