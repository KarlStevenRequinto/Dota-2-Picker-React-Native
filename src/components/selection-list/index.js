import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";

const SelectionList = ({ title, data, suggestList, keyExtractor }) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = Dimensions.get("window").height;
      setHeight(windowHeight);
    };

    updateHeight();

    Dimensions.addEventListener("change", updateHeight);

    return () => {
      Dimensions.removeEventListener("change", updateHeight);
    };
  }, []);
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 2,
        height: "100%",

        marginHorizontal: 1,
      }}
    >
      <Text style={{ marginHorizontal: 4, textAlign: "center", fontSize: 20 }}>
        {title}
      </Text>
      <View
        style={{ backgroundColor: "green", overflow: "hidden" }}
        onLayout={(event) => setHeight(event.nativeEvent.layout.height)}
      >
        {/* <FlatList
          data={data}
          renderItem={suggestList}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: "red",
          }}
          style={{ padding: 20 }}
        /> */}
      </View>
    </View>
  );
};

export default SelectionList;

const styles = StyleSheet.create({});
