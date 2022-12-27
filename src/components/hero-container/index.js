import { Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const HeroContainer = ({
  heroName,
  heroType,
  containerStyle,
  imageStyle,
  onPressHero,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPressHero}
    >
      <Image
        source={{
          uri: require(`../../../assets/images/heroimages/${heroType}/${heroName}.png`),
        }}
        style={[styles.image, imageStyle]}
        resizeMode="cover"
        resizeMethod="scale"
      />
    </TouchableOpacity>
  );
};

export default HeroContainer;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 2,
  },
});
