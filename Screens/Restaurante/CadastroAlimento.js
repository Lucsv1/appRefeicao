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
import CameraScreen from "../../settings/CameraScreen";
import { useEffect, useState } from "react";
const CadastroAlimento = (props) => {
  const [alimento, setAlimento] = useState('')
  const [dtDoacao, setDtDoacao] = useState('')
  const [nmRestaurante, setNmRestaurante] = useState('')
  const [status, setStatus] = useState('')
  
    return (
      <View style={stylesCadastroAlimento.main}>
        <View style={stylesCadastroAlimento.textMain}>
          <Text style={{fontSize: 20}}>Registrar Alimento</Text>
        </View>
        <View style={stylesCadastroAlimento.body}>
          <Text>Alimento:</Text>
          <TextInput value={alimento} onChangeText={setAlimento} style={stylesLogin.inputs}/>
          <Text>Data da doação: </Text>
          <TextInput value={dtDoacao} onChangeText={setDtDoacao} style={stylesLogin.inputs}/>
          <Text>Nome do Restaurante:</Text>
          <TextInput value={nmRestaurante} onChangeText={setNmRestaurante} style={stylesLogin.inputs}/>
          <Text>Status do Alimento:</Text>
          <TextInput value={status} onChangeText={setStatus} style={stylesLogin.inputs}/>
          <TouchableOpacity onPress={()=>{
            const obj = {alimento, dtDoacao, nmRestaurante, status}
            props.setListaAlimentos([...props.listaAlimentos, obj])
          }} style={styleRegistro.botao}>
            <Text style={styleRegistro.textBotao}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleRegistro.botao}>
            <Text onPress={()=>{
              props.setGoRegistroAlimento(false)
            }} style={styleRegistro.textBotao}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
        </View>
      </View>
    );
  };

  const stylesCadastroAlimento = StyleSheet.create({
    main: { flex: 1},
    textMain: { flex: 1 ,justifyContent: 'center', alignItems: 'center', },
    body: { flex: 7 ,justifyContent: 'center', alignItems: 'center'}
  })

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

  export default CadastroAlimento;