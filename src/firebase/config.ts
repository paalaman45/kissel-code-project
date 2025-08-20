// Firebase configuration and initialization
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration object
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXbLvpUZBNMlUH34s4gApDj8i0lgEdHZ8",
  authDomain: "kissel-james-paalaman.firebaseapp.com",
  projectId: "kissel-james-paalaman",
  storageBucket: "kissel-james-paalaman.firebasestorage.app",
  messagingSenderId: "813375152467",
  appId: "1:813375152467:web:db16fd83b8f0d3974141a6",
  measurementId: "G-K7LST82Z16"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider()

// Export the app instance
export default app