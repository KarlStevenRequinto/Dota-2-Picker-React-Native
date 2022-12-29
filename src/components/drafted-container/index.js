import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import "./css-styles.css";
const DraftedContainer = ({ draftType }) => {
  return (
    <div
      className={
        draftType === "team"
          ? "drafted Team"
          : draftType === "enemy"
          ? "drafted Enemy"
          : "drafted Ban"
      }
    >
      <Pressable
        style={{
          width: 80,
          height: 60,
        }}
      >
        {/*   */}

        <View
          style={[
            styles.btmBox,
            {
              backgroundColor:
                draftType === "team"
                  ? "green"
                  : draftType === "enemy"
                  ? "red"
                  : "grey",
            },
          ]}
        ></View>
      </Pressable>
    </div>
  );
};

export default DraftedContainer;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  btmBox: {
    height: 8,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
