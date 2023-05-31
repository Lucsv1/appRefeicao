import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { styleItem, styleListagem, styleRegistro } from "./style";
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

  const handleGet = () =>{
    fetch("http://localhost:8080/alimentos", {
      method: 'GET',
    })
    .then((response) =>{
      if(response.ok){
        return response.json()
      } else{
        throw new Error('Nao foi possivel achar alimentos')
      }
    })
    .then((data)=>{
      console.log(data)
      ()
    })
  }

  const handleDelete = () => {
    fetch(`http://192.168.193.236:8080/alimentos/${props.item.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          props.onDelete(props.item.id);
        } else {
          console.error('Failed to delete item');
        }
      })
      .catch((error) => {
        console.error(error);
      });
      props.listaAlimentos('')
  };
  
  return (
    <View style={styleItem.main}>
      <View style={styleItem.alimento}>
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          {props.item.alimento}
        </Text>
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
      <View style={styleItem.mainBotao}>
        <TouchableOpacity style={styleItem.botao}>
          <Text style={{ color: "#98e8b6" }}>Solicitar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styleItem.botao}> 
          <Text style={{color: "#ee2a1a"}}>Recusar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const Listagem = (props) => {

  const handleDeleteItem = (itemId) => {
    setListaAlimentos((prevList) =>
      prevList.filter((item) => item.id !== itemId)
    );
  };

  return (
    <View style={styleListagem.main}>
      <FlatList data={props.listaAlimentos} renderItem={(item)=> <Item item={item} onDelete={handleDeleteItem}/>}></FlatList>
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

export default Listagem;
