<template>
  <!-- Hero section with introduction and call-to-action -->
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-secondary-900 via-gray-900 to-secondary-800">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot;><g fill-rule=&quot;evenodd&quot;><g fill=&quot;%23ef767a&quot; fill-opacity=&quot;0.3&quot;><circle cx=&quot;7&quot; cy=&quot;7&quot; r=&quot;1&quot;/><circle cx=&quot;53&quot; cy=&quot;53&quot; r=&quot;1&quot;/><circle cx=&quot;7&quot; cy=&quot;53&quot; r=&quot;1&quot;/><circle cx=&quot;53&quot; cy=&quot;7&quot; r=&quot;1&quot;/></g></g></svg>')"></div>
    </div>
    
    <!-- Floating Code Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="floating-code absolute top-20 left-10 text-primary-400 opacity-30 font-mono text-sm transform -rotate-12">
        &lt;div className="portfolio"&gt;
      </div>
      <div class="floating-code absolute top-40 right-20 text-accent-400 opacity-30 font-mono text-sm transform rotate-12 animation-delay-1000">
        const developer = true;
      </div>
      <div class="floating-code absolute bottom-40 left-20 text-primary-400 opacity-30 font-mono text-sm transform rotate-6 animation-delay-2000">
        function buildAwesome() {
      </div>
      <div class="floating-code absolute bottom-20 right-10 text-accent-400 opacity-30 font-mono text-sm transform -rotate-6 animation-delay-3000">
        return &lt;Innovation /&gt;;
      </div>
    </div>
    
    <!-- Particle Animation Container -->
    <canvas id="particles-canvas" class="absolute inset-0 w-full h-full"></canvas>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- Content Section -->
        <div class="text-center lg:text-left space-y-8 relative z-10">
          <div class="space-y-4">
            <!-- Typing Animation Container -->
            <div class="typing-container mb-4">
              <span class="text-green-400 font-mono text-lg">></span>
              <span class="text-white font-mono text-lg ml-2" id="typing-text"></span>
              <span class="typing-cursor">|</span>
            </div>
            
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up font-poppins">
              Hi, I'm 
              <span class="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                {{ hero.title }}
              </span>
            </h1>
            <h2 class="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium animate-fade-in-up animation-delay-300">
              {{ hero.subtitle }}
            </h2>
            <p class="text-lg text-gray-300 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-600">
              {{ hero.description }}
            </p>
          </div>

          <!-- Call-to-Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-900">
            <button 
              @click="scrollToSection('about')"
              class="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 font-poppins"
            >
              {{ hero.ctaText }}
            </button>
            <a 
              href="#work" 
              class="border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-400/25 text-center font-poppins"
            >
              View My Work
            </a>
          </div>

          <!-- Social Media Links -->
          <div class="flex justify-center lg:justify-start space-x-6 pt-8 animate-fade-in-up animation-delay-1200">
            <a 
              :href="envConfig.social.github" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300 hover:glow"
              aria-label="GitHub Profile"
            >
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a 
              :href="envConfig.social.linkedin" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300 hover:glow"
              aria-label="LinkedIn Profile"
            >
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              :href="envConfig.social.instagram" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300 hover:glow"
              aria-label="Instagram Profile"
            >
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Tech Visualization Section -->
        <div class="flex justify-center lg:justify-end relative z-10">
          <div class="relative">
            <!-- Main Code Editor Interface -->
            <div class="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl shadow-2xl border border-primary-400/30 backdrop-blur-md overflow-hidden animate-float">
              
              <!-- Code Editor Header -->
              <div class="flex items-center justify-between p-4 border-b border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
                <div class="flex space-x-2">
                  <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full animate-pulse animation-delay-300"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-600"></div>
                </div>
                <div class="text-xs text-gray-400 font-mono">app.vue</div>
              </div>

              <!-- Code Content -->
              <div class="p-4 font-mono text-sm space-y-2 h-full">
                <div class="text-purple-400">
                  <span class="text-gray-500">1</span>
                  <span class="ml-4">&lt;<span class="text-blue-400">template</span>&gt;</span>
                </div>
                <div class="text-green-400">
                  <span class="text-gray-500">2</span>
                  <span class="ml-6">&lt;<span class="text-blue-400">div</span> <span class="text-yellow-400">class</span>=<span class="text-green-300">"portfolio"</span>&gt;</span>
                </div>
                <div class="text-cyan-400">
                  <span class="text-gray-500">3</span>
                  <span class="ml-8">{{ '<span class="text-orange-400">developer</span>.<span class="text-yellow-400">name</span>' }}</span>
                </div>
                <div class="text-pink-400 typing-line">
                  <span class="text-gray-500">4</span>
                  <span class="ml-8" id="code-typing"></span>
                  <span class="typing-cursor-code">|</span>
                </div>
                <div class="text-gray-600">
                  <span class="text-gray-500">5</span>
                  <span class="ml-6">&lt;/<span class="text-blue-400">div</span>&gt;</span>
                </div>
                <div class="text-gray-600">
                  <span class="text-gray-500">6</span>
                  <span class="ml-4">&lt;/<span class="text-blue-400">template</span>&gt;</span>
                </div>
                
                <!-- Animated cursor indicator -->
                <div class="absolute bottom-4 right-4 flex items-center space-x-1 text-xs text-primary-400">
                  <div class="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                  <span>coding...</span>
                </div>
              </div>
            </div>

            <!-- Floating Tech Icons -->
            <div class="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary-400/30 animate-float-delayed tech-icon-hover cursor-pointer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js" class="w-8 h-8">
            </div>
            
            <div class="absolute -bottom-6 -left-8 w-14 h-14 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-secondary-400/30 animate-float-delayed animation-delay-1000 tech-icon-hover cursor-pointer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" class="w-7 h-7">
            </div>
            
            <div class="absolute top-16 -left-12 w-12 h-12 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-accent-400/30 animate-float-delayed animation-delay-2000 tech-icon-hover cursor-pointer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" class="w-6 h-6">
            </div>
            
            <div class="absolute top-8 right-20 w-10 h-10 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-secondary-400/30 animate-float-delayed animation-delay-1500 tech-icon-hover cursor-pointer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" class="w-5 h-5">
            </div>

            <div class="absolute bottom-20 right-16 w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary-400/30 animate-float-delayed animation-delay-2500 tech-icon-hover cursor-pointer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" class="w-6 h-6">
            </div>

            <!-- Matrix-style falling code -->
            <div class="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div class="matrix-rain opacity-20"></div>
            </div>

            <!-- Glow effects -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl animate-pulse-glow-slow"></div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" @click="scrollToSection('about')">
        <div class="p-2 rounded-full border border-primary-400/50 bg-primary-400/10 backdrop-blur-sm hover:bg-primary-400/20 transition-all duration-300">
          <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useContentStore } from '@/stores/content'
import { useEnvConfig } from '@/composables/useEnvConfig'

// Access content store and environment config
const contentStore = useContentStore()
const envConfig = useEnvConfig()
const hero = computed(() => contentStore.hero)

// Typing animation
const typingTexts = [
  'Full Stack Developer',
  'Problem Solver',
  'Code Enthusiast',
  'Tech Innovator',
  'Software Engineer',
  'Server Specialist'
]

// Code editor typing animation
const codeTexts = [
  'const skills = ["Vue", "React", "Node"];',
  'function buildAmazing() { return true; }',
  'const passion = "coding" + "innovation";',
  'let creativity = Infinity;',
  'const status = "always learning";'
]

let typingInterval
let codeTypingInterval
let currentTextIndex = 0
let currentCharIndex = 0
let isDeleting = false
let codeCurrentTextIndex = 0
let codeCurrentCharIndex = 0
let codeIsDeleting = false

const typeWriter = () => {
  const typingElement = document.getElementById('typing-text')
  if (!typingElement) return

  const currentText = typingTexts[currentTextIndex]
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, currentCharIndex - 1)
    currentCharIndex--
  } else {
    typingElement.textContent = currentText.substring(0, currentCharIndex + 1)
    currentCharIndex++
  }

  let typingSpeed = 100

  if (isDeleting) {
    typingSpeed /= 2
  }

  if (!isDeleting && currentCharIndex === currentText.length) {
    typingSpeed = 1000
    isDeleting = true
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false
    currentTextIndex = (currentTextIndex + 1) % typingTexts.length
    typingSpeed = 500
  }

  typingInterval = setTimeout(typeWriter, typingSpeed)
}

const codeTypeWriter = () => {
  const codeTypingElement = document.getElementById('code-typing')
  if (!codeTypingElement) return

  const currentCodeText = codeTexts[codeCurrentTextIndex]
  
  if (codeIsDeleting) {
    codeTypingElement.textContent = currentCodeText.substring(0, codeCurrentCharIndex - 1)
    codeCurrentCharIndex--
  } else {
    codeTypingElement.textContent = currentCodeText.substring(0, codeCurrentCharIndex + 1)
    codeCurrentCharIndex++
  }

  let typingSpeed = 80

  if (codeIsDeleting) {
    typingSpeed /= 2
  }

  if (!codeIsDeleting && codeCurrentCharIndex === currentCodeText.length) {
    typingSpeed = 2000
    codeIsDeleting = true
  } else if (codeIsDeleting && codeCurrentCharIndex === 0) {
    codeIsDeleting = false
    codeCurrentTextIndex = (codeCurrentTextIndex + 1) % codeTexts.length
    typingSpeed = 800
  }

  codeTypingInterval = setTimeout(codeTypeWriter, typingSpeed)
}

// Particle animation
const initParticles = () => {
  const canvas = document.getElementById('particles-canvas')
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles = []

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 2 + 1
      this.speedX = Math.random() * 0.5 - 0.25
      this.speedY = Math.random() * 0.5 - 0.25
      this.opacity = Math.random() * 0.5 + 0.2
    }

    update() {
      this.x += this.speedX
      this.y += this.speedY

      if (this.x > canvas.width) this.x = 0
      if (this.x < 0) this.x = canvas.width
      if (this.y > canvas.height) this.y = 0
      if (this.y < 0) this.y = canvas.height
    }

    draw() {
      ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  for (let i = 0; i < 50; i++) {
    particles.push(new Particle())
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach(particle => {
      particle.update()
      particle.draw()
    })

    requestAnimationFrame(animate)
  }

  animate()
}

onMounted(() => {
  setTimeout(typeWriter, 1000)
  setTimeout(codeTypeWriter, 2000)
  setTimeout(initParticles, 500)
})

onUnmounted(() => {
  if (typingInterval) {
    clearTimeout(typingInterval)
  }
  if (codeTypingInterval) {
    clearTimeout(codeTypingInterval)
  }
})

/**
 * Smooth scroll to a specific section
 * @param {string} sectionId - The ID of the target section
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
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

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
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

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes floating-code {
  0%, 100% {
    transform: translateY(0px) rotate(var(--rotation));
  }
  50% {
    transform: translateY(-10px) rotate(var(--rotation));
  }
}

/* Animation Classes */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 4s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.animate-pulse-glow-slow {
  animation: pulse-glow 4s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 15s linear infinite;
}

.floating-code {
  animation: floating-code 4s ease-in-out infinite;
  --rotation: 0deg;
}

/* Animation Delays */
.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-900 {
  animation-delay: 900ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}

.animation-delay-1200 {
  animation-delay: 1200ms;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}

.animation-delay-3000 {
  animation-delay: 3000ms;
}

/* Typing Animation */
.typing-cursor {
  display: inline-block;
  animation: blink 1s infinite;
  font-weight: normal;
  color: #22d3ee;
}

.typing-cursor-code {
  display: inline-block;
  animation: blink 1s infinite;
  font-weight: normal;
  color: #ef767a;
  font-family: 'Courier New', monospace;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* Matrix Rain Effect */
.matrix-rain {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.matrix-rain::before {
  content: '010110100101101001011010010110100101101001011010010110100101101001';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 200%;
  color: #00ff41;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  line-height: 1.2;
  white-space: pre-wrap;
  word-break: break-all;
  animation: matrix-fall 10s linear infinite;
  opacity: 0.3;
}

@keyframes matrix-fall {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

/* Tech Icon Hover Effects */
.tech-icon-hover {
  transition: all 0.3s ease;
}

.tech-icon-hover:hover {
  transform: scale(1.2) rotate(5deg);
  filter: brightness(1.2) drop-shadow(0 0 10px rgba(239, 118, 122, 0.5));
}

/* Hover Effects */
.hover\:glow:hover {
  filter: drop-shadow(0 0 8px currentColor);
  transition: filter 0.3s ease;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .floating-code {
    display: none;
  }
}

@media (max-width: 768px) {
  #particles-canvas {
    display: none;
  }
}

/* Background Pattern Animation */
.bg-pattern {
  background-size: 60px 60px;
  animation: move-pattern 20s linear infinite;
}

@keyframes move-pattern {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 60px;
  }
}
</style>