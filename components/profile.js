import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile.js</Text>
      </View>
    );
  }
}

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
