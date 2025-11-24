<script setup>
import footerFacebook from '~/assets/images/icons/footer-facebook.svg'
import footerLinkedIn from '~/assets/images/icons/footer-linkedin.svg'
import footerInstagram from '~/assets/images/icons/footer-instagram.svg'
import footerWhatsApp from '~/assets/images/icons/footer-whatsapp.svg'

const socialLinks = [
  { name: 'Facebook', icon: footerFacebook, href: 'https://www.facebook.com/PixieCrayon/' },
  { name: 'LinkedIn', icon: footerLinkedIn, href: 'https://www.linkedin.com/company/108773957/admin/dashboard/' },
  { name: 'Instagram', icon: footerInstagram, href: 'https://www.instagram.com/pixel_crayon_media/' },
  { name: 'WhatsApp', icon: footerWhatsApp, href: 'https://wa.me/0737231312' },
]

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
}
</script>

<template>
  <footer class="bg-[#FF8B10] text-white py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-12 md:grid-cols-3">
        <div>
          <h3 class="text-2xl font-extrabold">About Pixel Crayon Media</h3>
          <p class="mt-6 text-lg leading-relaxed max-w-[320px]">
            We create beautiful, functional websites that help your business succeed online.
          </p>
        </div>

        <div>
          <h3 class="text-2xl font-extrabold">Quick Links</h3>
          <div class="mt-6 space-y-2 text-lg">
            <a href="#packages" @click="(e) => scrollToSection(e, '#packages')" class="block hover:underline">Packages</a>
            <a href="#services" @click="(e) => scrollToSection(e, '#services')" class="block hover:underline">Services</a>
            <a href="#about" @click="(e) => scrollToSection(e, '#about')" class="block hover:underline">About</a>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-extrabold">Connect With Us</h3>
          <div class="mt-6 flex items-center gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 transition"
              :aria-label="social.name"
            >
              <img :src="social.icon" :alt="social.name" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-white/40 pt-6 text-center space-y-2 text-lg">
        <p>Black Friday deals are valid until November 30th. Limited slots available.</p>
        <p>© {{ new Date().getFullYear() }} Pixel Crayon Media. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

