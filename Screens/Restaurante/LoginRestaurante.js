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

const LoginRestaurante = (props) => {
  
    
    const handleLogin = () => {
      const email = props.emailRestaurante;
      const senha = props.senhaRestaurante;
      const url = `http://192.168.15.5:8080/restaurantes/login?email=${email}&senha=${senha}`;
  
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

const styleRegistro = StyleSheet.create({
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

const stylesLogin = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textoLogin: {
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

export default LoginRestaurante;
