import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,


    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TareasRealizadasScreen({ navigation }){
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        cargarTareas();
    }, []);

    const cargarTareas = async () => {
        const data = await AsyncStorage.getItem('tareas');
        if (data) {
            const todas = JSON.parse(data);
            const realizadas = todas.filter(t => t.completada);
            setTareas(realizadas);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} edges={['top']}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.title}>Tareas Realizadas</Text>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.logout}>Volver</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={tareas}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ padding: 20 }}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.text}>{item.titulo}</Text>
                        </View>
                    )}
                />

            </View>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
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
    
   
    card: {
        backgroundColor: '#d4edda',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 16
    }

});
