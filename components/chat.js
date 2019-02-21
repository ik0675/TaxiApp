import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, {this.props.user}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
