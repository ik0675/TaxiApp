import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { StatusBar } from "react-native";
import store from "./store";
import { Provider } from "react-redux";

import DrawerNavigator from "./components/drawerNavigator";
import Home from "./components/home";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar hideen />
        <AppContainer />
      </Provider>
    );
  }
}

const routeNavigator = createSwitchNavigator(
  {
    Auth: Home,
    SignIn: DrawerNavigator
  },
  { initialRouteName: "Auth" }
);

const AppContainer = createAppContainer(routeNavigator);
