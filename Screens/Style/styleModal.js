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

export const styleModal= StyleSheet.create({
  containerRegistro: { flex: 1},
  textoRegistro: {
    backgroundColor: '#6fd29e',
    alignItems: "center",
    flex: 1,
    justifyContent: 'center'
  },
  bodyRegistro: {
    backgroundColor: '#f1f1f1',
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
    flex: 0.4
   

  }
});