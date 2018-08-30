import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.headerTitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default Header;
