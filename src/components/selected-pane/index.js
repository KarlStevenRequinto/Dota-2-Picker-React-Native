import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SelectionButton from "../selection-button";

const SelectedPane = ({ clickedHero, appRunning,draftHandler}) => {
  const hero = clickedHero;
  const heroType = hero ? hero.primary_attr : null;
  const heroName = hero ? hero.localized_name : null;

  const heroTypeClicked =
    heroType === "str"
      ? "strength"
      : heroType === "agi"
      ? "agility"
      : heroType === "int"
      ? "intelligence"
      : null;

  const backgroundImageHeroType =
    heroType === "str"
      ? "STRENGTH"
      : heroType === "agi"
      ? "AGILITY"
      : heroType === "int"
      ? "INTELLIGENCE"
      : null;

  const heroNameClicked =
    heroName === null
      ? ""
      : heroName === "nature's_prophet"
      ? "natures_prophet"
      : heroName === "outworld_devourer"
      ? "outworld_destroyer"
      : heroName === "anti-mage"
      ? "anti_mage"
      : heroName.toLowerCase().replace(/\s/g, "_");

  return (
    <View style={styles.container}>
      {backgroundImageHeroType && heroNameClicked ? (
        <ImageBackground
          source={{
            uri: require(`../../../assets/images/heroimages/${backgroundImageHeroType}/${heroNameClicked}.png`),
          }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      ) : (
        <></>
      )}

      {heroTypeClicked && (
        <Image
          source={{
            uri: require(`../../../assets/images/hero-types-icons/${heroTypeClicked}.png`),
          }}
          style={styles.icon}
        />
      )}

      <View style={styles.btnContainer}>
        <SelectionButton title="Team" draftHandler={(title)=>draftHandler("Team",appRunning && hero)}/>
        <SelectionButton title="Ban" draftHandler={(title)=>draftHandler("Ban",appRunning && hero)}/>
        <SelectionButton title="Enemy" draftHandler={(title)=>draftHandler("Enemy",appRunning && hero)}/>
      </View>
    </View>
  );
};

export default SelectedPane;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    flex: 0.3,
  },
  icon: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 4,
    left: 4,
  },
  btnContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 2,
  },
});
