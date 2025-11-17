<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const scrollToSection = (event, sectionId) => {
  event.preventDefault()
  const element = document.querySelector(sectionId)
  if (element) {
    const headerHeight = 80 // Approximate height of fixed navbar
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="relative">
    <header class="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-900/70 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div class="flex-shrink-0">
          <img src="~/assets/images/logo/White-PIXEL-CRAYON-MEDIA-Logo.png" alt="Pixel Crayon Media" class="h-10" />
        </div>
        <nav class="hidden md:flex gap-8 items-center">
          <a href="#packages" @click="(e) => scrollToSection(e, '#packages')" class="text-gray-200 hover:text-white transition text-sm font-medium">Packages</a>
          <a href="#services" @click="(e) => scrollToSection(e, '#services')" class="text-gray-200 hover:text-white transition text-sm font-medium">Services</a>
          <a href="#about" @click="(e) => scrollToSection(e, '#about')" class="text-gray-200 hover:text-white transition text-sm font-medium">About</a>
          <a href="#contact" @click="(e) => scrollToSection(e, '#contact')" class="text-gray-200 hover:text-white transition text-sm font-medium">Contact</a>
        </nav>
        <div class="flex gap-4 items-center">
          <a href="#" class="hidden sm:inline-block text-gray-200 hover:text-white transition">
            <img src="~/assets/images/icons/facebook.svg" alt="Facebook" class="h-5 w-5" />
          </a>
          <a href="#" class="hidden sm:inline-block text-gray-200 hover:text-white transition">
            <img src="~/assets/images/icons/linkedin.svg" alt="LinkedIn" class="h-5 w-5" />
          </a>
          <a href="#" class="hidden sm:inline-block text-gray-200 hover:text-white transition">
            <img src="~/assets/images/icons/instagram.svg" alt="Instagram" class="h-5 w-5" />
          </a>
          <a href="#" class="hidden sm:inline-block text-gray-200 hover:text-white transition">
            <img src="~/assets/images/icons/whatsapp.svg" alt="WhatsApp" class="h-5 w-5" />
          </a>
          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white transition"
          >
            <svg
              v-if="!mobileMenuOpen"
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-white/10"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#packages"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-slate-700 transition"
            @click="(e) => scrollToSection(e, '#packages')"
          >
            Packages
          </a>
          <a
            href="#services"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-slate-700 transition"
            @click="(e) => scrollToSection(e, '#services')"
          >
            Services
          </a>
          <a
            href="#about"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-slate-700 transition"
            @click="(e) => scrollToSection(e, '#about')"
          >
            About
          </a>
          <a
            href="#contact"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-slate-700 transition"
            @click="(e) => scrollToSection(e, '#contact')"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
    <div class="h-20 md:h-24" aria-hidden="true"></div>
  </div>
</template>
