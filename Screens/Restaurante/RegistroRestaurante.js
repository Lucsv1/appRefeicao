
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



const RegistroRestaurante = (props) => {
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
          <TextInput style={stylesLogin.inputs} />
          <Text style={{ marginTop: 10 }}>Email</Text>
          <TextInput style={stylesLogin.inputs} />
          <Text style={{ marginTop: 10 }}>Senha</Text>
          <TextInput style={stylesLogin.inputs} />
          <Text style={{ marginTop: 10 }}>CNPJ</Text>
          <TextInput style={stylesLogin.inputs} />
          <TouchableOpacity
            onPress={() => {
              props.setGoEnderecoRestaurante(true);
              props.setGoRegisterRestaurante(false)
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
  export default RegistroRestaurante;