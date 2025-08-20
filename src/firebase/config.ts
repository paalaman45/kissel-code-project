// Firebase configuration and initialization
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { useEnvConfig, validateEnvConfig } from '@/composables/useEnvConfig'

// Get environment configuration
const envConfig = useEnvConfig()

// Validate required environment variables
const validation = validateEnvConfig()
if (!validation.isValid) {
  console.error('Missing required environment variables:', validation.missing)
  console.error('Please check your .env file and ensure all Firebase configuration variables are set')
}

// Firebase configuration object using environment variables
const firebaseConfig = envConfig.firebase;

// Initialize Firebase app
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider()

// Export the app instance
export default app