<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ExternalLink, Copy, Check } from 'lucide-vue-next'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'

const email = 'contact@nooovex.com'
const copied = ref(false)
const isLoaded = ref(false)
let lenis = null

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

onMounted(() => {
  // Wait for fonts to load
  document.fonts.ready.then(() => {
    setTimeout(() => {
      isLoaded.value = true
      
      // GSAP Intro Animations - Optimized for smoother feel
      gsap.from('.hero-title', {
        duration: 2,
        y: 50,
        opacity: 0,
        filter: 'blur(10px)',
        ease: 'expo.out',
        delay: 0.3,
        clearProps: 'filter'
      })
      
      gsap.from('.slogan-word', {
        duration: 1.5,
        y: 20,
        opacity: 0,
        filter: 'blur(5px)',
        stagger: 0.08,
        ease: 'power2.out',
        delay: 0.8,
        clearProps: 'filter'
      })
      
      gsap.from('.hero-links', {
        duration: 1.5,
        y: 15,
        opacity: 0,
        filter: 'blur(5px)',
        ease: 'power2.out',
        delay: 1.4,
        clearProps: 'filter'
      })
    }, 100)
  })
  
  // Initialize Lenis smooth scroll
  lenis = new Lenis({
    duration: 1.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 2,
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})

onBeforeUnmount(() => {
  if (lenis) {
    lenis.destroy()
  }
})
</script>

<template>
  <!-- Preloader -->
  <div 
    v-if="!isLoaded" 
    class="fixed inset-0 bg-[#030303] z-[9999] flex items-center justify-center"
  >
    <div class="animate-pulse text-primary text-4xl md:text-6xl font-bold tracking-tighter">
      NOOOVEX
    </div>
  </div>

  <div class="relative w-full min-h-screen bg-[#030303] text-primary overflow-x-hidden font-sans selection:bg-white/10 selection:text-white">
    
    <!-- Noise Overlay -->
    <div class="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
         style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulance type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');">
    </div>

    <!-- Hero Section -->
    <section class="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
      <h1 class="hero-title font-bold tracking-tighter mb-8 text-center leading-none" style="font-size: clamp(3rem, 15vw, 12rem);">
        NOOOVEX
      </h1>

      <div class="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[10px] md:text-xs tracking-[0.3em] text-secondary/70 font-light uppercase mb-16">
        <span class="slogan-word">FOR FREE</span>
        <span class="slogan-word text-white/20">/</span>
        <span class="slogan-word">FOR DREAM</span>
        <span class="slogan-word text-white/20">/</span>
        <span class="slogan-word">FOR LOVE</span>
        <span class="slogan-word text-white/20">/</span>
        <span class="slogan-word">FOR HIPHOP</span>
      </div>

      <div class="hero-links flex flex-col md:flex-row gap-8 items-center">
        <a href="https://music.163.com/#/artist?id=96100002" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-2 px-4 py-2 border-b border-white/10 hover:border-white/50 transition-all duration-300 text-secondary hover:text-white hover:translate-x-1">
          <span class="text-xs tracking-widest">NETEASE CLOUD MUSIC</span>
          <ExternalLink class="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>

        <button @click="copyEmail" class="group flex items-center gap-2 px-4 py-2 border-b border-white/10 hover:border-white/50 transition-all duration-300 text-secondary hover:text-white hover:translate-x-1">
          <span class="text-xs tracking-widest">
            {{ copied ? 'COPIED' : 'CONTACT' }}
          </span>
          <component :is="copied ? Check : Copy" class="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative z-10 py-12 text-center">
      <p class="text-[10px] text-secondary/30 tracking-widest uppercase">
        &copy; 2025 NOOOVEX. ALL RIGHTS RESERVED.
      </p>
    </footer>

  </div>
</template>

<style>
/* Global styles */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
