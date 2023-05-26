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
const CadastroAlimento = (props) => {
    return (
      <View style={stylesCadastroAlimento.main}>
        <View style={stylesCadastroAlimento.textMain}>
          <Text style={{fontSize: 20}}>Registrar Alimento</Text>
        </View>
        <View style={stylesCadastroAlimento.body}>
          <Text>Alimento:</Text>
          <TextInput style={stylesLogin.inputs}/>
          <Text>Alimento:</Text>
          <TextInput style={stylesLogin.inputs}/>
          <Text>Alimento:</Text>
          <TextInput style={stylesLogin.inputs}/>
          <Text>Alimento:</Text>
          <TextInput style={stylesLogin.inputs}/>
          <View style={styleRegistro.botao}>
            <Text style={styleRegistro.textBotao}>Registrar</Text>
          </View>
          <View style={styleRegistro.botao}>
            <Text onPress={()=>{
              props.setGoRegistroAlimento(false)
            }} style={styleRegistro.textBotao}>Voltar</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <CameraScreen/>
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