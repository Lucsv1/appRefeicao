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

const LoginRestaurante = (props) => {
  
    
    const handleLogin = () => {
      const email = props.emailRestaurante;
      const senha = props.senhaRestaurante;
      const url = `http://192.168.166.236:8080/restaurantes/login?email=${email}&senha=${senha}`;
  
      
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
          console.log(data);
          props.setGoRegistroAlimento(true);
        })
        .catch((error) => {
          console.error(error);
        });
    };

  return (
    <View style={stylesLogin.loginContainer}>
      <View style={stylesLogin.textoLogin}>
        <Text style={{fontSize: 30,
      fontWeight: 'bold'}}>Login - Restaurante</Text>
      </View>
      <View style={stylesLogin.forms}>
        <Text style={{fontSize: 18}} >Email</Text>
        <TextInput value={props.emailRestaurante} onChangeText={props.setEmailRestaurante} style={stylesLogin.inputs} />
        <Text style={{fontSize: 18}}>Senha</Text>
        <TextInput value={props.senhaRestaurante} onChangeText={props.setSenhaRestaurante} style={stylesLogin.inputs} />
        <View style={stylesLogin.botao}>
          <Text
            onPress={handleLogin}
            style={stylesLogin.textoBotao}
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
          <Text style={{ color: "red", fontSize: 20, textAlign: 'center' }}>clique aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default LoginRestaurante;
