import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SelectionList = ({ title,data,suggestList,keyExtractor }) => {
  return (
    <View style={{ flex: 1,paddingHorizontal:2 ,height:"100%",backgroundColor:"pink"}}>
      <Text style={{marginHorizontal:4,textAlign:"center",fontSize:20}}>{title}</Text>
      <View style={{height:500}}>
        <FlatList data={data} renderItem={suggestList} keyExtractor={keyExtractor} showsVerticalScrollIndicator={false}/>
      </View>
    </View>
  );
};

export default SelectionList;

const styles = StyleSheet.create({});
