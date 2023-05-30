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
  const [emailLoginRestaurante, setLoginEmailRestaurante] = useState('')
  const [senhaLoginRestaurante, setLoginSenhaRestaurante] = useState('')

  const handleLogin = () => {
    const credentials = {
      email: emailLoginRestaurante,
      senha: senhaLoginRestaurante,
    };

    fetch('http://192.168.193.236:8080/restaurantes/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
      props.setGoRegistroAlimento(true);

  };

  return (
    <View style={stylesLogin.loginContainer}>
      <View style={stylesLogin.textoLogin}>
        <Text style={{fontSize: 20,
      fontWeight: 'bold'}}>Login - Restaurante</Text>
      </View>
      <View style={stylesLogin.forms}>
        <Text>EMAIL</Text>
        <TextInput value={emailLoginRestaurante} onChangeText={setLoginEmailRestaurante} style={stylesLogin.inputs} />
        <Text>Senha</Text>
        <TextInput value={senhaLoginRestaurante} onChangeText={setLoginSenhaRestaurante} style={stylesLogin.inputs} />
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
