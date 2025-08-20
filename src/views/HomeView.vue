<script setup>
// Import all section components
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import WorkSection from '@/components/sections/WorkSection.vue'
import BlogsSection from '@/components/sections/BlogsSection.vue'
</script>

<template>
  <!-- Main Portfolio Home Page -->
  <div class="min-h-screen">
    <!-- Header Navigation -->
    <AppHeader />

    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Skills Section -->
    <!-- <SkillsSection /> -->

    <!-- Work/Projects Section -->
    <WorkSection />

    <!-- Blog Section -->
    <BlogsSection />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style scoped>
/* Smooth scrolling for the page */
html {
  scroll-behavior: smooth;
}

/* Section spacing and transitions */
section {
  scroll-margin-top: 80px; /* Account for fixed header */
}

/* Fade-in animation for sections */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

section {
  animation: fadeInUp 0.6s ease-out;
}
</style>
