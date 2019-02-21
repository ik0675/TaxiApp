import Chat from "./chat";
import Friends from "./friends";
import { createBottomTabNavigator } from "react-navigation";

const tabBottomNavigator = createBottomTabNavigator({
  Chat: Chat,
  Friends: Friends
});

export default tabBottomNavigator;
