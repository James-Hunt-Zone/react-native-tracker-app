import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(Context);

  const [saveTrack] = useSaveTrack();

  console.log(locations.length);

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Name"
          value={name}
          onChangeText={changeName}
        />

        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>

      {!recording && locations.length > 0 ? (
        <Spacer>
          <Button title="Save Recording" onPress={saveTrack} />
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;
