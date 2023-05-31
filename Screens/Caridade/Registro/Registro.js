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
  Modal,
} from "react-native";

const Registro = (props) => {
  const [nomeCaridade, setNomeCaridade] = useState("");
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
          value={props.emailCaridade}
          onChangeText={props.setEmailCaridade}
        />
        <Text style={{ marginTop: 10 }}>Senha</Text>
        <TextInput
          style={stylesLogin.inputs}
          value={props.senhaCaridade}
          onChangeText={props.setSenhaCaridade}
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
                    email: props.emailCaridade,
                    senha: props.senhaCaridade,
                    cnpj: cnpjCaridade,
                    endereco: {
                      cep: cepCaridade,
                      logradouro: logradouroCaridade,
                      numero: numeroCaridade,
                      uf: ufCaridade,
                      complemento: complementoCaridade,
                    },
                    dataCadastro: new Date().toISOString(),
                    ativo: true,
                  };

                  fetch("http://192.168.193.236:8080/usuarios", {
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


export default Registro;
