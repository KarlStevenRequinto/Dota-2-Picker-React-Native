import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeroList from '../../mock-data/mock-hero-list';
import HeroContainer from '../../components/hero-container';
import ListHeader from '../../components/list-header';

const HeroListSection = ({
  pickedHeroHandler,
  strHeroes,
  agiHeroes,
  intHeroes,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <ListHeader headerTitle="STRENGTH" heroType="strength" />
        <View>
          <FlatList
            data={strHeroes}
            style={{ flexDirection: 'row' }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <HeroContainer
                  heroType="STRENGTH"
                  heroName={item.localized_name
                    .toLowerCase()
                    .replace(/\s/g, '_')}
                  containerStyle={styles.imageBox}
                  onPressHero={() => pickedHeroHandler(item)}
                />
              );
            }}
            initialNumToRender={strHeroes.length}
            numColumns={17}
          />
        </View>
      </View>
      <View style={{ marginBottom: 20 }}>
        <ListHeader headerTitle="AGILITY" heroType="agility" />
        <View>
          <FlatList
            data={agiHeroes}
            style={{ flexDirection: 'row' }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <HeroContainer
                  heroType="AGILITY"
                  heroName={
                    item.localized_name.toLowerCase().replace(/\s/g, '_') ===
                    'anti-mage'
                      ? 'anti_mage'
                      : item.localized_name.toLowerCase().replace(/\s/g, '_')
                  }
                  containerStyle={styles.imageBox}
                  onPressHero={() => pickedHeroHandler(item)}
                />
              );
            }}
            initialNumToRender={agiHeroes.length}
            numColumns={17}
          />
        </View>
      </View>
      <View style={{ marginBottom: 20 }}>
        <ListHeader headerTitle="INTELLIGENCE" heroType="intelligence" />
        <View>
          <FlatList
            data={intHeroes}
            style={{ flexDirection: 'row' }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              const name = item.localized_name
                .toLowerCase()
                .replace(/\s/g, '_');
              return (
                <HeroContainer
                  heroType="INTELLIGENCE"
                  heroName={
                    name === "nature's_prophet"
                      ? 'natures_prophet'
                      : name === 'outworld_devourer'
                      ? 'outworld_destroyer'
                      : name
                  }
                  containerStyle={styles.imageBox}
                  onPressHero={() => pickedHeroHandler(item)}
                />
              );
            }}
            initialNumToRender={intHeroes.length}
            numColumns={17}
          />
        </View>
      </View>
    </View>
  );
};

export default HeroListSection;

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  imageBox: {
    margin: 2,
  },
});
