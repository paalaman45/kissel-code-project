<template>
  <!-- Blog Management Component -->
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900">Blog Management</h2>
      <button
        @click="openCreateModal"
        class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
      >
        Create New Post
      </button>
    </div>

    <!-- Blog Posts List -->
    <div class="bg-white rounded-lg shadow-sm border">
      <!-- Loading State -->
      <div v-if="loading" class="p-8 text-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
        <p class="text-gray-600">Loading blog posts...</p>
      </div>

      <!-- Blog Posts Table -->
      <div v-else-if="blogs.length > 0" class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
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
            <tr v-for="blog in blogs" :key="blog.id" class="hover:bg-gray-50">
              <td class="px-6 py-4">
                <div>
                  <div class="font-medium text-gray-900">{{ blog.title }}</div>
                  <div class="text-sm text-gray-500 line-clamp-2">
                    {{ blog.excerpt || blog.content?.substring(0, 100) + '...' }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">
                <span class="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                  {{ blog.category || 'Uncategorized' }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm">
                <span :class="[
                  'px-2 py-1 rounded-full text-xs font-medium',
                  blog.published
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                ]">
                  {{ blog.published ? 'Published' : 'Draft' }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">
                {{ formatDate(blog.createdAt) }}
              </td>
              <td class="px-6 py-4 text-right text-sm space-x-2">
                <button
                  @click="editBlog(blog)"
                  class="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Edit
                </button>
                <button
                  @click="togglePublish(blog)"
                  :class="[
                    'font-medium',
                    blog.published
                      ? 'text-yellow-600 hover:text-yellow-700'
                      : 'text-green-600 hover:text-green-700'
                  ]"
                >
                  {{ blog.published ? 'Unpublish' : 'Publish' }}
                </button>
                <button
                  @click="deleteBlog(blog.id)"
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No Blog Posts Found</h3>
        <p class="text-gray-600 mb-4">Get started by creating your first blog post.</p>
        <button
          @click="openCreateModal"
          class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Create First Post
        </button>
      </div>
    </div>

    <!-- Blog Modal (Create/Edit) -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-gray-900">
              {{ editingBlog ? 'Edit Blog Post' : 'Create New Blog Post' }}
            </h3>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <form @submit.prevent="saveBlog" class="space-y-4">
            <!-- Title -->
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
                Post Title *
              </label>
              <input
                id="title"
                v-model="formData.title"
                type="text"
                required
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                placeholder="Enter blog post title"
              />
            </div>

            <!-- Category, Author, Read Time -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label for="category" class="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  v-model="formData.category"
                  class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                >
                  <option value="">Select Category</option>
                  <option value="Vue.js">Vue.js</option>
                  <option value="React">React</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="TypeScript">TypeScript</option>
                  <option value="CSS">CSS</option>
                  <option value="Node.js">Node.js</option>
                  <option value="Firebase">Firebase</option>
                  <option value="WordPress">WordPress</option>
                  <option value="Performance">Performance</option>
                  <option value="Tutorial">Tutorial</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label for="author" class="block text-sm font-medium text-gray-700 mb-1">
                  Author
                </label>
                <input
                  id="author"
                  v-model="formData.author"
                  type="text"
                  class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label for="readTime" class="block text-sm font-medium text-gray-700 mb-1">
                  Read Time
                </label>
                <input
                  id="readTime"
                  v-model="formData.readTime"
                  type="text"
                  class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                  placeholder="5 min"
                />
              </div>
            </div>

            <!-- Excerpt -->
            <div>
              <label for="excerpt" class="block text-sm font-medium text-gray-700 mb-1">
                Excerpt (Preview text)
              </label>
              <textarea
                id="excerpt"
                v-model="formData.excerpt"
                rows="2"
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                placeholder="Brief description that will appear in the blog list..."
              ></textarea>
            </div>

            <!-- Featured Image URL -->
            <div>
              <label for="image" class="block text-sm font-medium text-gray-700 mb-1">
                Featured Image URL
              </label>
              <div class="space-y-3">
                <!-- Current Image Preview -->
                <div v-if="formData.image" class="relative inline-block">
                  <img
                    :src="formData.image"
                    alt="Blog featured image"
                    class="w-48 h-32 object-cover rounded-lg border"
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
                <div v-else class="w-48 h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-dashed border-gray-300">
                  <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                
                <!-- URL Input -->
                <input
                  id="image"
                  v-model="formData.image"
                  type="url"
                  class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                  placeholder="https://example.com/featured-image.jpg"
                />
                <p class="text-xs text-gray-500">Enter the direct URL to your featured image. Recommended size: 1200x800px</p>
              </div>
            </div>

            <!-- Content -->
            <div>
              <label for="content" class="block text-sm font-medium text-gray-700 mb-1">
                Content *
              </label>
              <textarea
                id="content"
                v-model="formData.content"
                rows="12"
                required
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                placeholder="Write your blog post content here..."
              ></textarea>
              <p class="text-xs text-gray-500 mt-1">You can write in Markdown or plain text</p>
            </div>

            <!-- Published Status -->
            <div class="flex items-center space-x-2">
              <input
                id="published"
                v-model="formData.published"
                type="checkbox"
                class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500"
              />
              <label for="published" class="text-sm font-medium text-gray-700">
                Publish immediately
              </label>
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
                {{ saving ? 'Saving...' : (editingBlog ? 'Update Post' : 'Create Post') }}
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
const { documents: blogs, loading, error, fetchDocuments, createDocument, updateDocument, deleteDocument } = useFirestore('blogs')

// Component state
const showModal = ref(false)
const editingBlog = ref(null)
const saving = ref(false)
const message = ref(null)

// Form data
const formData = ref({
  title: '',
  category: '',
  author: 'John Doe',
  readTime: '',
  excerpt: '',
  content: '',
  published: false,
  image: ''
})

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
  editingBlog.value = null
  resetForm()
  showModal.value = true
}

/**
 * Edit blog
 */
const editBlog = (blog) => {
  editingBlog.value = blog
  formData.value = {
    title: blog.title || '',
    category: blog.category || '',
    author: blog.author || 'John Doe',
    readTime: blog.readTime || '',
    excerpt: blog.excerpt || '',
    content: blog.content || '',
    published: blog.published || false,
    image: blog.image || ''
  }
  showModal.value = true
}

/**
 * Close modal
 */
const closeModal = () => {
  showModal.value = false
  editingBlog.value = null
  resetForm()
  clearMessage()
}

/**
 * Reset form
 */
const resetForm = () => {
  formData.value = {
    title: '',
    category: '',
    author: 'John Doe',
    readTime: '',
    excerpt: '',
    content: '',
    published: false,
    image: ''
  }
}

/**
 * Save blog
 */
const saveBlog = async () => {
  try {
    saving.value = true

    const blogData = {
      ...formData.value,
      publishedAt: formData.value.published ? new Date().toISOString() : null
    }

    if (editingBlog.value) {
      // Update existing blog
      await updateDocument(editingBlog.value.id, blogData)
      showMessage('Blog post updated successfully!', 'success')
    } else {
      // Create new blog
      await createDocument(blogData)
      showMessage('Blog post created successfully!', 'success')
    }

    closeModal()
  } catch (err) {
    showMessage('Failed to save blog post: ' + err.message, 'error')
  } finally {
    saving.value = false
  }
}

/**
 * Toggle publish status
 */
const togglePublish = async (blog) => {
  try {
    const newPublishedStatus = !blog.published
    await updateDocument(blog.id, {
      published: newPublishedStatus,
      publishedAt: newPublishedStatus ? new Date().toISOString() : null
    })
    showMessage(
      `Blog post ${newPublishedStatus ? 'published' : 'unpublished'} successfully!`,
      'success'
    )
  } catch (err) {
    showMessage('Failed to update blog status: ' + err.message, 'error')
  }
}

/**
 * Delete blog
 */
const deleteBlog = async (blogId) => {
  if (!confirm('Are you sure you want to delete this blog post?')) return

  try {
    await deleteDocument(blogId)
    showMessage('Blog post deleted successfully!', 'success')
  } catch (err) {
    showMessage('Failed to delete blog post: ' + err.message, 'error')
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
    await fetchDocuments({ orderBy: 'createdAt', orderDirection: 'desc' })
  } catch (err) {
    // Silently fall back if Firebase is not available
  }
})
</script>