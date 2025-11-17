<script setup>
import NavBar from '~/components/NavBar.vue'
import Hero from '~/components/Hero.vue'
import Packages from '~/components/Packages.vue'
import Services from '~/components/Services.vue'
import About from '~/components/About.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="~/assets/images/main-page/splash-page-bg.jpg"
        alt="Black Friday Background"
        class="w-full h-full object-cover opacity-50"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-purple-900/60 to-slate-900/80"></div>
    </div>

    <!-- Header Navigation (moved to component) -->
    <NavBar />

    <!-- Main Hero Content (moved to component) -->
    <Hero />

    <!-- Packages Section -->
    <Packages />

    <!-- Services Section -->
    <Services />

    <!-- About Section -->
    <About />
  </div>
</template>

<!-- Styles moved into `Hero.vue` -->
