import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Dimensions,
  ActivityIndicator
} from "react-native";

import { login } from "../actions/login";
import { connect } from "react-redux";

import bgImage from "../assets/background.jpeg";

const { width: WIDTH } = Dimensions.get("window");

class Home extends Component {
  state = {
    id: "",
    pw: "",
    loading: false,
    fail: false
  };

  update = () => {
    this.setState({
      loading: !this.state.loading
    });
  };

  clear = () => {
    this.setState({
      id: "",
      pw: ""
    });
  };

  handleButton = () => {
    this.setState(
      {
        loading: !this.state.loading
      },
      () => {
        this.props.login(
          this.state.id,
          this.state.pw,
          this.props.navigation,
          this.update,
          this.clear
        );
      }
    );
  };

  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View>
          <Text style={styles.titleLogo}>RUHungry</Text>
          <TextInput
            name="id"
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
          <Text style={styles.text} onPress={this.handleButton}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLogin}>
          <Text
            style={styles.text}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user
});

const mapDispatchToProps = { login: login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

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
