import React, { Component, useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

function LoginComponent({
  navigation,
  username,
  password,
  setusername,
  setpassword,
}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setusername(text)}
      ></TextInput>
      <TextInput placeholder="Password" secureTextEntry></TextInput>
      <Button title="Login" onPress={() => navigation.navigate("Welcome")} />
      <Text>{username}</Text>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    setusername: (text) => dispatch({ type: "USERNAME", username: text }),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(LoginComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
