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
  const [listaCadastroAlimento, setListaCadastroAlimentos] = useState([])

  const handleCadastroAlimento = () => {
    const obj1 = {
      alimento: [alimento],
      restauranteDoadorId: 0,
    };
  
    console.log(obj1)
    fetch("http://192.168.193.236:8080/alimentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj1),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response if needed
        console.log(data);
        // Add the new food to the list
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
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
