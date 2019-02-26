import React from "react";
import TabBottomNavigator from "./tabBottomNavigator";
import {
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import { ScrollView, Text, Button, StyleSheet } from "react-native";

import Profile from "./profile";

const DrawerNavigator = createDrawerNavigator(
  {
    Home: TabBottomNavigator,
    Profile: Profile
  },
  {
    contentComponent: props => (
      <SafeAreaView>
        <ScrollView>
          <DrawerItems {...props} />
          <Button
            title="Sign Out"
            color="black"
            onPress={() => console.log(props.navigation.navigate("Auth"))}
          />
        </ScrollView>
      </SafeAreaView>
    ),
    drawerPosition: "right"
  }
);

export default DrawerNavigator;
