import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export const stylesLogin = StyleSheet.create({
  loginContainer: {
    flex: 4,
    alignItems: "center",
  },
  textoLogin: {
    justifyContent: "center",
    flex: 1,
    padding: 10,
    margin: 10,
  },
  forms: {
    flex: 5,
    width: "50%",
    alignItems: "center",
    padding: 10,
    justifyContent: 'center'
  },
  inputs: {
    padding: 5,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    margin: 20,
  },
  notRegister: {
    flex: 2,
    justifyContent: "center",
  },
  botao: {
    marginTop: 10,
    backgroundColor: "#78bd92",
    padding: 10,
    borderRadius: 10,
    width: "60%",
  },
  textoBotao: {
    textAlign: "center",
  },
});

export const styleRegistro = StyleSheet.create({
  containerRegistro: { flex: 1 },
  textoRegistro: {
    alignItems: "center",
    flex: 2,
  },
  bodyRegistro: {
    alignItems: "center",
    flex: 1,
  },
});
