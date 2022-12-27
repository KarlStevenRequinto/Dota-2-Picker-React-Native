import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ListHeader = ({ headerTitle, heroType }) => {
  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
    >
      <Image
        source={{
          uri: require(`../../../assets/images/hero-types-icons/${heroType}.png`),
        }}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 8 }}
      />
      <Text>{headerTitle}</Text>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({});
