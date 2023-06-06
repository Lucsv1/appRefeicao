import { StatusBar } from "expo-status-bar";
import { stylesCadastroAlimento, stylesLogin, styleRegistro } from "./style";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CameraScreen from "../../../settings/CameraScreen";
import { useState } from "react";
const CadastroAlimento = (props) => {
  const [alimento, setAlimento] = useState("");
  const [dtDoacao, setDtDoacao] = useState("");
  const [nmRestaurante, setNmRestaurante] = useState("");
  const [status, setStatus] = useState("");

  const handleCadastroAlimento = () => {
  //   const novaTag = 
  //     alimento,
  //     dtDoacao,
  //     nmRestaurante,
  //     status
  // };
    const obj1 = {
      tags: [alimento, dtDoacao, nmRestaurante, status],
      restauranteDoadorId: props.restauranteId, 
    };
    
  
    console.log(obj1)
    fetch("http://192.168.166.236:8080/alimentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj1),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao cadastrar alimento");
        }else{
          return response.json();
        }
      })
      .then((data) => {
        props.setListaAlimentosRegister(data)
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        console.log('Erro capturado');
      });
  };
  

  return (
    <View style={stylesCadastroAlimento.main}>
      <View style={stylesCadastroAlimento.textMain}>
        <Text style={{ fontSize: 20 }}>Registrar Alimento</Text>
      </View>
      <View style={stylesCadastroAlimento.body}>
        <Text>Alimento:</Text>
        <TextInput
          value={alimento}
          onChangeText={setAlimento}
          style={stylesLogin.inputs}
        />
        <Text>Data da doação: </Text>
        <TextInput
          value={dtDoacao}
          onChangeText={setDtDoacao}
          style={stylesLogin.inputs}
        />
        <Text>Nome do Restaurante:</Text>
        <TextInput
          value={nmRestaurante}
          onChangeText={setNmRestaurante}
          style={stylesLogin.inputs}
        />
        <Text>Status do Alimento:</Text>
        <TextInput
          value={status}
          onChangeText={setStatus}
          style={stylesLogin.inputs}
        />
        <TouchableOpacity
          onPress={handleCadastroAlimento}
          style={styleRegistro.botao}
        >
          <Text style={styleRegistro.textBotao}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleRegistro.botao}>
          <Text
            onPress={() => {
              props.setGoRegistroAlimento(false);
            }}
            style={styleRegistro.textBotao}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default CadastroAlimento;
