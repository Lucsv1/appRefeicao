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

const Login = (props) => {
  const [emailLoginCaridade, setEmailLoginCaridade] = useState('');
  const [senhaLoginCaridade, setSenhaLoginCaridade] = useState('');

  return (
    <View style={stylesLogin.loginContainer}>
      <View style={stylesLogin.textoLogin}>
        <Text>Login</Text>
      </View>
      <View style={stylesLogin.forms}>
        <Text>Email</Text>
        <TextInput
          style={stylesLogin.inputs}
          value={emailLoginCaridade}
          onChangeText={setEmailLoginCaridade}
        />
        <Text>Senha</Text>
        <TextInput
          style={stylesLogin.inputs}
          value={senhaLoginCaridade}
          onChangeText={setSenhaLoginCaridade}
        />
        <View style={styleRegistro.botao}>
          <Text
            onPress={() => {
              // const obj ={emailLoginCaridade, senhaLoginCaridade}
              // props.setListaLoginCaridade([...props.listaLoginCaridade, obj])
              props.setGoListagem(true);
            }}
            style={styleRegistro.textBotao}
          >
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


  const stylesLogin = StyleSheet.create({
    loginContainer: {
      flex: 1,
      borderWidth: 1,
      justifyContent: "center",
    },
    textoLogin: {
      borderWidth: 1,
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

  export default Login;