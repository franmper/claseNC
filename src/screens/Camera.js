import React, { useRef, useState } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

const CameraScreen = () => {
  const cameraRef = useRef();
  const [type, setType] = useState(Camera.Constants.Type.front);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Camera
        style={{
          flex: 1,
        }}
        onCameraReady={() => (
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size={"large"} color={"#000"} />
          </View>
        )}
        type={type}
        ref={cameraRef}
      >
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignSelf: "flex-end",
            alignItems: "center",
          }}
          onPress={() => {
            setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}> Cambiar Camara </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignSelf: "flex-end",
            alignItems: "center",
          }}
          onPress={() =>
            cameraRef.current
              .takePictureAsync()
              .then((res) => console.log(res))
              .catch((e) => console.log(e))
          }
        >
          <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}> Foto </Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default CameraScreen;
