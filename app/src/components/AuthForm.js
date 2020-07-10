import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, onSubmitText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>

      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />

      <Spacer>
        <Button
          title={onSubmitText}
          onPress={() => onSubmit(email, password)}
        />
        {errorMessage ? (
          <Text style={styles.error} h5>
            {errorMessage}
          </Text>
        ) : null}
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginTop: 5,
  },
});

export default AuthForm;
