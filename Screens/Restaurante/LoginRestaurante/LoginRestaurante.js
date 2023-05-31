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

const LoginRestaurante = (props) => {
  
    
    const handleLogin = () => {
      const email = props.emailRestaurante;
      const senha = props.senhaRestaurante;
      const url = `http://192.168.193.236:8080/restaurantes/login?email=${email}&senha=${senha}`;
  
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
          props.setGoRegistroAlimento(true);
        })
        .catch((error) => {
          // Handle error if needed
          console.error(error);
        });
    };

  return (
    <View style={stylesLogin.loginContainer}>
      <View style={stylesLogin.textoLogin}>
        <Text style={{fontSize: 20,
      fontWeight: 'bold'}}>Login - Restaurante</Text>
      </View>
      <View style={stylesLogin.forms}>
        <Text>EMAIL</Text>
        <TextInput value={props.emailRestaurante} onChangeText={props.setEmailRestaurante} style={stylesLogin.inputs} />
        <Text>Senha</Text>
        <TextInput value={props.senhaRestaurante} onChangeText={props.setSenhaRestaurante} style={stylesLogin.inputs} />
        <View style={styleRegistro.botao}>
          <Text
            onPress={handleLogin}
            style={styleRegistro.textBotao}
          >Logar</Text>
        </View>
      </View>
      <View style={stylesLogin.notRegister}>
        <Text>Voce não é registrado?</Text>
        <TouchableOpacity
          onPress={() => {
            props.setGoRegisterRestaurante(true);
          }}
        >
          <Text style={{ color: "red", fontSize: 20 }}>clique aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default LoginRestaurante;
