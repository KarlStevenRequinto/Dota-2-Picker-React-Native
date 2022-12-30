import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CenterLogo from "../../components/center-logo";
import DraftedContainer from "../../components/drafted-container";

const TopColumn = ({
  clickedHero,
  appRunning,
  teamPick,
  enemyPick,
  banPick,
}) => {
  if (appRunning) {
    console.log(clickedHero);
    console.log(teamPick);
  }

  // TEAM PICKS
  const heroTypes_team = [];
  const heroNames_team = [];

  for (let i = 0; i < teamPick.length; i++) {
    if (teamPick[i] != 1) {
      heroTypes_team.push(teamPick[i].primary_attr);
      heroNames_team.push(teamPick[i].localized_name);
    } else {
      heroTypes_team.push(null);
      heroNames_team.push(null);
    }
  }

  const heroTypeFirstPick_team = heroTypes_team[0];
  const heroNameFirstPick_team = heroNames_team[0];

  const heroTypeSecondPick_team = heroTypes_team[1];
  const heroNameSecondPick_team = heroNames_team[1];

  const heroTypeThirdPick_team = heroTypes_team[2];
  const heroNameThirdPick_team = heroNames_team[2];

  const heroTypeFourthPick_team = heroTypes_team[3];
  const heroNameFourthPick_team = heroNames_team[3];

  const heroTypeFifthPick_team = heroTypes_team[4];
  const heroNameFifthPick_team = heroNames_team[4];

  // ENEMY PICKS
  const heroTypes_enemy = [];
  const heroNames_enemy = [];
  for (let i = 0; i < enemyPick.length; i++) {
    if (teamPick[i] != 1) {
      heroTypes_enemy.push(enemyPick[i].primary_attr);
      heroNames_enemy.push(enemyPick[i].localized_name);
    } else {
      heroTypes_enemy.push(null);
      heroNames_enemy.push(null);
    }
  }
  const heroTypeFirstPick_enemy = heroTypes_enemy[0];
  const heroNameFirstPick_enemy = heroNames_enemy[0];

  const heroTypeSecondPick_enemy = heroTypes_enemy[1];
  const heroNameSecondPick_enemy = heroNames_enemy[1];

  const heroTypeThirdPick_enemy = heroTypes_enemy[2];
  const heroNameThirdPick_enemy = heroNames_enemy[2];

  const heroTypeFourthPick_enemy = heroTypes_enemy[3];
  const heroNameFourthPick_enemy = heroNames_enemy[3];

  const heroTypeFifthPick_enemy = heroTypes_enemy[4];
  const heroNameFifthPick_enemy = heroNames_enemy[4];
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.draftedContainer}>
            <DraftedContainer
              draftType="team"
              teamPick={teamPick}
              clickedHero={clickedHero}
              heroName={heroNameFirstPick_team}
              heroType={heroTypeFirstPick_team}
            />
          </View>
          <View style={styles.draftedContainer}>
            <DraftedContainer
              draftType="team"
              teamPick={teamPick}
              clickedHero={clickedHero}
              heroName={heroNameSecondPick_team}
              heroType={heroTypeSecondPick_team}
            />
          </View>
          <View style={styles.draftedContainer}>
            <DraftedContainer
              draftType="team"
              teamPick={teamPick}
              clickedHero={clickedHero}
              heroName={heroNameThirdPick_team}
              heroType={heroTypeThirdPick_team}
            />
          </View>
          <View style={styles.draftedContainer}>
            <DraftedContainer
              draftType="team"
              teamPick={teamPick}
              clickedHero={clickedHero}
              heroName={heroNameFourthPick_team}
              heroType={heroTypeFourthPick_team}
            />
          </View>
          <View style={styles.draftedContainer}>
            <DraftedContainer
              draftType="team"
              teamPick={teamPick}
              clickedHero={clickedHero}
              heroName={heroNameFifthPick_team}
              heroType={heroTypeFifthPick_team}
            />
          </View>
        </View>
        <CenterLogo />
        <View style={styles.rowContainer}>
          <View style={styles.draftedContainer}>
            <DraftedContainer
              draftType="enemy"
              teamPick={teamPick}
              clickedHero={clickedHero}
              heroName={heroNameFirstPick_enemy}
              heroType={heroTypeFirstPick_enemy}
            />
          </View>
          <View style={styles.draftedContainer}>
            <DraftedContainer
              draftType="enemy"
              teamPick={teamPick}
              clickedHero={clickedHero}
              heroName={heroNameSecondPick_enemy}
              heroType={heroTypeSecondPick_enemy}
            />
          </View>
          <View style={styles.draftedContainer}>
            <DraftedContainer
              draftType="enemy"
              teamPick={teamPick}
              clickedHero={clickedHero}
              heroName={heroNameThirdPick_enemy}
              heroType={heroTypeThirdPick_enemy}
            />
          </View>
          <View style={styles.draftedContainer}>
            <DraftedContainer
              draftType="enemy"
              teamPick={teamPick}
              clickedHero={clickedHero}
              heroName={heroNameFourthPick_enemy}
              heroType={heroTypeFourthPick_enemy}
            />
          </View>
          <View style={styles.draftedContainer}>
            <DraftedContainer
              draftType="enemy"
              teamPick={teamPick}
              clickedHero={clickedHero}
              heroName={heroNameFifthPick_enemy}
              heroType={heroTypeFifthPick_enemy}
            />
          </View>
        </View>
      </View>
      <View style={styles.banContainer}>
        <View style={{ flexDirection: "row" }}>
          {banPick.map((item) => (
            <View key={item} style={styles.draftedContainer}>
              <DraftedContainer />
            </View>
          ))}
        </View>
        <Text style={styles.title}>CHOOSE YOUR HERO</Text>
      </View>
    </View>
  );
};

export default TopColumn;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "pink",
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  draftedContainer: {
    marginHorizontal: 4,
  },
  banContainer: {
    backgroundColor: "orange",
    marginTop: 10,

    alignItems: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 30,
  },
});
