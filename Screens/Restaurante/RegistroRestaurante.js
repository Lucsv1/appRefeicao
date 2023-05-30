import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";

const RegistroRestaurante = (props) => {
  const [modal, setModal] = useState(false);
  const [nmRestaurante, setNmRestaurante] = useState("");
  const [emailRestaurante, setEmailRestaurante] = useState("");
  const [senhaRestaurante, setSenhaRestaurante] = useState("");
  const [cnpjRestaurante, setCnpjRestaurante] = useState("");
  const [cepRestaurante, setCepRestaurante] = useState("");
  const [logradouroRestaurante, setLogradouroRestaurante] = useState("");
  const [numeroRestaurante, setNumeroRestaurente] = useState("");
  const [ufRestaurante, setUfRestaurante] = useState("");
  const [complementoRestaurante, setComplementoRestaurante] = useState("");

  const onRequest = async () => {
    const obj = {
      nome: nmRestaurante,
      email: emailRestaurante,
      senha: senhaRestaurante,
      cnpj: cnpjRestaurante,
      endereco: {
        cep: "123456",
        logradouro: logradouroRestaurante,
        numero: nmRestaurante,
        uf: ufRestaurante,
        complemento: complementoRestaurante,
      },
    };
    try {
      const res = await axios.post("http://192.168.15.5:8080/restaurantes",obj);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <View style={styleRegistro.containerRegistro}>
      <View style={styleRegistro.textoRegistro}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Registro</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
          {" "}
          Restaurante
        </Text>
      </View>
      <View style={styleRegistro.bodyRegistro}>
        <Text>Nome do Restaurante</Text>
        <TextInput
          value={nmRestaurante}
          onChangeText={setNmRestaurante}
          style={stylesLogin.inputs}
        />
        <Text style={{ marginTop: 10 }}>Email</Text>
        <TextInput
          value={emailRestaurante}
          onChangeText={setEmailRestaurante}
          style={stylesLogin.inputs}
        />
        <Text style={{ marginTop: 10 }}>Senha</Text>
        <TextInput
          value={senhaRestaurante}
          onChangeText={setSenhaRestaurante}
          style={stylesLogin.inputs}
        />
        <Text style={{ marginTop: 10 }}>CNPJ</Text>
        <TextInput
          value={cnpjRestaurante}
          onChangeText={setCnpjRestaurante}
          style={stylesLogin.inputs}
        />
        <TouchableOpacity
          onPress={() => {
            setModal(true);
            // props.setListaRegistroRestaurante([...props.listaRegistroRestaurante, obj])
          }}
        >
          <View style={styleRegistro.botao}>
            <Text style={styleRegistro.textBotao}>Salvar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            props.setGoRegisterRestaurante(false);
          }}
        >
          <View style={styleRegistro.botao}>
            <Text style={styleRegistro.textBotao}>Voltar</Text>
          </View>
        </TouchableOpacity>
        <Modal
          onRequestClose={() => {
            setModal(false);
          }}
          transparent={false}
          animationType="fade"
          visible={modal}
        >
          <View style={styleRegistro.containerRegistro}>
            <View style={styleRegistro.textoRegistro}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Registro - Endereço
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
                {" "}
                Restaurante
              </Text>
            </View>
            <View style={styleRegistro.bodyRegistro}>
              <Text style={{ marginTop: 10 }}>CEP</Text>
              <TextInput
                value={cepRestaurante}
                onChangeText={setCepRestaurante}
                style={stylesLogin.inputEndereco}
              />
              <Text style={{ marginTop: 10 }}>logradouro</Text>
              <TextInput
                value={logradouroRestaurante}
                onChangeText={setLogradouroRestaurante}
                style={stylesLogin.inputEndereco}
              />
              <Text style={{ marginTop: 10 }}>Numero</Text>
              <TextInput
                value={numeroRestaurante}
                onChangeText={setNumeroRestaurente}
                style={stylesLogin.inputEndereco}
              />
              <Text style={{ marginTop: 10 }}>Uf</Text>
              <TextInput
                value={ufRestaurante}
                onChangeText={setUfRestaurante}
                style={stylesLogin.inputEndereco}
              />
              <Text style={{ marginTop: 10 }}>Complemento</Text>
              <TextInput
                value={complementoRestaurante}
                onChangeText={setComplementoRestaurante}
                style={stylesLogin.inputEndereco}
              />
              <TouchableOpacity
                onPress={onRequest}
                style={styleRegistro.botao}
              >
                <Text style={styleRegistro.textBotao}>Salvar</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.setGoRegisterRestaurante(false);
                }}
              >
                <View style={styleRegistro.botao}>
                  <Text style={styleRegistro.textBotao}>Voltar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styleRegistro = StyleSheet.create({
  containerRegistro: { flex: 1 },
  textoRegistro: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#78bd92",
  },
  bodyRegistro: {
    alignItems: "center",
    flex: 4,
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
  inputEndereco: {
    backgroundColor: "#67a2a9",
    width: "50%",
    borderRadius: 10,
    marginTop: 10,
  },
});
export default RegistroRestaurante;
