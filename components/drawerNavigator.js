import TabBottomNavigator from "./tabBottomNavigator";
import { createDrawerNavigator } from "react-navigation";

const DrawerNavigator = createDrawerNavigator(
  {
    Home: TabBottomNavigator
  },
  {
    drawerPosition: "right"
  }
);

export default DrawerNavigator;
