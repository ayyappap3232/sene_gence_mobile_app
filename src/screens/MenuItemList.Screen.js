import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MenuListItem({ navigation, route }) {

  const handleMenuItem = (item) => {
    navigation.navigate('Home', {url: item?.as, name: item?.text})
  }  

  if (!route?.params?.items) {
    return <Text> No Items Found </Text>;
  }
  return route?.params?.items.map((item) => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
          height: 60,
          backgroundColor: "grey",
        }}
        key={item?.text}
        onPress={() => handleMenuItem(item)}
      >
        <Text>{item?.text}</Text>
      </TouchableOpacity>
    );
  });
}

const styles = StyleSheet.create({});
