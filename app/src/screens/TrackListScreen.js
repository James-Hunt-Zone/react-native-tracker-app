import React, { useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { Context } from "../context/TrackContext";
import { NavigationEvents } from "react-navigation";
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(Context);

  return (
    <>
      <Spacer>
        <NavigationEvents onWillFocus={fetchTracks} />
        {/* <Text h3>TrackListScreen</Text> */}
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { id: item._id })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          )}
        />
      </Spacer>
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: "Tracks",
};

const styles = StyleSheet.create({});

export default TrackListScreen;
