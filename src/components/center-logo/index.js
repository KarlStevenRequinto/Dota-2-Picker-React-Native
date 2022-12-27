import { Image, StyleSheet, Text, View } from "react-native";
import "./css-styles.css";

import React from "react";

const CenterLogo = () => {
  return (
    // video background in the future
    <div className="trapezoid">
      <View style={styles.container}>
        <Image
          source={{ uri: require("../../../assets/images/logo.png") }}
          style={{ width: 120, height: 80, transform: [{ rotate: "180deg" }] }}
          resizeMode="cover"
        />
      </View>
    </div>
  );
};

export default CenterLogo;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
