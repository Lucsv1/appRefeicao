import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";

export const styleRegistro = StyleSheet.create({
  containerRegistro: { flex: 1},
  textoRegistro: {
    alignItems: "center",
    flex: 2,
    justifyContent: 'center'
  },
  bodyRegistro: {
    alignItems: "center",
    flex: 9,
    justifyContent: 'center'
  },
  botao: {
    marginTop: 10,
    backgroundColor: "#78bd92",
    padding: 10,
    borderRadius: 10,
    width: "30%",
  },
  inputs: {
    padding: 5,
    backgroundColor: "white",
    width: "50%",
    borderRadius: 10,
    margin: 10,
  },
  textBotao: {
    textAlign: "center",
  },
  footer:{
    flex: 0.8

  }
});