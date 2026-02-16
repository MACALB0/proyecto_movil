import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function TareasScreen({ navigation }) {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    useEffect(() => {
        cargarTareas();
    }, []);

    useEffect(() => {
        guardarTareas();
    }, [tareas]);

    const cargarTareas = async () => {
        try {
            const data = await AsyncStorage.getItem('tareas');
            if (data !== null) {
                setTareas(JSON.parse(data));
            }
        } catch (error) {
            Alert.alert("Error", "No se pudieron cargar las tareas");
        }
    };

    const guardarTareas = async () => {
        try {
            await AsyncStorage.setItem('tareas', JSON.stringify(tareas));
        } catch (error) {
            Alert.alert("Error", "No se pudieron guardar las tareas");
        }
    };

    const agregarTarea = () => {
        if (!nuevaTarea.trim()) {
            Alert.alert("Error", "Escribe algo primero");
            return;
        }

        const nueva = {
            id: Date.now().toString(),
            titulo: nuevaTarea,
            completada: false
        };


        setTareas([...tareas, nueva]);
        setNuevaTarea("");
    };

    const marcarComoRealizada = (id) => {
        const actualizadas = tareas.map(t =>
            t.id === id ? { ...t, completada: true } : t
        );
        setTareas(actualizadas);
    };


    const eliminarTarea = (id) => {
        const filtradas = tareas.filter(item => item.id !== id);
        setTareas(filtradas);
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigation.replace('Login');
    };

    const renderItem = ({ item }) => {
        if (item.completada) return null;

        return (
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={styles.texto}>{item.titulo}</Text>
                </View>

                <TouchableOpacity
                    style={styles.doneButton}
                    onPress={() => marcarComoRealizada(item.id)}
                >
                    <Text style={styles.doneText}>✔</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => eliminarTarea(item.id)}
                >
                    <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
            </View>
        );
    };




    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.title}>Gestión Personal</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Realizadas')}>
                        <Text style={{ color: 'white', marginRight: 15 }}>
                            Realizadas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogout}>
                        <Text style={styles.logout}>Salir</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Escribe una tarea, gasto o nota..."
                    value={nuevaTarea}
                    onChangeText={setNuevaTarea}
                />

                <TouchableOpacity style={styles.button} onPress={agregarTarea}>
                    <Text style={styles.buttonText}>Agregar</Text>
                </TouchableOpacity>

                <FlatList
                    data={tareas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    doneButton: {
        width: 40,
        height: 40,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 10
    },

    doneText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    header: {
        backgroundColor: '#000',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    logout: {
        color: 'white',
        fontWeight: 'bold'
    },


    container: {
        flex: 1,

        backgroundColor: '#f2f2f2'
    },



    input: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    button: {
        backgroundColor: '#0073df',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },

    texto: {
        fontSize: 16
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },

    textContainer: {
        flex: 1,
        paddingRight: 10
    },


    deleteButton: {
        width: 40,
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    deleteText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }


});
