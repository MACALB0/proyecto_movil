# App Gestión Personal

Aplicación móvil desarrollada con React Native (Expo) que permite gestionar tareas, gastos y notas de manera organizada y persistente.

La aplicación incluye autenticación de usuarios mediante Firebase Authentication y almacenamiento local utilizando AsyncStorage, permitiendo conservar la información incluso después de cerrar la app.

---

##  Objetivo del Proyecto

Desarrollar una aplicación móvil funcional que implemente:

- Navegación entre múltiples pantallas
- Manejo de estado con React Hooks
- Persistencia de datos local
- Autenticación de usuarios
- Interfaz limpia y consistente
- Buenas prácticas de organización del código

---

##  Tecnologías Utilizadas

- React Native
- Expo
- Firebase Authentication
- AsyncStorage
- React Navigation (Stack Navigator)

---

##  Funcionalidades Implementadas

###  Autenticación
- Registro de nuevos usuarios
- Inicio de sesión
- Persistencia de sesión
- Cierre de sesión

###  Gestión de Tareas
- Crear tareas, gastos o notas
- Eliminar tareas
- Marcar tareas como realizadas
- Persistencia automática en almacenamiento local

###  Tareas Realizadas
- Pantalla independiente para visualizar tareas completadas
- Navegación entre pantallas
- Actualización dinámica del estado

###  Interfaz de Usuario
- Diseño limpio y minimalista
- Header personalizado reutilizable
- Botones intuitivos
- Validaciones básicas en formularios
- Feedback visual mediante alertas
- Diseño responsivo con StyleSheet

---

##  Conceptos Aplicados

- useState
- useEffect
- Manejo de eventos (onPress, onChangeText)
- FlatList para renderizado eficiente de listas
- Persistencia con AsyncStorage
- Navegación con parámetros
- Organización modular del código
- Separación de responsabilidades

---

## 📂 Estructura del Proyecto

/screens

    LoginScreen.js

    RegisterScreen.js

    TareasScreen.js

    TareasRealizadasScreen.js
firebaseConfig.js

---

##  Instalación y Ejecución

1. Descargar o clonar el proyecto.
2. Instalar dependencias:

npm install

---

3. Ejecutar el proyecto:

npx expo start

---


4. Escanear el código QR con Expo Go o ejecutar en un emulador.

---

## 📊 Cumplimiento de Requisitos Académicos

### Módulo 1 - Estructura Básica
- Proyecto configurado con Expo
- Estructura organizada en carpetas
- Navegación funcional entre pantallas

### Módulo 2 - Interfaz de Usuario
- Más de 3 pantallas
- Componentes nativos (View, Text, TextInput, FlatList, etc.)
- Formularios con validación
- Feedback visual
- Diseño responsivo

### Módulo 3 - Lógica de Programación
- Uso de useState y useEffect
- Manejo de eventos
- Funciones auxiliares estructuradas
- Renderizado dinámico de listas

### Módulo 4 - Datos
- Persistencia local con AsyncStorage
- Integración con Firebase Authentication

### Módulo 5 - Funcionalidades Avanzadas
- Navegación entre pantallas con parámetros
- Estado dinámico
- Gestión de datos persistentes

---

## Demo

Se incluye un video demostrativo (2–3 minutos) donde se muestra:

- Registro de usuario
- Inicio de sesión
- Creación de tareas
- Marcado de tareas como realizadas
- Visualización de tareas completadas
- Persistencia de datos
- Cierre de sesión

---

## Diseño UI/UX

La aplicación fue diseñada bajo los siguientes principios:

- Claridad visual
- Consistencia en componentes
- Minimalismo
- Navegación intuitiva
- Separación visual clara entre secciones

---

##  Autor

Marcos Alberto Castillo  
Proyecto de Programación Móvil  
