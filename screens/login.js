import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { StackNavigator } from "react-navigation";

const login = (props, { navigation }) => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  const txtEmailHandler = (enteredEmail) => {
    setUserEmail(enteredEmail);
  };
  const txtPasswordHandler = (enteredPassword) => {
    setUserPassword(enteredPassword);
  };
  const handleLogin = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (userEmail == "") {
      setErrorMessage("Please enter an Email address");
    } else if (userPassword == "") {
      setErrorMessage("Please enter a Password");
    } else {
      const apiUrl =
        "https://portal.mayasoftapps.com/backoffice/rnjay/login.php?email=" +
        userEmail +
        "&password=" +
        userPassword;
      fetch(apiUrl, {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson == "ok") {
            // redirect to profile page
            props.navigation.navigate("Profile");
          } else {
            alert("Wrong Login Details");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Members Area</Text>

      <TextInput
        placeholder="Enter Email"
        style={{
          width: 250,
          margin: 10,
          borderColor: "#333",
          borderWidth: 1,
          borderRadius: 5,
          fontSize: 20,
        }}
        value={userEmail}
        onChangeText={txtEmailHandler}
      />

      <TextInput
        placeholder="Enter Password"
        style={{
          width: 250,
          margin: 10,
          borderColor: "#333",
          borderWidth: 1,
          borderRadius: 5,
          fontSize: 20,
        }}
        value={userPassword}
        onChangeText={txtPasswordHandler}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.submit}>
        <Text style={styles.title}>Submit</Text>
      </TouchableOpacity>

      <Text style={{ padding: 10, margin: 10, color: "red" }}>
        {errorMessage}
      </Text>
    </View>
  );
};

export default login;

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

  submit: {
    width: "55%",
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
});
