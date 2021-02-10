import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

function WelcomeScreen({ navigation, username }) {
  return (
    <View style={styles.container}>
      <Text>Welcome {username}</Text>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    age: state.age,
    username: state.username,
    password: state.password,
  };
};
export default connect(mapStateToProps, null)(WelcomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
