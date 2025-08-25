import { ref } from 'vue'

interface UploadResult {
  url: string
  filename: string
}

interface GitHubUploadResponse {
  content: {
    download_url: string
    name: string
  }
}

export const useImageUpload = () => {
  const uploading = ref(false)
  const error = ref<string | null>(null)

  /**
   * Upload an image file to GitHub repository
   */
  const uploadImage = async (file: File): Promise<UploadResult> => {
    try {
      uploading.value = true
      error.value = null

      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('Please select a valid image file')
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024 // 5MB
      if (file.size > maxSize) {
        throw new Error('Image size must be less than 5MB')
      }

      // Generate unique filename
      const timestamp = Date.now()
      const randomString = Math.random().toString(36).substring(2, 15)
      const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg'
      const filename = `${timestamp}_${randomString}.${extension}`

      // Convert file to base64
      const base64Content = await fileToBase64(file)
      
      // Try GitHub upload first, fallback to local storage
      try {
        const githubResult = await uploadToGitHub(filename, base64Content)
        
        // Store GitHub URL in localStorage for immediate preview
        const savedImages = JSON.parse(localStorage.getItem('uploadedImages') || '{}')
        savedImages[filename] = githubResult.content.download_url
        localStorage.setItem('uploadedImages', JSON.stringify(savedImages))
        
        return {
          url: githubResult.content.download_url,
          filename: filename
        }
      } catch (githubError) {
        console.warn('GitHub upload failed, using local storage:', githubError)
        
        // Fallback to local storage
        await saveImageLocally(file, filename)
        
        return {
          url: `/images/${filename}`,
          filename: filename
        }
      }

    } catch (err: any) {
      error.value = err.message || 'Failed to upload image'
      throw err
    } finally {
      uploading.value = false
    }
  }

  /**
   * Upload image to GitHub repository using GitHub API
   */
  const uploadToGitHub = async (filename: string, base64Content: string): Promise<GitHubUploadResponse> => {
    // GitHub repository configuration - you'll need to set these
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || ''
    const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO || 'your-username/your-repo-name'
    const GITHUB_BRANCH = import.meta.env.VITE_GITHUB_BRANCH || 'main'

    // Debug info (can be removed in production)
    // console.log('GitHub Config Debug:', { hasToken: !!GITHUB_TOKEN, repo: GITHUB_REPO })

    if (!GITHUB_TOKEN || !GITHUB_REPO) {
      console.error('GitHub configuration missing:', { GITHUB_TOKEN: !!GITHUB_TOKEN, GITHUB_REPO })
      throw new Error('GitHub configuration missing. Please set VITE_GITHUB_TOKEN and VITE_GITHUB_REPO environment variables.')
    }

    const path = `public/images/${filename}`
    const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`

    // console.log('GitHub API Request:', { url: apiUrl, filename: filename })

    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        message: `Add image: ${filename}`,
        content: base64Content,
        branch: GITHUB_BRANCH
      })
    })

    // console.log('GitHub API Response:', { status: response.status, ok: response.ok })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('GitHub API Error Details:', errorData)
      throw new Error(`GitHub API error: ${errorData.message || response.statusText}`)
    }

    return response.json()
  }

  /**
   * Convert file to base64
   */
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1]
        resolve(base64)
      }
      reader.onerror = () => reject(new Error('Failed to read file'))
      reader.readAsDataURL(file)
    })
  }

  /**
   * Save image locally (for development/fallback)
   */
  const saveImageLocally = async (file: File, filename: string): Promise<void> => {
    // Create object URL for the image
    const objectUrl = URL.createObjectURL(file)
    
    // Store the object URL and filename for later use
    const savedImages = JSON.parse(localStorage.getItem('uploadedImages') || '{}')
    savedImages[filename] = objectUrl
    localStorage.setItem('uploadedImages', JSON.stringify(savedImages))
    
    // Clean up object URL after a delay to prevent memory leaks
    setTimeout(() => {
      const currentImages = JSON.parse(localStorage.getItem('uploadedImages') || '{}')
      if (currentImages[filename] === objectUrl) {
        // Only revoke if it hasn't been replaced
        URL.revokeObjectURL(objectUrl)
      }
    }, 60000) // Clean up after 1 minute
  }

  /**
   * Get the actual URL for a saved image
   */
  const getImageUrl = (filename: string): string => {
    // If it's already a full URL (from GitHub), return as-is
    if (filename.startsWith('http')) {
      return filename
    }
    
    // Check localStorage first (for locally stored images)
    const savedImages = JSON.parse(localStorage.getItem('uploadedImages') || '{}')
    if (savedImages[filename]) {
      return savedImages[filename]
    }
    
    // Fallback to local public/images path
    return `/images/${filename}`
  }

  /**
   * Delete an uploaded image
   */
  const deleteImage = async (filename: string): Promise<void> => {
    try {
      const savedImages = JSON.parse(localStorage.getItem('uploadedImages') || '{}')
      
      if (savedImages[filename]) {
        // Revoke object URL to free memory
        URL.revokeObjectURL(savedImages[filename])
        
        // Remove from storage
        delete savedImages[filename]
        localStorage.setItem('uploadedImages', JSON.stringify(savedImages))
      }
    } catch (err: any) {
      console.error('Failed to delete image:', err)
    }
  }

  /**
   * Validate image file
   */
  const validateImage = (file: File): string | null => {
    // Check file type
    if (!file.type.startsWith('image/')) {
      return 'Please select a valid image file'
    }

    // Check file size (max 5MB)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      return 'Image size must be less than 5MB'
    }

    // Check file format
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return 'Only JPEG, PNG, GIF, and WebP images are allowed'
    }

    return null
  }

  return {
    uploading,
    error,
    uploadImage,
    getImageUrl,
    deleteImage,
    validateImage
  }
}