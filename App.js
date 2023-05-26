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
import axios from "axios";
import logo from "./assets/LOGO.jpg";
import { useState } from "react";
import { Modal } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CadastroAlimento from "./Screens/Restaurante/CadastroAlimento";
import RegistroRestaurante from "./Screens/Restaurante/RegistroRestaurante";
import LoginRestaurante from "./Screens/Restaurante/LoginRestaurante";
import Registro from "./Screens/Caridade/Registro";
import Login from "./Screens/Caridade/Login";
import Listagem from "./Screens/Caridade/Listagem";
const Tab = createBottomTabNavigator();

//   return (
//     <View>
//       <Navigator>
//         <Screen name="Cariadade">{() => <Registro />}</Screen>
//         <Screen name="Restaurante">{() => <RegistroRestaurante />}</Screen>
//       </Navigator>
//     </View>
//   );
// };

//   return (
//     <View style={styleCategoria.container}>
//       <View style={styleCategoria.textContainer}>
//         <Text style={{ fontSize: 20 }}>Você é</Text>
//       </View>
//       <View style={styleCategoria.body}>
//         <TouchableOpacity
//           onPress={() => {
//             props.setConfirmacaoRestaurante(false);
//           }}
//         >
//           <View style={styleCategoria.restaurante}>
//             <Text>Restaurante</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => {
//             props.setConfirmacaoCaridade(false);
//           }}
//         >
//           <View style={styleCategoria.caridade}>
//             <Text>Caridade</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

export default function App() {
  const [listaAlimentos, setListaAlimentos] = useState([]);
  const [confirmacaoRestaurante, setConfirmacaoRestaurante] = useState(false);
  const [confirmacaoCaridade, setConfirmacaoCaridade] = useState(false);
  const [goRegisterRestaurante, setGoRegisterRestaurante] = useState(false);
  const [goRegister, setGoRegister] = useState(false);
  const [goListagem, setGoListagem] = useState(false);
  const [goRegistroAlimento, setGoRegistroAlimento] = useState(false);

  const api = axios.create({
    baseURL: "https://projeto-6af72-default-rtdb.firebaseio.com",
  });

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.barra}>
          <Image style={styles.logo} source={logo} resizeModea="cover" />
          <Text style={styles.itulo}>FoodHelp</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Tab.Navigator screenOptions={{headerStyle: {height:0}}}>
            <Tab.Screen name="Caridade">
              {() =>
                confirmacaoCaridade ? (
                  <Login
                    setGoListagem={setGoListagem}
                    setGoRegister={setGoRegister}
                  />
                ) : goRegister ? (
                  <Registro setGoRegister={setGoRegister} />
                ) : goListagem ? (
                  <Listagem setGoListagem={setGoListagem} />
                ) : (
                  <Login
                    setGoListagem={setGoListagem}
                    setGoRegister={setGoRegister}
                  />
                )
              }
            </Tab.Screen>
            <Tab.Screen name="Restaurante">
              {() =>
                confirmacaoRestaurante ? (
                  <LoginRestaurante
                    setGoRegisterRestaurante={setGoRegisterRestaurante}
                    setGoRegistroAlimento={setGoRegistroAlimento}
                  />
                ) : goRegisterRestaurante ? (
                  <RegistroRestaurante
                    setGoRegisterRestaurante={setGoRegisterRestaurante}
                  />
                ) : goRegistroAlimento ? (
                  <CadastroAlimento setGoRegistroAlimento={setGoRegistroAlimento} />
                ) : (
                  <LoginRestaurante
                    setGoRegisterRestaurante={setGoRegisterRestaurante}
                    setGoRegistroAlimento={setGoRegistroAlimento}
                  />
                )
              }
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#67a2a9",
  },
  barra: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#78bd92",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },
  itulo: {
    fontSize: 30,
    marginTop: 10,
  },
});

//#78bd92
//#67a2a9
