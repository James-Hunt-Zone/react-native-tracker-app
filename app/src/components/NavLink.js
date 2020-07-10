import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { withNavigation } from "react-navigation";
import { Text } from "react-native-elements";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <Spacer>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);
