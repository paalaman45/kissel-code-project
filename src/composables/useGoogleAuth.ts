import { ref } from 'vue'
import { signInWithPopup, signOut, type User } from 'firebase/auth'
import { auth, googleProvider } from '@/firebase/config'

// Add your personal Gmail address here - only this email will be allowed to login
const ALLOWED_EMAIL = 'kisseljamespaalam@gmail.com' // Replace with your actual Gmail

export const useGoogleAuth = () => {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      loading.value = true
      error.value = null

      const result = await signInWithPopup(auth, googleProvider)
      const userEmail = result.user.email

      // Check if the email is your personal Gmail
      if (userEmail !== ALLOWED_EMAIL) {
        // Sign out the unauthorized user immediately
        await signOut(auth)
        throw new Error(`Access denied. Only ${ALLOWED_EMAIL} is authorized to login.`)
      }

      user.value = result.user
      console.log('Google sign-in successful:', result.user.email)
      return result.user

    } catch (err: any) {
      error.value = err.message || 'Google sign-in failed'
      console.error('Google sign-in error:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Sign out
  const signOutUser = async () => {
    try {
      loading.value = true
      error.value = null
      
      await signOut(auth)
      user.value = null
      console.log('User signed out successfully')
      
    } catch (err: any) {
      error.value = err.message || 'Sign out failed'
      console.error('Sign out error:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Check current auth state
  const checkAuthState = () => {
    return new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((currentUser) => {
        if (currentUser && currentUser.email === ALLOWED_EMAIL) {
          user.value = currentUser
        } else if (currentUser && currentUser.email !== ALLOWED_EMAIL) {
          // Auto sign out unauthorized users
          signOut(auth)
          user.value = null
        } else {
          user.value = null
        }
        unsubscribe()
        resolve(currentUser)
      })
    })
  }

  return {
    user,
    loading,
    error,
    signInWithGoogle,
    signOutUser,
    checkAuthState,
    allowedEmail: ALLOWED_EMAIL
  }
}