<template>
  <!-- Skills Management Component -->
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900">Skills Management</h2>
      <button
        @click="openCreateModal"
        class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
      >
        Add New Skill
      </button>
    </div>

    <!-- Skills Grid -->
    <div class="bg-white rounded-lg shadow-sm border">
      <!-- Loading State -->
      <div v-if="loading" class="p-8 text-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
        <p class="text-gray-600">Loading skills...</p>
      </div>

      <!-- Skills List -->
      <div v-else-if="skills.length > 0" class="p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="skill in skills"
            :key="skill.id"
            class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div class="flex justify-between items-start mb-3">
              <div class="flex-1">
                <h3 class="font-semibold text-gray-900">{{ skill.name }}</h3>
                <span class="text-sm text-gray-500">{{ skill.category || 'Uncategorized' }}</span>
              </div>
              <div class="flex space-x-2">
                <button
                  @click="editSkill(skill)"
                  class="text-primary-600 hover:text-primary-700 text-sm"
                >
                  Edit
                </button>
                <button
                  @click="deleteSkill(skill.id)"
                  class="text-red-600 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            
            <!-- Progress Bar -->
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Proficiency</span>
                <span class="text-gray-900">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
            
            <!-- Experience -->
            <div v-if="skill.experience" class="mt-2 text-xs text-gray-500">
              {{ skill.experience }} {{ skill.experience === 1 ? 'year' : 'years' }} experience
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="p-8 text-center">
        <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No Skills Found</h3>
        <p class="text-gray-600 mb-4">Get started by adding your first skill.</p>
        <button
          @click="openCreateModal"
          class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Add First Skill
        </button>
      </div>
    </div>

    <!-- Skill Modal (Create/Edit) -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-lg w-full">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-gray-900">
              {{ editingSkill ? 'Edit Skill' : 'Add New Skill' }}
            </h3>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <form @submit.prevent="saveSkill" class="space-y-4">
            <!-- Skill Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                Skill Name *
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
                placeholder="e.g. Vue.js"
              />
            </div>

            <!-- Category -->
            <div>
              <label for="category" class="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                id="category"
                v-model="formData.category"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
              >
                <option value="">Select Category</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
                <option value="Tools">Tools</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <!-- Proficiency Level -->
            <div>
              <label for="level" class="block text-sm font-medium text-gray-700 mb-1">
                Proficiency Level (%) *
              </label>
              <div class="space-y-2">
                <input
                  id="level"
                  v-model.number="formData.level"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  required
                  class="w-full"
                />
                <div class="text-center text-sm text-gray-600">
                  {{ formData.level }}%
                </div>
              </div>
            </div>

            <!-- Experience -->
            <div>
              <label for="experience" class="block text-sm font-medium text-gray-700 mb-1">
                Years of Experience
              </label>
              <input
                id="experience"
                v-model.number="formData.experience"
                type="number"
                min="0"
                max="50"
                step="0.5"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
                placeholder="2.5"
              />
            </div>

            <!-- Skill Icon URL -->
            <div>
              <label for="image" class="block text-sm font-medium text-gray-700 mb-1">
                Skill Icon URL
              </label>
              <div class="space-y-3">
                <!-- Current Image Preview -->
                <div v-if="formData.image" class="relative inline-block">
                  <img
                    :src="formData.image"
                    alt="Skill image"
                    class="w-16 h-16 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    @click="removeImage"
                    class="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                </div>
                <!-- Placeholder when no image -->
                <div v-else class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border border-dashed border-gray-300">
                  <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                
                <!-- URL Input -->
                <input
                  id="image"
                  v-model="formData.image"
                  type="url"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white"
                  placeholder="https://example.com/skill-icon.png"
                />
                <p class="text-xs text-gray-500">Enter the direct URL to your skill icon. Square images work best for skill icons.</p>
              </div>
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
                {{ saving ? 'Saving...' : (editingSkill ? 'Update Skill' : 'Create Skill') }}
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

// Firebase integration
const { documents: skills, loading, error, fetchDocuments, createDocument, updateDocument, deleteDocument } = useFirestore('skills')

// Component state
const showModal = ref(false)
const editingSkill = ref(null)
const saving = ref(false)
const message = ref(null)

// Form data
const formData = ref({
  name: '',
  category: '',
  level: 50,
  experience: null,
  image: ''
})

/**
 * Open create modal
 */
const openCreateModal = () => {
  editingSkill.value = null
  resetForm()
  showModal.value = true
}

/**
 * Edit skill
 */
const editSkill = (skill) => {
  editingSkill.value = skill
  formData.value = {
    name: skill.name || '',
    category: skill.category || '',
    level: skill.level || 50,
    experience: skill.experience || null,
    image: skill.image || ''
  }
  showModal.value = true
}

/**
 * Close modal
 */
const closeModal = () => {
  showModal.value = false
  editingSkill.value = null
  resetForm()
  clearMessage()
}

/**
 * Reset form
 */
const resetForm = () => {
  formData.value = {
    name: '',
    category: '',
    level: 50,
    experience: null,
    image: ''
  }
}

/**
 * Save skill
 */
const saveSkill = async () => {
  try {
    saving.value = true

    const skillData = {
      ...formData.value,
      level: parseInt(formData.value.level),
      experience: formData.value.experience ? parseFloat(formData.value.experience) : null
    }

    if (editingSkill.value) {
      // Update existing skill
      await updateDocument(editingSkill.value.id, skillData)
      showMessage('Skill updated successfully!', 'success')
    } else {
      // Create new skill
      await createDocument(skillData)
      showMessage('Skill created successfully!', 'success')
    }

    closeModal()
  } catch (err) {
    showMessage('Failed to save skill: ' + err.message, 'error')
  } finally {
    saving.value = false
  }
}

/**
 * Delete skill
 */
const deleteSkill = async (skillId) => {
  if (!confirm('Are you sure you want to delete this skill?')) return

  try {
    await deleteDocument(skillId)
    showMessage('Skill deleted successfully!', 'success')
  } catch (err) {
    showMessage('Failed to delete skill: ' + err.message, 'error')
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
 * Remove image
 */
const removeImage = () => {
  formData.value.image = ''
  showMessage('Image removed successfully!', 'success')
}

/**
 * Initialize component
 */
onMounted(async () => {
  try {
    await fetchDocuments({ orderBy: 'level', orderDirection: 'desc' })
  } catch (err) {
    // Silently fall back if Firebase is not available
  }
})
</script>