import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchInitialDataFromApi } from "../helpers/fetchDataFromApi";

export default function InitialScreen({navigation}:any) {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    fetchInitialDataFromApi(setInitialData);
  }, []);

  const handleItem = (item:any) => {
    navigation.navigate("MenuListItem",{name: item?.text, items: item?.items})
  };

//   const _renderItem = ({ item }) => {
//     console.log(item?.items);
//     return (
//       <View>
//         {item?.items.map((childItem) => {
//           return (
//             <TouchableOpacity onPress={() => handleItem(childItem)}>
//               <Text>{childItem?.text}</Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };

  if (initialData.length == 0) {
    return <ActivityIndicator size="large" color="grey" />;
  }

  return (
    <>
      {initialData?.appData?.menu?.items.map((childItem:any) => {
        return (
          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              marginVertical: 10,
              marginHorizontal: 5,
              height: 60,
              alignItems:'center',
              justifyContent:'center'
            }}
            key={childItem.text}
            onPress={() => handleItem(childItem)}
          >
            <Text>{childItem?.text}</Text>
          </TouchableOpacity>
        );
      })}
      {/* <FlatList
        data={initialData?.appData?.menu}
        numColumns={2}
        renderItem={() => _renderItem}
        keyExtractor={(_, index) => index.toString()}
      /> */}
    </>
  );
}

const styles = StyleSheet.create({});
