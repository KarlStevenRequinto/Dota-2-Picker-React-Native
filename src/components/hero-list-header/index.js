import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const HeroListHeader = ({ heroType }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: require(`../../../assets/images/hero-types-icons/${heroType}.png`),
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{heroType.toUpperCase()}</Text>
    </View>
  );
};

export default HeroListHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 20, height: 20 },
  title: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,

    paddingBottom: 2,
  },
});
