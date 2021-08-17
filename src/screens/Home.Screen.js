import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { fetchDataFromApi } from "../helpers/fetchDataFromApi";

export default function HomeScreen({ navigation, route }) {
  const [data, setData] = useState([]);
  const path = route?.params?.url ? route?.params?.url : "/shop-the-look";

  useEffect(() => {
    fetchDataFromApi(path, setData);
  }, [navigation]);

  if (data.length == 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ccc" />
      </View>
    );
  }

  const handleLink = (url, name) => {
    navigation.push("Home", { url: url, name: name });
  };

  const _renderItem = ({ item }) => {
    console.log("item url", item?.thumbnail?.src);
    return (
      <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        key={item.id}
        onPress={() => handleLink(item.url, item.name)}
      >
        <ImageBackground
          source={{ uri: item.thumbnail?.src }}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        ></ImageBackground>
        <Text style={{ textAlign: "center" }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data?.pageData?.navMenu?.items?.map((item) => {
          return (
            <TouchableOpacity
              key={item?.text}
              onPress={() => handleLink(item?.href, item?.text)}
              style={{
                backgroundColor: "#ccc",
                margin: 10,
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 10,
              }}
            >
              <Text>{item.text}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <FlatList
        horizontal
        data={data?.pageData?.products}
        keyExtractor={(_, index) => index.toString()}
        renderItem={_renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
