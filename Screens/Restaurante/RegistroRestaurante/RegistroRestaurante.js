import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import axios from "axios";
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

const RegistroRestaurante = (props) => {
  const [modal, setModal] = useState(false);
  const [nmRestaurante, setNmRestaurante] = useState("");
  const [cnpjRestaurante, setCnpjRestaurante] = useState("");
  const [cepRestaurante, setCepRestaurante] = useState("");
  const [logradouroRestaurante, setLogradouroRestaurante] = useState("");
  const [numeroRestaurante, setNumeroRestaurente] = useState("");
  const [ufRestaurante, setUfRestaurante] = useState("");
  const [complementoRestaurante, setComplementoRestaurante] = useState("");

  const onRequest = async () => {
    const obj = {
      nome: nmRestaurante,
      email: props.emailRestaurante,
      senha: props.senhaRestaurante,
      cnpj: cnpjRestaurante,
      endereco: {
        cep: cepRestaurante,
        logradouro: logradouroRestaurante,
        numero: nmRestaurante,
        uf: ufRestaurante,
        complemento: complementoRestaurante,
      },
    };
    fetch("http://192.168.166.236:8080/restaurantes", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then((response)=> response.json())
    .then((data)=>{
      const restauranteId = data.id; 
      console.log(data)
      props.setRestauranteId(restauranteId)
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  return (
    <View style={styleRegistro.containerRegistro}>
      <View style={styleRegistro.textoRegistro}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Registro</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>
          {" "}
          Restaurante
        </Text>
      </View>
      <View style={styleRegistro.bodyRegistro}>
        <Text style={{fontSize: 18}}>Nome do Restaurante</Text>
        <TextInput
          value={nmRestaurante}
          onChangeText={setNmRestaurante}
          style={styleRegistro.inputs}
        />
        <Text style={{fontSize: 18}}>Email</Text>
        <TextInput
          value={props.emailRestaurante}
          onChangeText={props.setEmailRestaurante}
          style={styleRegistro.inputs}
        />
        <Text style={{fontSize: 18}}>Senha</Text>
        <TextInput
          value={props.senhaRestaurante}
          onChangeText={props.setSenhaRestaurante}
          style={styleRegistro.inputs}
        />
        <Text style={{fontSize: 18}}>CNPJ</Text>
        <TextInput
          value={cnpjRestaurante}
          onChangeText={setCnpjRestaurante}
          style={styleRegistro.inputs}
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
      <View style={styleRegistro.footer}>
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
          <View style={styleModal.containerRegistro}>
            <View style={styleModal.textoRegistro}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Registro - Endereço
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
                {" "}
                Restaurante
              </Text>
            </View>
            <View style={styleModal.bodyRegistro}>
              <Text style={{ marginTop: 10 }}>CEP</Text>
              <TextInput
                value={cepRestaurante}
                onChangeText={setCepRestaurante}
                style={styleModal.inputs}
              />
              <Text style={{ marginTop: 10 }}>logradouro</Text>
              <TextInput
                value={logradouroRestaurante}
                onChangeText={setLogradouroRestaurante}
                style={styleModal.inputs}
              />
              <Text style={{ marginTop: 10 }}>Numero</Text>
              <TextInput
                value={numeroRestaurante}
                onChangeText={setNumeroRestaurente}
                style={styleModal.inputs}
              />
              <Text style={{ marginTop: 10 }}>Uf</Text>
              <TextInput
                value={ufRestaurante}
                onChangeText={setUfRestaurante}
                style={styleModal.inputs}
              />
              <Text style={{ marginTop: 10 }}>Complemento</Text>
              <TextInput
                value={complementoRestaurante}
                onChangeText={setComplementoRestaurante}
                style={styleModal.inputs}
              />
              <TouchableOpacity
                onPress={onRequest}
                style={styleModal.botao}
              >
                <Text style={styleModal.textBotao}>Salvar</Text>
              </TouchableOpacity>
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


export default RegistroRestaurante;
