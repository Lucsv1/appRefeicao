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

export const styleItem = StyleSheet.create({
  main: {
    backgroundColor: "#98e8b6",
    padding: 10,
    marginTop: 10,
    fontWeight: "bold",
    borderRadius: 10,
  },
  alimento: {
    padding: 10,
  },
  items: {
    padding: 5,
  },
  mainBotao: {
    flexDirection: "row",
    padding: 10,
  },
  botao: {
    backgroundColor: "white",
    alignSelf: "center",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    margin: 5,
  },
});

export const styleListagem = StyleSheet.create({
  main: { justifyContent: "center", alignItems: "center" },
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
