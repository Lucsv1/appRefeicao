import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import logo from "./assets/LOGO.jpg";
import { useState } from "react";
import { Modal } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Screen, Navigator } = createBottomTabNavigator();

const Principal = () => {
  return (
    <View>
      <Navigator>
        <Screen name="categoria">{() => <Categoria />}</Screen>
        <Screen name="Registro"></Screen>
        <Screen name="Login"></Screen>
      </Navigator>
    </View>
  );
};

const styleCategoria = StyleSheet.create({
  container: { justifyContent: "center", flex: 1 },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  body: {
    flex: 4,
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
  },
  restaurante: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  caridade: {
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

const Registro = (props) => {
  return (
    <View style={styleRegistro.containerRegistro}>
      <View style={styleRegistro.textoRegistro}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Registro</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
          {" "}
          Caridade
        </Text>
      </View>
      <View style={styleRegistro.bodyRegistro}>
        <Text>EMAIL</Text>
        <TextInput style={stylesLogin.inputs} />
        <Text style={{ marginTop: 10 }}>EMAIL</Text>
        <TextInput style={stylesLogin.inputs} />
        <Text style={{ marginTop: 10 }}>EMAIL</Text>
        <TextInput style={stylesLogin.inputs} />
        <Text style={{ marginTop: 10 }}>Senha</Text>
        <TextInput style={stylesLogin.inputs} />
        <TouchableOpacity>
          <View style={styleRegistro.botao}>
            <Text style={styleRegistro.textBotao}>Salvar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            props.setGoRegister(false);
          }}
        >
          <View style={styleRegistro.botao}>
            <Text style={styleRegistro.textBotao}>Voltar</Text>
          </View>
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

const Login = (props) => {
  return (
    <View style={stylesLogin.loginContainer}>
      <View style={stylesLogin.textoLogin}>
        <Text>Login</Text>
      </View>
      <View style={stylesLogin.forms}>
        <Text>EMAIL</Text>
        <TextInput style={stylesLogin.inputs} />
        <Text>Senha</Text>
        <TextInput style={stylesLogin.inputs} />
        <View style={styleRegistro.botao}>
          <Text
            onPress={() => {
              props.setGoListagem(true);
            }}
            style={styleRegistro.textBotao}
          >
            Logar
          </Text>
        </View>
      </View>
      <View style={stylesLogin.notRegister}>
        <Text>Voce não é registrado?</Text>
        <TouchableOpacity
          onPress={() => {
            props.setGoRegister(true);
          }}
        >
          <Text style={{ color: "red", fontSize: 20 }}>clique aqui</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styleRegistro.botao}
        onPress={() => {
          props.setConfirmacaoCaridade(true);
        }}
      >
        <View>
          <Text style={styleRegistro.textBotao}>Voltar</Text>
        </View>
      </TouchableOpacity>
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

const Listagem = () => {
  return (
    <View>
      <Text>comida</Text>
      <Text>comida</Text>
    </View>
  );
};

const Categoria = (props) => {
  return (
    <View style={styleCategoria.container}>
      <View style={styleCategoria.textContainer}>
        <Text style={{ fontSize: 20 }}>Você é</Text>
      </View>
      <View style={styleCategoria.body}>
        <TouchableOpacity>
          <View style={styleCategoria.restaurante}>
            <Text>Restaurante</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.setConfirmacaoCaridade(false);
          }}
        >
          <View style={styleCategoria.caridade}>
            <Text>Caridade</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  const [listaAlimentos, setListaAlimentos] = useState([]);
  const [confirmacaoCaridade, setConfirmacaoCaridade] = useState(false);
  const [goRegister, setGoRegister] = useState(false);
  const [goListagem, setGoListagem] = useState(false);

  const api = axios.create({
    baseURL: "https://projeto-6af72-default-rtdb.firebaseio.com",
  });

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.barra}>
          <Image style={styles.logo} source={logo} resizeModea="cover" />
          <Text style={styles.itulo}>FoodHelp</Text>
        </View>
        <View style={{ flex: 2 }}>
          {confirmacaoCaridade ? (
            <Categoria setConfirmacaoCaridade={setConfirmacaoCaridade} />
          ) : goRegister ? (
            <Registro setGoRegister={setGoRegister} />
          ) : goListagem ? (
            <Listagem />
          ) : (
            <Login
              setGoListagem={setGoListagem}
              setConfirmacaoCaridade={setConfirmacaoCaridade}
              setGoRegister={setGoRegister}
            />
          )}
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#67a2a9",
  },
  barra: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#78bd92",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },
  itulo: {
    fontSize: 30,
    marginTop: 10,
  },
});

//#78bd92
//#67a2a9
