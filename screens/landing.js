import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const landing = (props, { navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>
        Login/Register and get location with API
      </Text>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("Login")}
        style={styles.submit}
      >
        <Text style={styles.title}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("Register")}
        style={styles.submit_two}
      >
        <Text style={styles.title_two}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default landing;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  pageTitle: {
    fontSize: 20,
    margin: 15,
    color: global.dark_gray,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },

  title: {
    fontSize: 20,
    color: global.background_color,
    height: 50,
    padding: 5,
    fontWeight: "bold",
  },

  title_two: {
    fontSize: 20,
    color: global.dark_gray,
    height: 50,
    padding: 5,
    fontWeight: "bold",
  },

  submit: {
    width: "85%",
    fontSize: 20,
    color: global.dark_gray,
    height: 50,
    padding: 5,
    paddingTop: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: global.primary_color,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 10,
  },

  submit_two: {
    width: "85%",
    fontSize: 20,
    color: global.dark_gray,
    height: 50,
    padding: 5,
    paddingTop: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: global.secondary_color,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 10,
  },
});
