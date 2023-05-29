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

const Item = (props) => {
  return (
    <View style={styleItem.main}>
      <View style={styleItem.alimento}>
        <Text style={{fontSize: 20, color:'white', textAlign: 'center'}}>{props.item.alimento}</Text>
      </View>
      <View style={styleItem.items}>
        <Text>Data da doação: {props.item.dtDoacao}</Text>
      </View>
      <View style={styleItem.items}>
        <Text>Nome do Restaurante: {props.item.nmRestaurante}</Text>
      </View>
      <View style={styleItem.items}>
        <Text>Status: {props.item.status}</Text>
      </View>
      <TouchableOpacity style={styleItem.botao}>
        <Text style={{color: '#98e8b6'}}>Solicitar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styleItem = StyleSheet.create({
  main: {
    backgroundColor: "#98e8b6",
    padding: 10,
    marginTop: 10,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  alimento: {
    padding: 10
  },
  items:{
    padding: 5

  },
  botao:{
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  }
});

const Listagem = (props) => {
  return (
    <View style={styleListagem.main}>
      <FlatList data={props.listaAlimentos} renderItem={Item}></FlatList>
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

const styleListagem = StyleSheet.create({
  main: { justifyContent: "center", alignItems: "center" },
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

export default Listagem;
