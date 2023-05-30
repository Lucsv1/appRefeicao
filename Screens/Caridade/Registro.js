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
  Modal,
} from "react-native";

const Registro = (props) => {
  const [nomeCaridade, setNomeCaridade] = useState("");
  const [emailCaridade, setEmailCaridade] = useState("");
  const [senhaCaridade, setSenhaCaridade] = useState("");
  const [cnpjCaridade, setCnpjCaridade] = useState("");
  const [modal, setModal] = useState(false);
  const [cepCaridade, setCepCaridade] = useState("");
  const [logradouroCaridade, setLogradouroCaridade] = useState("");
  const [numeroCaridade, setNumeroCaridade] = useState("");
  const [ufCaridade, setUfCaridade] = useState("");
  const [complementoCaridade, setComplementoCaridade] = useState("");

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
            setModal(true);
          }}
          style={styleRegistro.botao}
        >
          <Text style={styleRegistro.textBotao}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{ borderWidth: 1 }}
          onPress={() => {
            props.setGoRegister(false);
          }}
        >
          <View style={styleRegistro.botao}>
            <Text style={styleRegistro.textBotao}>Voltar</Text>
          </View>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          onRequestClose={() => {
            setModal(false);
          }}
          transparent={false}
          visible={modal}
        >
          <View style={styleRegistro.containerRegistro}>
            <View style={styleRegistro.textoRegistro}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Registro - Endereço
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
                {" "}
                Caridade
              </Text>
            </View>
            <View style={styleRegistro.bodyRegistro}>
              <Text style={{ marginTop: 10 }}>CEP</Text>
              <TextInput
                value={cepCaridade}
                onChangeText={setCepCaridade}
                style={stylesLogin.inputEndereco}
              />
              <Text style={{ marginTop: 10 }}>logradouro</Text>
              <TextInput
                value={logradouroCaridade}
                onChangeText={setLogradouroCaridade}
                style={stylesLogin.inputEndereco}
              />
              <Text style={{ marginTop: 10 }}>Número</Text>
              <TextInput
                value={numeroCaridade}
                onChangeText={setNumeroCaridade}
                style={stylesLogin.inputEndereco}
              />
              <Text style={{ marginTop: 10 }}>UF</Text>
              <TextInput
                value={ufCaridade}
                onChangeText={setUfCaridade}
                style={stylesLogin.inputEndereco}
              />
              <Text style={{ marginTop: 10 }}>Complemento</Text>
              <TextInput
                value={complementoCaridade}
                onChangeText={setComplementoCaridade}
                style={stylesLogin.inputEndereco}
              />
              <TouchableOpacity
                onPress={() => {
                  const obj = {
                    nome: nomeCaridade,
                    email: emailCaridade,
                    senha: senhaCaridade,
                    cnpj: cnpjCaridade,
                    enderecoRestaurante: {
                      cep: cepCaridade,
                      logradouro: logradouroCaridade,
                      numero: numeroCaridade,
                      uf: ufCaridade,
                      complemento: complementoCaridade,
                    },
                    dataCadastro: new Date().toISOString(),
                    ativo: true,
                  };

                  fetch("http://172.18.192.1:8080/usuarios", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(obj),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      // Handle success response if needed
                      console.log(data);
                    })
                    .catch((error) => {
                      // Handle error if needed
                      console.error(error);
                    });
                  // props.setListaRegistroCaridade([
                  //   ...props.setListaRegistroCaridade,
                  //   obj,
                  // ]);
                }}
                style={styleRegistro.botao}
              >
                <Text style={styleRegistro.textBotao}>Salvar</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModal(false);
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
    flex: 5,
  },
  botao: {
    marginTop: 10,
    backgroundColor: "#78bd92",
    padding: 10,
    borderRadius: 10,
    width: "30%",
    borderWidth: 1,
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
  inputEndereco: {
    backgroundColor: "#67a2a9",
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
