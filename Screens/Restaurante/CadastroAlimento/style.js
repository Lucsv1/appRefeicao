import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CameraScreen from "../../../settings/CameraScreen";
import { useState } from "react";

export const stylesCadastroAlimento = StyleSheet.create({
  main: { flex: 1 },
  textMain: { flex: 1, justifyContent: "center", alignItems: "center" },
  body: { flex: 7, justifyContent: "center", alignItems: "center" },
});

export const stylesLogin = StyleSheet.create({
  loginContainer: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
  },
  textoLogin: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  forms: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  inputs: {
    backgroundColor: "white",
    width: "50%",
    borderRadius: 10,
    marginTop: 10,
  },
  notRegister: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const styleRegistro = StyleSheet.create({
  containerRegistro: { flex: 1 },
  textoRegistro: {
    alignItems: "center",
    flex: 1,
  },
  bodyRegistro: {
    alignItems: "center",
    flex: 5,
  },
  botao: {
    marginTop: 10,
    backgroundColor: "#78bd92",
    padding: 10,
    borderRadius: 10,
    width: "30%",
  },
  textBotao: {
    textAlign: "center",
  },
});
