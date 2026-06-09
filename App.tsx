// ia:chatgpt genero el esqueleto inicial del componente con los imports basicos, nosotros lo modificamos casi todo para adaptarlo a la consigna
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
// definimos este tipo nosotros para manejar el mensaje con su estado,   nla ia no lo tenia porque usaba solo un string
type MensajeLogin = {
  texto: string;
  tipo: 'exito' | 'error' | '';
};
const App: React.FC = () => {
  //estados del formulario
  const [usuario, setUsuario] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');
  //cambiamos de estado de string a objeto para poder manejar colores segun el resultado
  const [mensajeLogin, setMensajeLogin] = useState<MensajeLogin>({
    texto: '',
    tipo: '',
  });

  // ia:chatgpt puso solo un if,nosotros lo separamos en dos para entender mejor el flujo
  const verificarCredenciales = (): void => {
    //credenciales
    const USUARIO_CORRECTO: string = 'admin';
    const PASSWORD_CORRECTA: string = '1234';
>>
    //chuekea el usuario
    if (usuario === USUARIO_CORRECTO) {

      