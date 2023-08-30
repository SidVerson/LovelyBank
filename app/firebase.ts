// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@firebase/auth';
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA1pPysoI4VgFX3F188u9JH49bMDDX90kw',
  authDomain: 'bankapp-c9815.firebaseapp.com',
  projectId: 'bankapp-c9815',
  storageBucket: 'bankapp-c9815.appspot.com',
  messagingSenderId: '394748124265',
  appId: '1:394748124265:web:9688e49c1c66742a5796f8',
  measurementId: 'G-DSJ18ZG4MT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);
export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);
export const db = getFirestore();
