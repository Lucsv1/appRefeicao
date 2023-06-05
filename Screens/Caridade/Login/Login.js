import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { stylesLogin } from "../../Style/styleLogin";
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
    const url = `http://192.168.0.10:8080/usuarios/login?email=${email}&senha=${senha}`;

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
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Login - Caridade
        </Text>
      </View>
      <View style={stylesLogin.forms}>
        <Text style={{fontSize: 18}}>Email</Text>
        <TextInput
          style={stylesLogin.inputs}
          value={props.emailCaridade}
          onChangeText={props.setEmailCaridade}
        />
        <Text style={{fontSize: 18}}>Senha</Text>
        <TextInput
          style={stylesLogin.inputs}
          value={props.senhaCaridade}
          onChangeText={props.setSenhaCaridade}
        />
        <View style={stylesLogin.botao}>
          <Text onPress={() => handleLogin()} style={stylesLogin.textoBotao}>
            Logar
          </Text>
        </View>
      </View>
      <View style={stylesLogin.notRegister}>
        <Text style={{textAlign: 'center'}}>Você não é registrado?</Text>
        <TouchableOpacity
          onPress={() => {
            props.setGoRegister(true);
          }}
        >
          <Text style={{ color: "red", fontSize: 20, textAlign: 'center' }}>Clique aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default Login;
