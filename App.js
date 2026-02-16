import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TareasScreen from "./screens/TareasScreen";
import TareasRealizadasScreen from "./screens/TareasRealizadasScreen";

 
const Stack = createNativeStackNavigator();
 
export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Tareas" component={TareasScreen} />
          <Stack.Screen name="Realizadas" component={TareasRealizadasScreen} />

        </Stack.Navigator>
      </NavigationContainer>
 
      
  );
}