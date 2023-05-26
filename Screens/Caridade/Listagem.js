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

const Listagem = (props) => {
    return (
      <View>
        <View>
          <Text>comida</Text>
          <Text>comida</Text>
        </View>
        <View style={styleRegistro.botao}>
          <Text
            style={styleRegistro.textBotao}
            onPress={() => {
              props.setGoListagem(false);
            }}
          >
            Voltar
          </Text>
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

  export default Listagem;