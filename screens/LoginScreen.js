import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";
import {
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [pais, setPais] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // API pública de productos de ejemplo
      const response = await fetch('https://restcountries.com/v3.1/name/panama');
      const data = await response.json();
      setPais(data);
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', 'No se pudo cargarel pais');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#FF6347" />
        <Text style={styles.loadingText}>Cargando productos...</Text>
      </View>
    );
  }


  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("Tareas");
    } catch (error) {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };



  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>

        <Text style={styles.title}>Gestión personal</Text>
        <Text style={styles.subtitle}>Bienvenido</Text>
        {pais.length > 0 && (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              Alert.alert(
                "Bienvenido",
                `País: ${pais[0].name.nativeName?.spa?.official || pais[0].name.official}
Población: ${pais[0].population.toLocaleString()}`
              )

            }
          >
            <Image
              source={{ uri: pais[0].flags?.png }}
              style={styles.productImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}


        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    alignSelf: "center",
    elevation: 3,
  },

  productImage: {
    width: 60,
    height: 40,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffffb6",
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 80
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#666",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#979797ce",
  },
  button: {
    backgroundColor: "#0073dfbd",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonSecondary: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});