  import { StatusBar } from "expo-status-bar";
  import { useState, useEffect } from "react";
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
   
    const handleDelete = () => {
      fetch(`http://192.168.166.236:8080/alimentos/${props.item.id}`, {
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
    };
    
    return (
      <View style={styleItem.main}>
        <View style={styleItem.alimento}>
          <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
            {props.item.tags[2]}
          </Text>
        </View>
        <View style={styleItem.items}>
          <Text>Data da doação: {props.item.tags[0]}</Text>
        </View>
        <View style={styleItem.items}>
          <Text>Nome do Restaurante: {props.item.tags[3]}</Text>
        </View>
        <View style={styleItem.items}>
          <Text>Status: {props.item.tags[1]}</Text>
        </View>
        <View style={styleItem.mainBotao}>
          <TouchableOpacity style={styleItem.botao} onPress={() => handleDelete(props.item.id)}> 
            <Text style={{color: "#ee2a1a"}}>Recusar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const Listagem = (props) => {
    const [listaAlimentos, setListaAlimentos] = useState([]);

    useEffect(() => {
      handleGet();
    }, []);

    const handleGet = () => {
      fetch("http://192.168.166.236:8080/alimentos")
        .then((response) => {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch alimentos');
          }
        })
        .then((data) => {
          console.log(data)
          setListaAlimentos(data)
          console.log(listaAlimentos)
        })
        .catch((error) => {
          console.error(error);
        });
      
    };

    const handleDeleteItem = (itemId) => {
      setListaAlimentos((prevList) =>
        prevList.filter((item) => item.id !== itemId)
      );
    };

    return (
      <View style={styleListagem.main}>
        <FlatList
          data={listaAlimentos}
          renderItem={({ item }) => <Item item={item} onDelete={handleDeleteItem} />}
          keyExtractor={(item) => item.id.toString()}
        />
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
  }

  export default Listagem;
