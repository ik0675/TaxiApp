import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import store from "./store";
import { Provider } from "react-redux";

import DrawerNavigator from "./components/drawerNavigator";
import Home from "./components/home";
import SignUp from "./components/signup";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const routeNavigator = createSwitchNavigator(
  {
    Auth: Home,
    SignUp: SignUp,
    SignIn: DrawerNavigator
  },
  { initialRouteName: "Auth" }
);

const AppContainer = createAppContainer(routeNavigator);
