<template>
  <!-- Services Management Component -->
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900">Services Management</h2>
      <button
        @click="openCreateModal"
        class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
      >
        Add New Service
      </button>
    </div>

    <!-- Services List -->
    <div class="bg-white rounded-lg shadow-sm border">
      <!-- Loading State -->
      <div v-if="loading" class="p-8 text-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
        <p class="text-gray-600">Loading services...</p>
      </div>

      <!-- Services Table -->
      <div v-else-if="services.length > 0" class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="service in services" :key="service.id" class="hover:bg-gray-50">
              <td class="px-6 py-4">
                <div>
                  <div class="font-medium text-gray-900">{{ service.title }}</div>
                  <div class="text-sm text-gray-500 line-clamp-2">{{ service.description }}</div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">
                <span class="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                  {{ service.category || 'General' }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-900">
                ${{ service.price || 'N/A' }}
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">
                {{ formatDate(service.createdAt) }}
              </td>
              <td class="px-6 py-4 text-right text-sm space-x-2">
                <button
                  @click="editService(service)"
                  class="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Edit
                </button>
                <button
                  @click="deleteService(service.id)"
                  class="text-red-600 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Empty State -->
      <div v-else class="p-8 text-center">
        <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No Services Found</h3>
        <p class="text-gray-600 mb-4">Get started by adding your first service.</p>
        <button
          @click="openCreateModal"
          class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Add First Service
        </button>
      </div>
    </div>

    <!-- Service Modal (Create/Edit) -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-gray-900">
              {{ editingService ? 'Edit Service' : 'Add New Service' }}
            </h3>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <form @submit.prevent="saveService" class="space-y-4">
            <!-- Title -->
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
                Service Title *
              </label>
              <input
                id="title"
                v-model="formData.title"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
                placeholder="e.g. Web Development"
              />
            </div>

            <!-- Description -->
            <div>
              <label for="description" class="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                id="description"
                v-model="formData.description"
                rows="3"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
                placeholder="Describe the service you offer..."
              ></textarea>
            </div>

            <!-- Category and Price -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="category" class="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  v-model="formData.category"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
                >
                  <option value="">Select Category</option>
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label for="price" class="block text-sm font-medium text-gray-700 mb-1">
                  Starting Price ($)
                </label>
                <input
                  id="price"
                  v-model="formData.price"
                  type="number"
                  min="0"
                  step="0.01"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
                  placeholder="1000"
                />
              </div>
            </div>

            <!-- Icon -->
            <div>
              <label for="icon" class="block text-sm font-medium text-gray-700 mb-1">
                Icon
              </label>
              <select
                id="icon"
                v-model="formData.icon"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
              >
                <option value="">Select Icon</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="ui-design">UI Design</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>

            <!-- Image Upload -->
            <div>
              <label for="image" class="block text-sm font-medium text-gray-700 mb-1">
                Service Image
              </label>
              <div class="space-y-3">
                <!-- Current Image Preview -->
                <div v-if="formData.image" class="relative inline-block">
                  <img
                    :src="getImageUrl(formData.image)"
                    alt="Service image"
                    class="w-32 h-20 object-cover rounded-lg border"
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
                    {{ uploadingImage ? 'Uploading...' : 'Choose Image' }}
                  </button>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
              </div>
            </div>

            <!-- Features -->
            <div>
              <label for="features" class="block text-sm font-medium text-gray-700 mb-1">
                Features (comma-separated)
              </label>
              <textarea
                id="features"
                v-model="featuresInput"
                rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
                placeholder="Responsive Design, SEO Optimization, Performance Optimization"
              ></textarea>
              <p class="text-xs text-gray-500 mt-1">Each feature on a new line or separated by commas</p>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                @click="closeModal"
                class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="saving"
                class="px-4 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-lg transition-colors flex items-center"
              >
                <div v-if="saving" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {{ saving ? 'Saving...' : (editingService ? 'Update Service' : 'Create Service') }}
              </button>
            </div>
          </form>
        </div>
      </div>
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
import { ref, onMounted } from 'vue'
import { useFirestore } from '@/composables/useFirestore'
import { useImageUpload } from '@/composables/useImageUpload'

// Firebase integration
const { documents: services, loading, error, fetchDocuments, createDocument, updateDocument, deleteDocument } = useFirestore('services')

// Image upload integration
const { uploading: uploadingImage, uploadImage, getImageUrl, deleteImage, validateImage } = useImageUpload()

// Component state
const showModal = ref(false)
const editingService = ref(null)
const saving = ref(false)
const message = ref(null)

// Form data
const formData = ref({
  title: '',
  description: '',
  category: '',
  price: '',
  icon: '',
  features: [],
  image: ''
})

const featuresInput = ref('')

/**
 * Format date for display
 */
const formatDate = (dateString) => {
  if (!dateString) return 'Unknown'
  try {
    return new Date(dateString).toLocaleDateString()
  } catch {
    return 'Unknown'
  }
}

/**
 * Open create modal
 */
const openCreateModal = () => {
  editingService.value = null
  resetForm()
  showModal.value = true
}

/**
 * Edit service
 */
const editService = (service) => {
  editingService.value = service
  formData.value = {
    title: service.title || '',
    description: service.description || '',
    category: service.category || '',
    price: service.price || '',
    icon: service.icon || '',
    features: service.features || [],
    image: service.image || ''
  }
  featuresInput.value = (service.features || []).join('\n')
  showModal.value = true
}

/**
 * Close modal
 */
const closeModal = () => {
  showModal.value = false
  editingService.value = null
  resetForm()
  clearMessage()
}

/**
 * Reset form
 */
const resetForm = () => {
  formData.value = {
    title: '',
    description: '',
    category: '',
    price: '',
    icon: '',
    features: [],
    image: ''
  }
  featuresInput.value = ''
}

/**
 * Save service
 */
const saveService = async () => {
  try {
    saving.value = true

    // Parse features
    const features = featuresInput.value
      .split(/\n|,/)
      .map(f => f.trim())
      .filter(f => f.length > 0)

    const serviceData = {
      ...formData.value,
      features,
      price: formData.value.price ? parseFloat(formData.value.price) : null
    }

    if (editingService.value) {
      // Update existing service
      await updateDocument(editingService.value.id, serviceData)
      showMessage('Service updated successfully!', 'success')
    } else {
      // Create new service
      await createDocument(serviceData)
      showMessage('Service created successfully!', 'success')
    }

    closeModal()
  } catch (err) {
    showMessage('Failed to save service: ' + err.message, 'error')
  } finally {
    saving.value = false
  }
}

/**
 * Delete service
 */
const deleteService = async (serviceId) => {
  if (!confirm('Are you sure you want to delete this service?')) return

  try {
    await deleteDocument(serviceId)
    showMessage('Service deleted successfully!', 'success')
  } catch (err) {
    showMessage('Failed to delete service: ' + err.message, 'error')
  }
}

/**
 * Show message
 */
const showMessage = (text, type) => {
  message.value = { text, type }
  setTimeout(() => clearMessage(), 5000)
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
    showMessage('Image uploaded successfully!', 'success')
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
      showMessage('Image removed successfully!', 'success')
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
    await fetchDocuments({ orderBy: 'createdAt', orderDirection: 'desc' })
  } catch (err) {
    // Silently fall back if Firebase is not available
  }
})
</script>