import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native";

import { connect } from "react-redux";
import { update } from "../actions/update";

class friends extends Component {
  state = {
    data: [
      { name: "남궁익" },
      { name: "김규원" },
      { name: "이준호" },
      { name: "김규호" },
      { name: "심규태" },
      { name: "이원영" },
      { name: "송정용" },
      { name: "유정훈" },
      { name: "탁희윤" },
      { name: "허경윤" },
      { name: "조웅" },
      { name: "박병주" }
    ]
  };

  _chatNavigation(name) {
    this.props.update(name);
    this.props.navigation.goBack();
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this._chatNavigation(item.name)}>
        <View style={{ flex: 1, flexDirection: "row", marginBottom: 3 }}>
          <Image
            style={{ width: 80, height: 80, margin: 5 }}
            source={require("../assets/background.jpeg")}
          />
          <View style={{ flex: 1, justifyContent: "center", marginBottom: 15 }}>
            <Text>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  _itemSeparator = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "black" }} />
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ backgroundColor: "#F5FCFF" }}
          data={this.state.data}
          renderItem={this._renderItem}
          //Keys should be unique later
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this._itemSeparator}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  chatPerson: state.loginReducer.chatPerson
});

const mapDisPatchToProps = { update: update };

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(friends);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
