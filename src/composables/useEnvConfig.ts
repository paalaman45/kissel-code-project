// Environment configuration composable
// Centralizes all environment variables and provides type-safe access

export interface EnvConfig {
  // Firebase
  firebase: {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
  }
  
  // GitHub
  github: {
    token: string
    repo: string
    owner: string
    branch: string
  }
  
  // Application
  app: {
    title: string
    description: string
    url: string
  }
  
  // Contact
  contact: {
    email: string
    phone: string
    allowedEmail: string
  }
  
  // Social Media
  social: {
    github: string
    linkedin: string
    instagram: string
  }
}

export const useEnvConfig = (): EnvConfig => {
  return {
    firebase: {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
      appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ''
    },
    
    github: {
      token: import.meta.env.VITE_GITHUB_TOKEN || '',
      repo: import.meta.env.VITE_GITHUB_REPO || '',
      owner: import.meta.env.VITE_GITHUB_OWNER || '',
      branch: import.meta.env.VITE_GITHUB_BRANCH || 'main'
    },
    
    app: {
      title: import.meta.env.VITE_APP_TITLE || 'Kissel Code',
      description: import.meta.env.VITE_APP_DESCRIPTION || 'Full Stack Developer Portfolio',
      url: import.meta.env.VITE_APP_URL || 'https://localhost:5173'
    },
    
    contact: {
      email: import.meta.env.VITE_CONTACT_EMAIL || '',
      phone: import.meta.env.VITE_CONTACT_PHONE || '',
      allowedEmail: import.meta.env.VITE_CONTACT_EMAIL || ''
    },
    
    social: {
      github: import.meta.env.VITE_GITHUB_URL || '',
      linkedin: import.meta.env.VITE_LINKEDIN_URL || '',
      instagram: import.meta.env.VITE_INSTAGRAM_URL || ''
    }
  }
}

// Validation function to check if all required environment variables are set
export const validateEnvConfig = (): { isValid: boolean; missing: string[] } => {
  const config = useEnvConfig()
  const missing: string[] = []
  
  // Check Firebase configuration (required for app to function)
  if (!config.firebase.apiKey) missing.push('VITE_FIREBASE_API_KEY')
  if (!config.firebase.authDomain) missing.push('VITE_FIREBASE_AUTH_DOMAIN')
  if (!config.firebase.projectId) missing.push('VITE_FIREBASE_PROJECT_ID')
  if (!config.firebase.storageBucket) missing.push('VITE_FIREBASE_STORAGE_BUCKET')
  if (!config.firebase.messagingSenderId) missing.push('VITE_FIREBASE_MESSAGING_SENDER_ID')
  if (!config.firebase.appId) missing.push('VITE_FIREBASE_APP_ID')
  
  return {
    isValid: missing.length === 0,
    missing
  }
}

export default useEnvConfig