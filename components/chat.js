import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Chat extends Component {
  render() {
    console.log("In Chat, this.props is ", this.props);
    return (
      <View style={styles.container}>
        <Text>Hello, {this.props.user}</Text>
        <Text> Whom to chat : {this.props.chatPerson}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user,
  chatPerson: state.loginReducer.chatPerson
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
