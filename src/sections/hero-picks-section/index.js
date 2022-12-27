import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SelectedPane from "../../components/selected-pane";
import SelectionColumn from "../../components/selection-column";
const HeroPickSection = () => {
  return (
    <View style={styles.container}>
      <SelectedPane heroType={"strength"}/>
      <SelectionColumn/>
    </View>
  );
};

export default HeroPickSection;

const styles = StyleSheet.create({
  container: { flex: 0.3, backgroundColor: "skyblue",paddingHorizontal:40,paddingVertical:10,height:"100%" },
});
