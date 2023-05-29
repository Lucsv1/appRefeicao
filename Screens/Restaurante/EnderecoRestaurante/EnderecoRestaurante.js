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

const EnderecoRestaurante = (props) => {
    const [cepRestaurante, setCepRestaurante] = useState('')
    const [logradouroRestaurante, setLogradouroRestaurante] = useState('')
    const [numeroRestaurante, setNumeroRestaurente] = useState('')
    const [ufRestaurante, setUfRestaurante] = useState('')
    const [complementoRestaurante, setComplementoRestaurante] = useState('')
  return (
    <View style={styleRegistro.containerRegistro}>
      <View style={styleRegistro.textoRegistro}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Registro - Endereço</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
          {" "}
          Caridade
        </Text>
      </View>
      <View style={styleRegistro.bodyRegistro}>
      <Text style={{ marginTop: 10 }}>CEP</Text>
        <TextInput value={cepRestaurante} onChangeText={setCepRestaurante} style={stylesLogin.inputs} />
        <Text style={{ marginTop: 10 }}>logradouro</Text>
        <TextInput value={logradouroRestaurante} onChangeText={setLogradouroRestaurante} style={stylesLogin.inputs} />
        <Text style={{ marginTop: 10 }}>Numero</Text>
        <TextInput value={numeroRestaurante} onChangeText={setNumeroRestaurente} style={stylesLogin.inputs} />
        <Text style={{ marginTop: 10 }}>Uf</Text>
        <TextInput value={ufRestaurante} onChangeText={setUfRestaurante} style={stylesLogin.inputs} />
        <Text style={{ marginTop: 10 }}>Complemento</Text>
        <TextInput value={complementoRestaurante} onChangeText={setComplementoRestaurante} style={stylesLogin.inputs} />
        <TouchableOpacity
          onPress={() => {
            const obj = {cepRestaurante, logradouroRestaurante, numeroRestaurante, ufRestaurante, complementoRestaurante}
            props.setListaRegsitroRestaurante([...props.setListaRegsitroRestaurante,obj])
            props.setGoEnderecoRestaurante(true);
          }}
          style={styleRegistro.botao}
        >
          <Text style={styleRegistro.textBotao}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            props.setGoEnderecoRestaurante(false);
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

export default EnderecoRestaurante;
