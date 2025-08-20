<template>
  <!-- Blog section displaying latest blog posts -->
  <section id="blogs" class="py-20 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 relative overflow-hidden">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;70&quot; height=&quot;70&quot; viewBox=&quot;0 0 70 70&quot;><g fill-rule=&quot;evenodd&quot;><g fill=&quot;%23ef767a&quot; fill-opacity=&quot;0.4&quot;><circle cx=&quot;7&quot; cy=&quot;7&quot; r=&quot;1.2&quot;/><circle cx=&quot;63&quot; cy=&quot;63&quot; r=&quot;1.2&quot;/><circle cx=&quot;7&quot; cy=&quot;63&quot; r=&quot;1.2&quot;/><circle cx=&quot;63&quot; cy=&quot;7&quot; r=&quot;1.2&quot;/></g></g></svg>')"></div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 right-10 w-28 h-28 bg-rose-400/10 rounded-full animate-pulse-glow"></div>
      <div class="absolute bottom-20 left-10 w-24 h-24 bg-slate-400/10 rounded-full animate-pulse-glow animation-delay-1000"></div>
      <div class="absolute top-40 left-20 w-20 h-20 bg-teal-400/10 rounded-full animate-pulse-glow animation-delay-2000"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-block mb-4">
          <span class="text-rose-500 font-mono text-lg">></span>
          <span class="text-gray-600 font-mono text-lg ml-2">blog_posts.md</span>
        </div>
        <h2 class="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-6 font-poppins">
          Latest Blog Posts
        </h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
          Sharing insights, tutorials, and thoughts on web development, technology, and best practices through engaging content.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <span class="ml-2 text-gray-600">Loading blog posts...</span>
      </div>

      <!-- Error State -->
      <div v-if="error" class="text-center py-8">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {{ error }}
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div v-if="!loading && !error" class="space-y-8">
        
        <!-- Featured Post (First Post) -->
        <div v-if="displayBlogs.length > 0" class="mb-12 animate-fade-in-up animation-delay-300">
          <div class="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/30 relative group">
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-slate-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <!-- Featured Post Image -->
              <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-rose-100 via-slate-100 to-teal-100 relative">
                <div class="w-full h-64 lg:h-full flex items-center justify-center overflow-hidden">
                  <div class="w-24 h-24 bg-gradient-to-br from-rose-500 to-teal-500 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- Featured Post Content -->
              <div class="p-8 lg:p-10 relative z-10">
                <div class="flex items-center space-x-4 mb-6">
                  <span class="bg-gradient-to-r from-rose-100 to-teal-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium border border-rose-200/50">
                    {{ displayBlogs[0].category || 'Featured' }}
                  </span>
                  <div class="flex items-center space-x-2 text-gray-500 text-sm">
                    <span>{{ formatDate(displayBlogs[0].createdAt) }}</span>
                    <span>•</span>
                    <span>{{ displayBlogs[0].readTime || '5 min' }} read</span>
                  </div>
                </div>
                
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {{ displayBlogs[0].title }}
                </h3>
                
                <p class="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                  {{ displayBlogs[0].excerpt || displayBlogs[0].content?.substring(0, 200) + '...' }}
                </p>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-r from-rose-500 to-teal-500 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">{{ displayBlogs[0].author || 'John Doe' }}</div>
                      <div class="text-sm text-gray-500">Author</div>
                    </div>
                  </div>
                  
                  <button 
                    @click="readMore(displayBlogs[0])"
                    class="bg-gradient-to-r from-rose-500 to-teal-500 hover:from-rose-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-rose-500/25 flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Blog Posts -->
        <div v-if="displayBlogs.length > 1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-600">
          <article 
            v-for="(blog, index) in displayBlogs.slice(1)" 
            :key="blog.id"
            class="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/30 overflow-hidden relative"
            :class="`animation-delay-${(index + 2) * 200}`"
          >
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-slate-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Blog Image -->
            <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-rose-100 via-slate-100 to-teal-100 relative">
              <div class="w-full h-48 flex items-center justify-center overflow-hidden">
                <div class="w-16 h-16 bg-gradient-to-br from-rose-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Blog Content -->
            <div class="p-6 relative z-10">
              <div class="flex items-center space-x-4 mb-4">
                <span class="bg-gradient-to-r from-rose-100 to-teal-100 text-rose-800 px-3 py-1 rounded-full text-xs font-medium border border-rose-200/50">
                  {{ blog.category || 'Tech' }}
                </span>
                <span class="text-gray-500 text-xs">{{ formatDate(blog.createdAt) }}</span>
              </div>
              
              <h3 class="text-lg font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
                {{ blog.title }}
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 font-light">
                {{ blog.excerpt || blog.content?.substring(0, 120) + '...' }}
              </p>
              
              <div class="flex items-center justify-between pt-2">
                <div class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                  {{ blog.readTime || '3 min' }} read
                </div>
                <button 
                  @click="readMore(blog)"
                  class="text-rose-600 hover:text-teal-600 font-medium text-sm transition-colors flex items-center space-x-1 group/btn"
                >
                  <span>Read More</span>
                  <svg class="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div v-if="displayBlogs.length >= 6" class="text-center mt-12">
          <button class="bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            Load More Posts
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!loading && !error && (!displayBlogs || displayBlogs.length === 0)" class="text-center py-12">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No Blog Posts Available</h3>
        <p class="text-gray-600">Blog posts will be displayed here once they are published.</p>
      </div>

      <!-- Blog Post Modal (Simple preview) -->
      <div v-if="selectedBlog" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="closeBlogModal">
        <div class="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto" @click.stop>
          <div class="p-8">
            <div class="flex justify-between items-start mb-6">
              <div class="space-y-2">
                <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {{ selectedBlog.category || 'Tech' }}
                </span>
                <h2 class="text-2xl font-bold text-gray-900">{{ selectedBlog.title }}</h2>
                <div class="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{{ formatDate(selectedBlog.createdAt) }}</span>
                  <span>{{ selectedBlog.readTime || '5 min' }} read</span>
                  <span>By {{ selectedBlog.author || 'John Doe' }}</span>
                </div>
              </div>
              <button @click="closeBlogModal" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div class="prose max-w-none text-gray-600 leading-relaxed">
              <p>{{ selectedBlog.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useFirestore } from '@/composables/useFirestore'

// Firebase integration for blogs
const { documents: blogs, loading, error, fetchDocuments } = useFirestore('blogs')

// Selected blog for modal
const selectedBlog = ref(null)

// Default blog data for fallback
const defaultBlogs = [
  {
    id: 'blog-1',
    title: 'Building Modern Web Applications with Vue 3 and Composition API',
    excerpt: 'Explore the power of Vue 3\'s Composition API and how it revolutionizes the way we build reactive applications.',
    content: 'The Vue 3 Composition API represents a significant evolution in how we structure and organize our Vue applications. This new approach provides better logic composition, improved TypeScript support, and enhanced reusability across components. In this comprehensive guide, we\'ll explore the key concepts and practical applications of the Composition API...',
    category: 'Vue.js',
    author: 'John Doe',
    readTime: '8 min',
    createdAt: '2024-01-15',
    featured: true
  },
  {
    id: 'blog-2',
    title: 'Optimizing Web Performance: A Complete Guide',
    excerpt: 'Learn essential techniques to make your web applications lightning fast and provide excellent user experiences.',
    content: 'Web performance optimization is crucial for user engagement and search engine rankings. This guide covers everything from image optimization to code splitting strategies...',
    category: 'Performance',
    author: 'John Doe',
    readTime: '6 min',
    createdAt: '2024-01-10'
  },
  {
    id: 'blog-3',
    title: 'Firebase Authentication in Vue Applications',
    excerpt: 'Step-by-step tutorial on implementing secure authentication using Firebase in Vue.js applications.',
    content: 'Firebase Authentication provides a complete identity solution with support for email/password, phone authentication, and federated identity providers like Google, Facebook, and Twitter...',
    category: 'Firebase',
    author: 'John Doe',
    readTime: '10 min',
    createdAt: '2024-01-05'
  },
  {
    id: 'blog-4',
    title: 'Responsive Design with Tailwind CSS',
    excerpt: 'Master responsive design patterns using Tailwind CSS utility classes for all device sizes.',
    content: 'Tailwind CSS makes responsive design incredibly straightforward with its mobile-first approach and intuitive breakpoint system...',
    category: 'CSS',
    author: 'John Doe',
    readTime: '7 min',
    createdAt: '2024-01-01'
  },
  {
    id: 'blog-5',
    title: 'TypeScript Best Practices for Vue Developers',
    excerpt: 'Enhance your Vue development workflow with TypeScript best practices and practical tips.',
    content: 'TypeScript brings static type checking to JavaScript, making it easier to catch errors early and build maintainable applications...',
    category: 'TypeScript',
    author: 'John Doe',
    readTime: '9 min',
    createdAt: '2023-12-28'
  },
  {
    id: 'blog-6',
    title: 'Building RESTful APIs with Node.js and Express',
    excerpt: 'Complete tutorial on creating robust and scalable REST APIs using Node.js and Express framework.',
    content: 'Building RESTful APIs is a fundamental skill for modern web developers. This tutorial will guide you through creating a complete API...',
    category: 'Node.js',
    author: 'John Doe',
    readTime: '12 min',
    createdAt: '2023-12-25'
  }
]

// Use Firebase blogs or fall back to default
const displayBlogs = computed(() => {
  if (loading.value) return []
  if (error.value || !blogs.value?.length) return defaultBlogs
  return blogs.value.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})

/**
 * Format date string to readable format
 * @param {string} dateString - ISO date string
 */
const formatDate = (dateString) => {
  if (!dateString) return 'Recent'
  
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return 'Recent'
  }
}

/**
 * Open blog post in modal
 * @param {Object} blog - Blog post object
 */
const readMore = (blog) => {
  selectedBlog.value = blog
  // Prevent body scrolling when modal is open
  document.body.style.overflow = 'hidden'
}

/**
 * Close blog modal
 */
const closeBlogModal = () => {
  selectedBlog.value = null
  // Restore body scrolling
  document.body.style.overflow = 'auto'
}

/**
 * Initialize component by fetching blogs from Firebase
 */
onMounted(async () => {
  try {
    // Fetch blogs from Firebase, ordered by creation date (newest first)
    await fetchDocuments({ 
      orderBy: 'createdAt', 
      orderDirection: 'desc' 
    })
  } catch (err) {
    // Silently fall back to default blog data if Firebase is not available
  }
})
</script>

<style scoped>
/* Custom Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

/* Animation Classes */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Animation Delays */
.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-800 {
  animation-delay: 800ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}

/* Custom scrollbar for modal */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Line clamp utilities */
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>