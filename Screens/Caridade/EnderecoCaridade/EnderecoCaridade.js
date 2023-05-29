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

const EnderecoCaridade = (props) => {
  const [cepCaridade, setCepCaridade] = useState("");
  const [logradouroCaridade, setLogradouroCaridade] = useState("");
  const [numeroCaridade, setNumeroCaridade] = useState("");
  const [ufCaridade, setUfCaridade] = useState("");
  const [complementoCaridade, setComplementoCaridade] = useState("");

  return (
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
          style={stylesLogin.inputs}
        />
        <Text style={{ marginTop: 10 }}>logradouro</Text>
        <TextInput
          value={logradouroCaridade}
          onChangeText={setLogradouroCaridade}
          style={stylesLogin.inputs}
        />
        <Text style={{ marginTop: 10 }}>Número</Text>
        <TextInput
          value={numeroCaridade}
          onChangeText={setNumeroCaridade}
          style={stylesLogin.inputs}
        />
        <Text style={{ marginTop: 10 }}>UF</Text>
        <TextInput
          value={ufCaridade}
          onChangeText={setUfCaridade}
          style={stylesLogin.inputs}
        />
        <Text style={{ marginTop: 10 }}>Complemento</Text>
        <TextInput
          value={complementoCaridade}
          onChangeText={setComplementoCaridade}
          style={stylesLogin.inputs}
        />
        <TouchableOpacity
          onPress={() => {
            const obj = {
              cepCaridade,
              logradouroCaridade,
              numeroCaridade,
              ufCaridade,
              complementoCaridade,
            };
            props.setListaRegistroCaridade([
              ...props.setListaRegistroCaridade,
              obj,
            ]);
            props.setGoEnderecoCaridade(true);
          }}
          style={styleRegistro.botao}
        >
          <Text style={styleRegistro.textBotao}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            props.setGoEnderecoCaridade(false);
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

export default EnderecoCaridade;
