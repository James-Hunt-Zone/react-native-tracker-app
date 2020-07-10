import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.wrapper}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In for Tracker"
        onSubmit={signin}
        onSubmitText="Sign In"
        errorMessage={state.errorMessage}
      />
      <NavLink
        text="Not signed up? Create an account here."
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SigninScreen;
