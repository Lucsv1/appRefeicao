import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { styleRegistro } from "../../Style/styleRegistro";
import { styleModal } from "../../Style/styleModal";
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
  const handleRegsitro = () => {
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
    fetch("http://192.168.166.236:8080/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Registro</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>
          {" "}
          Caridade
        </Text>
      </View>
      <View style={styleRegistro.bodyRegistro}>
        <Text style={{fontSize: 18}}>Nome</Text>
        <TextInput
          style={styleRegistro.inputs}
          value={nomeCaridade}
          onChangeText={setNomeCaridade}
        />
        <Text style={{fontSize: 18}}>Email</Text>
        <TextInput
          style={styleRegistro.inputs}
          value={props.emailCaridade}
          onChangeText={props.setEmailCaridade}
        />
        <Text style={{fontSize: 18}}>Senha</Text>
        <TextInput
          style={styleRegistro.inputs}
          value={props.senhaCaridade}
          onChangeText={props.setSenhaCaridade}
        />
        <Text style={{fontSize: 18}}>CNPJ</Text>
        <TextInput
          style={styleRegistro.inputs}
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
          <View style={styleModal.containerRegistro}>
            <View style={styleModal.textoRegistro}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                Registro - Endereço
              </Text>
              <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>
                {" "}
                Caridade
              </Text>
            </View>
            <View style={styleModal.bodyRegistro}>
              <Text style={{fontSize: 10}}>CEP</Text>
              <TextInput
                value={cepCaridade}
                onChangeText={setCepCaridade}
                style={styleModal.inputs}
              />
              <Text style={{fontSize: 10}}>logradouro</Text>
              <TextInput
                value={logradouroCaridade}
                onChangeText={setLogradouroCaridade}
                style={styleModal.inputs}
              />
              <Text style={{fontSize: 10}}>Número</Text>
              <TextInput
                value={numeroCaridade}
                onChangeText={setNumeroCaridade}
                style={styleModal.inputs}
              />
              <Text style={{fontSize: 10}}>UF</Text>
              <TextInput
                value={ufCaridade}
                onChangeText={setUfCaridade}
                style={styleModal.inputs}
              />
              <Text style={{fontSize: 10}}>Complemento</Text>
              <TextInput
                value={complementoCaridade}
                onChangeText={setComplementoCaridade}
                style={styleModal.inputs}
              />
              <TouchableOpacity
                onPress={handleRegsitro}
                style={styleModal.botao}
              >
                <Text style={styleModal.textBotao}>Salvar</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModal(false);
                }}
              >
                <View style={styleModal.botao}>
                  <Text style={styleModal.textBotao}>Voltar</Text>
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
