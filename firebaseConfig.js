// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
 
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAUj29P45sQQbqvKaI8VzMvmPbjG6oGlsI",
//   authDomain: "restaurante-16ac7.firebaseapp.com",
//   projectId: "restaurante-16ac7",
//   storageBucket: "restaurante-16ac7.firebasestorage.app",
//   messagingSenderId: "497051590883",
//   appId: "1:497051590883:web:3ea3731c2004e15eaca5d6"
// };
 
// // Inicializar Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAUj29P45sQQbqvKaI8VzMvmPbjG6oGlsI",
  authDomain: "restaurante-16ac7.firebaseapp.com",
  projectId: "restaurante-16ac7",
  storageBucket: "restaurante-16ac7.firebasestorage.app",
  messagingSenderId: "497051590883",
  appId: "1:497051590883:web:3ea3731c2004e15eaca5d6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth con persistencia
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
