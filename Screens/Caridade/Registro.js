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

const Registro = (props) => {
  const [nomeCaridade, setNomeCaridade] = useState('');
  const [emailCaridade, setEmailCaridade] = useState('');
  const [senhaCaridade, setSenhaCaridade] = useState('');
  const [cnpjCaridade, setCnpjCaridade] = useState('');

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
        <Text>Nome</Text>
        <TextInput
          style={stylesLogin.inputs}
          value={nomeCaridade}
          onChangeText={setNomeCaridade}
        />
        <Text style={{ marginTop: 10 }}>Email</Text>
        <TextInput
          style={stylesLogin.inputs}
          value={emailCaridade}
          onChangeText={setEmailCaridade}
        />
        <Text style={{ marginTop: 10 }}>Senha</Text>
        <TextInput
          style={stylesLogin.inputs}
          value={senhaCaridade}
          onChangeText={setSenhaCaridade}
        />
        <Text style={{ marginTop: 10 }}>CNPJ</Text>
        <TextInput
          style={stylesLogin.inputs}
          value={cnpjCaridade}
          onChangeText={setCnpjCaridade}
        />
        <TouchableOpacity
          onPress={() => {
            const obj = {nomeCaridade,emailCaridade,senhaCaridade,cnpjCaridade}
            props.setListaRegistroCaridade([...props.listaRegistroCaridade, obj])
            props.setGoEnderecoCaridade(true);
            props.setGoRegister(false);
          }}
          style={styleRegistro.botao}
        >
          <Text style={styleRegistro.textBotao}>Salvar</Text>
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

export default Registro;
