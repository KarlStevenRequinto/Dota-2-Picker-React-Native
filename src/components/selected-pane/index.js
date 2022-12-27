import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SelectionButton from '../selection-button';

const SelectedPane = ({ clickedHero, appRunning }) => {
  const hero = clickedHero;
  if (appRunning) {
    console.log(hero);
  }
  const heroType = hero ? hero.primary_attr : null;
  const heroTypeClicked =
    heroType === 'str'
      ? 'strength'
      : heroType === 'agi'
      ? 'agility'
      : heroType === 'int'
      ? 'intelligence'
      : null;
  return (
    <View style={styles.container}>
      {heroTypeClicked && (
        <Image
          source={{
            uri: require(`../../../assets/images/hero-types-icons/${heroTypeClicked}.png`),
          }}
          style={styles.icon}
        />
      )}

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
    position: 'absolute',
    top: 4,
    left: 4,
  },
  btnContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 2,
  },
});
