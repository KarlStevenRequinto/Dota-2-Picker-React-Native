import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopColumn from '../sections/top-column-section';
import HeroListSection from '../sections/hero-list-section';
import HeroPickSection from '../sections/hero-picks-section';

const LandingPage = () => {
  
  return (
    <View style={styles.container}>
      <TopColumn />
      <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 100 }}>
        <HeroListSection />
        <HeroPickSection />
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    overflow: 'hidden',
  },
});
