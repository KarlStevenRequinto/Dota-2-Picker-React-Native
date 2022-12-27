import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CenterLogo from "../../components/center-logo";
import DraftedContainer from "../../components/drafted-container";

const TopColumn = () => {
  const drafted = [1, 2, 3, 4, 5];
  const banned = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          {drafted.map((item) => (
            <View key={item} style={styles.draftedContainer}>
              <DraftedContainer draftType="team" />
            </View>
          ))}
        </View>
        <CenterLogo />
        <View style={styles.rowContainer}>
          {drafted.map((item) => (
            <View key={item} style={styles.draftedContainer}>
              <DraftedContainer draftType="enemy" />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.banContainer}>
        <View style={{ flexDirection: "row" }}>
          {banned.map((item) => (
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
