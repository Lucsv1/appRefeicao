import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { styleRegistro, stylesLogin } from "./style";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

const Login = (props) => {
  const handleLogin = () => {
    const email = props.emailCaridade;
    const senha = props.senhaCaridade;
    const url = `http://192.168.193.236:8080/usuarios/login?email=${email}&senha=${senha}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Invalid email or password");
        }
      })
      .then((data) => {
        // Handle success response if needed
        console.log(data);
        // Set the state to navigate to the listagem screen
        props.setGoListagem(true);
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });
  };

  return (
    <View style={stylesLogin.loginContainer}>
      <View style={stylesLogin.textoLogin}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Login - Caridade
        </Text>
      </View>
      <View style={stylesLogin.forms}>
        <Text>Email</Text>
        <TextInput
          style={stylesLogin.inputs}
          value={props.emailCaridade}
          onChangeText={props.setEmailCaridade}
        />
        <Text>Senha</Text>
        <TextInput
          style={stylesLogin.inputs}
          value={props.senhaCaridade}
          onChangeText={props.setSenhaCaridade}
        />
        <View style={styleRegistro.botao}>
          <Text onPress={() => handleLogin()} style={styleRegistro.textBotao}>
            Logar
          </Text>
        </View>
      </View>
      <View style={stylesLogin.notRegister}>
        <Text>Você não é registrado?</Text>
        <TouchableOpacity
          onPress={() => {
            props.setGoRegister(true);
          }}
        >
          <Text style={{ color: "red", fontSize: 20 }}>Clique aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default Login;
