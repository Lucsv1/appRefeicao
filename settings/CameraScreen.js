import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
const CameraScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(false)
  const [type, setType] = useState(Camera.Constants.back);

  useEffect(() =>{
    (async () =>{
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if(hasPermission === false){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Sem Acesso a camera</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.back
                  ? Camera.Constants.front
                  : Camera.Constants.back
              );
            }}
            style={styles.button}
          >
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            props.setGoRegistroAlimento(true)
          }}>
            <Text style={styles.text}>Tirar Foto </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: { fontSize: 18, color: "white" },
});

export default CameraScreen;
