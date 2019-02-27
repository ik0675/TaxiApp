import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Dimensions
} from "react-native";

import { connect } from "react-redux";

import bgImage from "../assets/background.jpeg";

const { width: WIDTH } = Dimensions.get("window");

class signup extends Component {
  state = {
    id: "",
    pw: ""
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View>
          <Text style={styles.titleLogo}>RUHungry</Text>
          <TextInput
            name="아이디"
            style={styles.input}
            value={this.state.id}
            onChangeText={id => {
              this.setState({
                id
              });
            }}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>

        <View>
          <TextInput
            name="pw"
            style={styles.input}
            value={this.state.pw}
            secureTextEntry={true}
            onChangeText={pw => {
              this.setState({
                pw
              });
            }}
            placeholder={"Password"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text} onPress={() => alert("Hi")}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text} onPress={() => alert("Hi")}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = {};

export default connect(mapDispatchToProps)(signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleLogo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "lightblue",
    textAlign: "center",
    marginBottom: 100
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 120,
    height: 120
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25,
    marginTop: 10
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    backgroundColor: "rgb(213, 234, 255)",
    justifyContent: "center",
    marginTop: 20
  },
  text: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 16,
    textAlign: "center"
  }
});
