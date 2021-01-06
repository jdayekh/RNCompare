import {
  AppRegistry,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

const register = (props, {navigation}) => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const handleRegister = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (userName == '') {
      setErrorMessage('Please enter your Username');
    } else if (userEmail == '') {
      setErrorMessage('Please enter an Email address');
    } else if (userPassword == '') {
      setErrorMessage('Please enter a Password');
    } else {
      const apiUrl =
        'https://portal.mayasoftapps.com/backoffice/rnjay/register.php?name=' +
        userName +
        '&email=' +
        userEmail +
        '&password=' +
        userPassword;
      console.log(apiUrl);
      fetch(apiUrl, {
        method: 'post',
        header: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          password: userPassword,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          alert(responseJson);
          if (responseJson == 'User Registered Successfully') {
            // redirect to login page
            props.navigation.navigate('Login');
          } else {
            alert('Wrong Login Details');
          }
          setErrorMessage('');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const txtNameHandler = (enteredName) => {
    setUserName(enteredName);
  };
  const txtEmailHandler = (enteredEmail) => {
    setUserEmail(enteredEmail);
  };
  const txtPasswordHandler = (enteredPassword) => {
    setUserPassword(enteredPassword);
  };

  Keyboard.dismiss();
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>

      <TextInput
        placeholder="Enter Name"
        style={{
          width: 250,
          margin: 10,
          borderColor: '#333',
          borderWidth: 1,
          borderRadius: 5,
          fontSize: 20,
        }}
        underlineColorAndroid="transparent"
        value={userName}
        onChangeText={txtNameHandler}
      />

      <TextInput
        placeholder="Enter Email"
        style={{
          width: 250,
          margin: 10,
          borderColor: '#333',
          borderWidth: 1,
          borderRadius: 5,
          fontSize: 20,
        }}
        underlineColorAndroid="transparent"
        value={userEmail}
        onChangeText={txtEmailHandler}
      />

      <TextInput
        placeholder="Enter Password"
        style={{
          width: 250,
          margin: 10,
          borderColor: '#333',
          borderWidth: 1,
          borderRadius: 5,
          fontSize: 20,
        }}
        underlineColorAndroid="transparent"
        value={userPassword}
        onChangeText={txtPasswordHandler}
      />

      <TouchableOpacity onPress={handleRegister} style={styles.submit}>
        <Text style={styles.title}>Signup</Text>
      </TouchableOpacity>

      <Text style={{padding: 10, margin: 10, color: 'red'}}>
        {errorMessage}
      </Text>
    </View>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pageTitle: {
    fontSize: 20,
    margin: 15,
    color: global.dark_gray,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },

  title: {
    fontSize: 20,
    color: global.background_color,
    height: 50,
    padding: 5,
    fontWeight: 'bold',
  },

  title_two: {
    fontSize: 20,
    color: global.dark_gray,
    height: 50,
    padding: 5,
    fontWeight: 'bold',
  },

  submit: {
    width: '55%',
    fontSize: 20,
    color: global.dark_gray,
    height: 50,
    padding: 5,
    paddingTop: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: global.primary_color,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 10,
  },

  submit_two: {
    width: '65%',
    fontSize: 20,
    color: global.dark_gray,
    height: 50,
    padding: 5,
    paddingTop: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: global.secondary_color,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 10,
  },
});
