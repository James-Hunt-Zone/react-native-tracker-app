import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";
import { Feather } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(Context);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text h2>AccountScreen</Text>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <Feather name="settings" size={15} />,
};

const styles = StyleSheet.create({});

export default AccountScreen;
