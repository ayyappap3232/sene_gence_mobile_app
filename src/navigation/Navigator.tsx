import * as React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home.Screen";
import InitialScreen from "../screens/Initial.Screen";
import MenuListItem from "../screens/MenuItemList.Screen";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }} initialRouteName={"InitialScreen"}>
      <Stack.Screen name="InitialScreen" component={InitialScreen}/>
      <Stack.Screen name="MenuListItem" component={MenuListItem} options={({ route }:any) => ({
          title: route?.params?.name ? route.params.name : "Menu List Item",
        })}/>
      <Stack.Screen
        options={({ route }:any) => ({
          title: route?.params?.name ? route.params.name : "Home",
        })}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
