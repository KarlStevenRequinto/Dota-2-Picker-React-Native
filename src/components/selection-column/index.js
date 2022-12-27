import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SelectionList from '../selection-list';
import HeroList from '../../mock-data/mock-hero-list';
import HeroContainer from '../hero-container';

const SelectionColumn = () => {
  const coreSuggestions = HeroList.filter(
    (hero) => hero.role.core === true && hero.role.support === false
  );
  const supportSuggestions = HeroList.filter(
    (hero) => hero.role.support === true && hero.role.core === false
  );
  const avoidSuggestions = HeroList.filter(
    (hero) => hero.role.core === true && hero.role.support === true
  );

  return (
    <View style={{ flexDirection: 'row', width: '100%' }}>
      <SelectionList
        title="CORE"
        data={coreSuggestions}
        suggestList={({ item }) => {
          return (
            <HeroContainer
              heroType={item.class.toUpperCase()}
              heroName={item.name.toLowerCase().replace(/\s/g, '_')}
              containerStyle={styles.heroBox}
              imageStyle={styles.image}
            />
          );
        }}
      />
      <SelectionList
        title="SUPPORT"
        data={supportSuggestions}
        suggestList={({ item }) => {
          return (
            <HeroContainer
              heroType={item.class.toUpperCase()}
              heroName={item.name.toLowerCase().replace(/\s/g, '_')}
              containerStyle={styles.heroBox}
              imageStyle={styles.image}
            />
          );
        }}
      />
      <SelectionList
        title="AVOID"
        data={avoidSuggestions}
        suggestList={({ item }) => {
          return (
            <HeroContainer
              heroType={item.class.toUpperCase()}
              heroName={item.name.toLowerCase().replace(/\s/g, '_')}
              containerStyle={styles.heroBox}
              imageStyle={styles.image}
            />
          );
        }}
      />
    </View>
  );
};

export default SelectionColumn;

const styles = StyleSheet.create({
  heroBox: {
    width: '100%',
    marginVertical: 1,
    backgroundColor: 'yellowgreen',
    
  },
  image: {
    width: '100%',
  },
});
