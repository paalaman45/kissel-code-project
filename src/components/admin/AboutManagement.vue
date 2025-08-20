<template>
  <!-- About Me Content Management -->
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900">About Me Management</h2>
      <button
        @click="toggleEdit"
        :class="[
          'px-4 py-2 rounded-lg font-medium transition-colors',
          isEditing
            ? 'bg-gray-600 hover:bg-gray-700 text-white'
            : 'bg-primary-600 hover:bg-primary-700 text-white'
        ]"
      >
        {{ isEditing ? 'Cancel' : 'Edit Content' }}
      </button>
    </div>

    <!-- Current Content Display -->
    <div v-if="!isEditing" class="bg-white rounded-lg shadow-sm border p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Current About Me Content</h3>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <p class="text-gray-900">{{ currentContent.title }}</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <p class="text-gray-600 leading-relaxed">{{ currentContent.content }}</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
          <div v-if="currentContent.image" class="mt-2">
            <img
              :src="getImageUrl(currentContent.image)"
              alt="Profile"
              class="w-32 h-32 object-cover rounded-lg border"
            />
          </div>
          <div v-else class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <span class="text-gray-400">No image</span>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Skills</label>
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              v-for="skill in currentContent.skills"
              :key="skill"
              class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Form -->
    <div v-if="isEditing" class="bg-white rounded-lg shadow-sm border p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Edit About Me Content</h3>
      
      <form @submit.prevent="saveContent" class="space-y-6">
        <!-- Title Field -->
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
            Section Title
          </label>
          <input
            id="title"
            v-model="formData.title"
            type="text"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
            placeholder="About Me"
          />
        </div>

        <!-- Content Field -->
        <div>
          <label for="content" class="block text-sm font-medium text-gray-700 mb-2">
            About Me Content
          </label>
          <textarea
            id="content"
            v-model="formData.content"
            rows="6"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
            placeholder="Tell people about yourself, your background, and experience..."
          ></textarea>
        </div>

        <!-- Profile Image Upload -->
        <div>
          <label for="image" class="block text-sm font-medium text-gray-700 mb-2">
            Profile Image
          </label>
          <div class="space-y-3">
            <!-- Current Image Preview -->
            <div v-if="formData.image" class="relative inline-block">
              <img
                :src="getImageUrl(formData.image)"
                alt="Profile image"
                class="w-32 h-32 object-cover rounded-lg border"
              />
              <button
                type="button"
                @click="removeImage"
                class="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
              >
                ×
              </button>
            </div>
            
            <!-- File Input -->
            <div class="flex items-center space-x-3">
              <input
                ref="imageInput"
                type="file"
                accept="image/*"
                @change="handleImageUpload"
                class="hidden"
              />
              <button
                type="button"
                @click="$refs.imageInput?.click()"
                :disabled="uploadingImage"
                class="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg transition-colors flex items-center"
              >
                <div v-if="uploadingImage" class="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2"></div>
                <svg v-else class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {{ uploadingImage ? 'Uploading...' : 'Choose Profile Image' }}
              </button>
            </div>
            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 5MB. Square images work best for profile photos.</p>
          </div>
        </div>

        <!-- Skills Field -->
        <div>
          <label for="skills" class="block text-sm font-medium text-gray-700 mb-2">
            Skills (comma-separated)
          </label>
          <input
            id="skills"
            v-model="skillsInput"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
            placeholder="Vue.js, React, Node.js, Python, Firebase"
          />
          <p class="text-sm text-gray-500 mt-1">Separate skills with commas</p>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end space-x-4">
          <button
            type="button"
            @click="cancelEdit"
            class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            :disabled="loading"
            class="px-4 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-lg transition-colors flex items-center"
          >
            <div v-if="loading" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            {{ loading ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Success/Error Messages -->
    <div v-if="message" :class="[
      'p-4 rounded-lg',
      message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'
    ]">
      {{ message.text }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useFirestore } from '@/composables/useFirestore'
import { useContentStore } from '@/stores/content'
import { useImageUpload } from '@/composables/useImageUpload'

// Firebase integration
const { document: aboutDoc, loading, error, fetchDocument, updateDocument } = useFirestore('about')

// Content store for local fallback
const contentStore = useContentStore()

// Image upload integration
const { uploading: uploadingImage, uploadImage, getImageUrl, deleteImage, validateImage } = useImageUpload()

// Component state
const isEditing = ref(false)
const message = ref(null)
const formData = ref({
  title: '',
  content: '',
  skills: [],
  image: ''
})

// Skills input as comma-separated string
const skillsInput = ref('')

// Current content (Firebase or local)
const currentContent = computed(() => {
  if (aboutDoc.value) {
    return aboutDoc.value
  }
  return contentStore.aboutMe
})

/**
 * Toggle edit mode
 */
const toggleEdit = () => {
  if (isEditing.value) {
    cancelEdit()
  } else {
    startEdit()
  }
}

/**
 * Start editing - populate form with current data
 */
const startEdit = () => {
  isEditing.value = true
  formData.value = {
    title: currentContent.value.title,
    content: currentContent.value.content,
    skills: [...currentContent.value.skills],
    image: currentContent.value.image || ''
  }
  skillsInput.value = currentContent.value.skills.join(', ')
  clearMessage()
}

/**
 * Cancel editing
 */
const cancelEdit = () => {
  isEditing.value = false
  clearMessage()
}

/**
 * Save content changes
 */
const saveContent = async () => {
  try {
    // Parse skills from comma-separated input
    const skills = skillsInput.value
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0)

    const updatedData = {
      ...formData.value,
      skills
    }

    // Try to update in Firebase
    try {
      await updateDocument('main', updatedData)
      showMessage('Content updated successfully!', 'success')
    } catch (firebaseError) {
      // If Firebase update fails, update local store
      contentStore.updateAboutMe(updatedData)
      showMessage('Content updated locally (Firebase not configured)', 'success')
    }

    isEditing.value = false
  } catch (err) {
    showMessage('Failed to update content: ' + err.message, 'error')
  }
}

/**
 * Show message to user
 */
const showMessage = (text, type) => {
  message.value = { text, type }
  setTimeout(() => {
    clearMessage()
  }, 5000)
}

/**
 * Clear message
 */
const clearMessage = () => {
  message.value = null
}

/**
 * Handle image upload
 */
const handleImageUpload = async (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  // Validate image
  const validationError = validateImage(file)
  if (validationError) {
    showMessage(validationError, 'error')
    return
  }

  try {
    const result = await uploadImage(file)
    formData.value.image = result.filename
    showMessage('Profile image uploaded successfully!', 'success')
  } catch (err) {
    showMessage('Failed to upload image: ' + err.message, 'error')
  }

  // Clear the file input
  event.target.value = ''
}

/**
 * Remove image
 */
const removeImage = async () => {
  if (formData.value.image) {
    try {
      await deleteImage(formData.value.image)
      formData.value.image = ''
      showMessage('Profile image removed successfully!', 'success')
    } catch (err) {
      console.error('Failed to delete image:', err)
      formData.value.image = ''
    }
  }
}

/**
 * Initialize component
 */
onMounted(async () => {
  try {
    // Try to fetch from Firebase
    await fetchDocument('main')
  } catch (err) {
    // Silently fall back to local store data if Firebase is not available
    // This is expected behavior when Firebase is not configured or document doesn't exist
  }
  
  // Set default profile image if none exists
  if (!contentStore.aboutMe.image) {
    contentStore.updateAboutMe({ ...contentStore.aboutMe, image: 'Kissel-nologo.png' })
  }
})
</script>