// Authentication composable for managing user authentication state
import { ref, computed, type Ref } from 'vue'
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  type User
} from 'firebase/auth'
import { auth } from '@/firebase/config'

// Reactive user state
const user: Ref<User | null> = ref(null)
const loading = ref(true)

// Computed property to check if user is authenticated
const isAuthenticated = computed(() => !!user.value)

// Initialize auth state listener
onAuthStateChanged(auth, (firebaseUser: User | null) => {
  user.value = firebaseUser
  loading.value = false
})

/**
 * Sign in with email and password
 */
const signIn = async (email: string, password: string) => {
  try {
    loading.value = true
    const result = await signInWithEmailAndPassword(auth, email, password)
    return result
  } catch (error) {
    console.error('Sign in error:', error)
    throw error
  } finally {
    loading.value = false
  }
}

/**
 * Sign out the current user
 */
const logout = async () => {
  try {
    await signOut(auth)
    user.value = null
  } catch (error) {
    console.error('Sign out error:', error)
    throw error
  }
}

// Export authentication utilities
export const useAuth = () => {
  return {
    user,
    loading,
    isAuthenticated,
    signIn,
    logout
  }
}