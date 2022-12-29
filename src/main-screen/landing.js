import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TopColumn from "../sections/top-column-section";
import HeroListSection from "../sections/hero-list-section";
import HeroPickSection from "../sections/hero-picks-section";

const LandingPage = () => {
  const [HeroesList, setHeroesList] = useState([]);
  const [clickedHero, setClickedHero] = useState();
  const [appRunning, setAppRunning] = useState(false);
  const [teamPick, setTeamPick] = useState([1, 2, 3, 4, 5]);
  const [enemyPick, setEnemyPick] = useState([1, 2, 3, 4, 5]);
  const [banPick, setBanPick] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      fetch("https://api.opendota.com/api/heroStats", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setHeroesList(result);
        });
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const pickedHeroHandler = (pickedItem) => {
    setClickedHero(pickedItem);
    setAppRunning(true);
  };

  const addToDraft = (title, pickedHero) => {
    console.log(title);
    console.log(pickedHero);
    if (title === "Team") {
      setTeamPick((teamPickArray) => {
        const newItem = teamPickArray.map((newPick, i) => {
          if ((i = index)) {
            return pickedHero;
          }
          return newPick;
        });
        return {teamPickArray : newItem}
      });
    }
    if (title === "Enemy") {
      setEnemyPick((enemyPickArray) => [...enemyPickArray, pickedHero]);
    }
    if (title === "Ban") {
      setBanPick((banPickArray) => [...banPickArray, pickedHero]);
    }
  };

  const strHeroes = HeroesList.filter(
    (hero) => hero.primary_attr === "str"
  ).sort((a, b) => {
    if (a.localized_name < b.localized_name) {
      return -1;
    }
    if (a.localized_name > b.localized_name) {
      return 1;
    }
    return 0;
  });

  const agiHeroes = HeroesList.filter(
    (hero) => hero.primary_attr === "agi"
  ).sort((a, b) => {
    if (a.localized_name < b.localized_name) {
      return -1;
    }
    if (a.localized_name > b.localized_name) {
      return 1;
    }
    return 0;
  });

  const intHeroes = HeroesList.filter(
    (hero) => hero.primary_attr === "int"
  ).sort((a, b) => {
    if (a.localized_name < b.localized_name) {
      return -1;
    }
    if (a.localized_name > b.localized_name) {
      return 1;
    }
    return 0;
  });

  return (
    <View style={styles.container}>
      <TopColumn
        clickedHero={clickedHero}
        appRunning={appRunning}
        teamPick={teamPick}
        enemyPick={enemyPick}
        banPick={banPick}
      />
      <View style={{ flexDirection: "row", flex: 1, paddingHorizontal: 100 }}>
        <HeroListSection
          strHeroes={strHeroes}
          agiHeroes={agiHeroes}
          intHeroes={intHeroes}
          pickedHeroHandler={pickedHeroHandler}
          appRunning={appRunning}
        />
        <HeroPickSection
          clickedHero={clickedHero}
          appRunning={appRunning}
          draftHandler={addToDraft}
        />
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    overflow: "hidden",
  },
});
