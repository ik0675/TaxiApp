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

import bgImage from "../assets/background.jpeg";

import { connect } from "react-redux";

const { width: WIDTH } = Dimensions.get("window");

class Home extends Component {
  state = {
    id: "",
    pw: "",
    loading: false
  };

  handleButton = () => {
    const update = () =>
      this.setState({
        loading: !this.state.loading
      });

    this.setState(
      {
        loading: !this.state.loading
      },
      () => {
        this.props.login(
          this.state.id,
          this.state.pw,
          this.props.navigation.navigate,
          update
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
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.9
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
