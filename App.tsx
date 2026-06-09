// ia:chatgpt genero el codigo inicial del componente con los imports basicos, nosotros lo modificamos casi todo para adaptarlo a la consigna
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
    //chuekea el usuario
    if (usuario === USUARIO_CORRECTO) {

      //si el usuario esta bien, chequeamos la contraseña por separado
      if (contrasena === PASSWORD_CORRECTA) {
        setMensajeLogin({
          texto: 'Inicio de sesion exitoso',
          tipo: 'exito',
        });
      } else {
        setMensajeLogin({
          texto: 'Usuario o contrasena incorrectos, vuelva a intentar',
          tipo: 'error',
        });
      }

    } else {
      setMensajeLogin({
        texto: 'Usuario o contrasena incorrectos, vuelva a intentar',
        tipo: 'error',
      });
    }
  };

  // funcion para limpiar el formulario, la agregamos nosotros, la ia no la incluyo
  const limpiarFormulario = (): void => {
    setUsuario('');
    setContrasena('');
    setMensajeLogin({ texto: '', tipo: '' });
  };

  return (
    //ia:chatgpt nos dijo que usemos keyboardavoidingview porque el teclado tapaba los inputs
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="auto" />

      <View style={styles.container}>

        {/*titulo*/}
        <Text style={styles.titulo}>Iniciar Sesion</Text>

        {/*subtitulo*/}
        <Text style={styles.subtitulo}>Ingresa tus credenciales para continuar</Text>
        <View style={styles.separador} />
        {/*campo psra usuario*/}
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su usuario"
          placeholderTextColor="#aaa"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/*campo de contraseña, pusimos el secureTextEntry nosotros para ocultar*/}
        <Text style={styles.label}>Contrasena</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contrasena"
          placeholderTextColor="#aaa"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry={true}
          autoCapitalize="none"
        />

        {/* boton principal*/}
        <TouchableOpacity
          style={styles.botonIngresar}
          onPress={verificarCredenciales}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBoton}>Ingresar</Text>
        </TouchableOpacity>

        {/* boton para limpiar, lo pusimos nosotros */}
        <TouchableOpacity
          style={styles.botonLimpiar}
          onPress={limpiarFormulario}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotonLimpiar}>Limpiar</Text>
        </TouchableOpacity>

        {/* mensaje de resultado verde si anda bien y rojo sino */}
        {mensajeLogin.texto !== '' && (
          <View
            style={[
              styles.mensajeContenedor,
              mensajeLogin.tipo === 'exito'
                ? styles.mensajeExito
                : styles.mensajeError,
            ]}
          >
            <Text style={styles.mensajeTexto}>{mensajeLogin.texto}</Text>
          </View>
        )}

      </View>
    </KeyboardAvoidingView>
  );
};

// ia: chatgpt: hizo el css basico, nosotros eliminamos los que no usabamos y cambiamos colores y espacios
const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a1a2e',
    marginBottom: 6,
  },

  subtitulo: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },

  separador: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 24,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#b0bec5',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    backgroundColor: '#fff',
    marginBottom: 16,
    color: '#222',
  },

  botonIngresar: {
    backgroundColor: '#1565c0',
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },

  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botonLimpiar: {
    borderWidth: 1,
    borderColor: '#1565c0',
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotonLimpiar: {
    color: '#1565c0',
    fontSize: 15,
    fontWeight: '600',
  },

  mensajeContenedor: {
    marginTop: 22,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  // fondo verde para cuando ande el login 
  mensajeExito: {
    backgroundColor: '#e8f5e9',
    borderWidth: 1,
    borderColor: '#66bb6a',
  },

  // fondo rojo para cuando no ande el login 
  mensajeError: {
    backgroundColor: '#ffebee',
    borderWidth: 1,
    borderColor: '#ef9a9a',
  },

  mensajeTexto: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
});

export default App;
