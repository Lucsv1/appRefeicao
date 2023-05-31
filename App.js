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
import { Ionicons } from "@expo/vector-icons";
import CameraScreen from "./settings/CameraScreen";
const Tab = createBottomTabNavigator();

export default function App() {
  const [listaAlimentos, setListaAlimentos] = useState([]);
  const [listaLoginRestaurante, setListaLoginRestaurante] = useState([]);
  const [listaRegistroRestaurante, setListaRegistroRestaurante] = useState([]);
  const [listaRegistroCaridade, setListaRegistroCaridade] = useState([]);
  const [listaLoginCaridade, setListaLoginCaridade] = useState([]);

  const [confirmacaoRestaurante, setConfirmacaoRestaurante] = useState(false);
  const [confirmacaoCaridade, setConfirmacaoCaridade] = useState(false);
  const [goRegisterRestaurante, setGoRegisterRestaurante] = useState(false);
  const [goRegister, setGoRegister] = useState(false);
  const [goListagem, setGoListagem] = useState(false);
  const [goRegistroAlimento, setGoRegistroAlimento] = useState(false);

  const [emailCaridade, setEmailCaridade] = useState("");
  const [senhaCaridade, setSenhaCaridade] = useState("");

  const [emailRestaurante, setEmailRestaurante] = useState("");
  const [senhaRestaurante, setSenhaRestaurante] = useState("");

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.barra}>
          <Image style={styles.logo} source={logo} resizeModea="cover" />
          <Text style={styles.itulo}>FoodHelp</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Tab.Navigator screenOptions={{ headerStyle: { height: 0 } }}>
            <Tab.Screen
              name="Caridade"
              options={{
                tabBarIcon: () => (
                  <Ionicons name="heart" color={"red"} size={20} />
                ),
              }}
            >
              {() =>
                confirmacaoCaridade ? (
                  <Login
                    setGoListagem={setGoListagem}
                    setGoRegister={setGoRegister}
                    setEmailCaridade={setEmailCaridade}
                    emailCaridade={emailCaridade}
                    setSenhaCaridade={setSenhaCaridade}
                    senhaCaridade={senhaCaridade}
                  />
                ) : goRegister ? (
                  <Registro
                    setGoRegister={setGoRegister}
                    setListaRegistroCaridade={setListaRegistroCaridade}
                    setEmailCaridade={setEmailCaridade}
                    emailCaridade={emailCaridade}
                    setSenhaCaridade={setSenhaCaridade}
                    senhaCaridade={senhaCaridade}
                  />
                ) : goListagem ? (
                  <Listagem
                    setGoListagem={setGoListagem}
                    listaAlimentos={listaAlimentos}
                    setListaAlimentos={setListaAlimentos}
                  />
                ) : (
                  <Login
                    setGoListagem={setGoListagem}
                    setGoRegister={setGoRegister}
                    setEmailCaridade={setEmailCaridade}
                    emailCaridade={emailCaridade}
                    setSenhaCaridade={setSenhaCaridade}
                    senhaCaridade={senhaCaridade}
                  />
                )
              }
            </Tab.Screen>
            <Tab.Screen
              name="Restaurante"
              options={{
                tabBarIcon: () => <Ionicons name="restaurant" size={20} />,
              }}
            >
              {() =>
                confirmacaoRestaurante ? (
                  <LoginRestaurante
                    setGoRegisterRestaurante={setGoRegisterRestaurante}
                    setGoRegistroAlimento={setGoRegistroAlimento}
                    setEmailRestaurante={setEmailRestaurante}
                    emailRestaurante={emailRestaurante}
                    setSenhaRestaurante={setSenhaRestaurante}
                    senhaRestaurante={senhaRestaurante}
                  />
                ) : goRegisterRestaurante ? (
                  <RegistroRestaurante
                    setEmailRestaurante={setEmailRestaurante}
                    emailRestaurante={emailRestaurante}
                    setSenhaRestaurante={setSenhaRestaurante}
                    senhaRestaurante={senhaRestaurante}
                    setGoRegisterRestaurante={setGoRegisterRestaurante}
                  />
                ) : goRegistroAlimento ? (
                  <CadastroAlimento
                    setGoRegistroAlimento={setGoRegistroAlimento}
                    setListaAlimentos={setListaAlimentos}
                    listaAlimentos={listaAlimentos}
                  />
                ) : (
                  <LoginRestaurante
                    setGoRegisterRestaurante={setGoRegisterRestaurante}
                    setGoRegistroAlimento={setGoRegistroAlimento}
                    setEmailRestaurante={setEmailRestaurante}
                    emailRestaurante={emailRestaurante}
                    setSenhaRestaurante={setSenhaRestaurante}
                    senhaRestaurante={senhaRestaurante}
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
