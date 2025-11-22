<script setup>
import whatsappIcon from '~/assets/images/icons/contact-us-whatsapp.svg'
import facebookIcon from '~/assets/images/icons/contact-us-facebook.svg'
import instagramIcon from '~/assets/images/icons/contact-us-instagram.svg'
import contactBg from '~/assets/images/contact-us-page/contact-us-bg.svg'

const contactContent = ref({
  heading: "Ready to Launch? Let's Talk!",
  description: 'Contact us today to claim your Black Friday discount. Limited slots available!',
  contact_methods: [
    {
      title: 'Chat on WhatsApp',
      highlight: '073 723 1312',
      description: 'Quick Responses & Instant Support',
      icon_path: '~/assets/images/icons/contact-us-whatsapp.svg'
    },
    {
      title: 'Find Us On Facebook',
      highlight: '@pixelcrayonmedia',
      description: 'Follow for Updates & Portfolio',
      icon_path: '~/assets/images/icons/contact-us-facebook.svg'
    },
    {
      title: 'Follow On Instagram',
      highlight: '@pixel_crayon_media',
      description: 'See Our Latest Work & Inspiration',
      icon_path: '~/assets/images/icons/contact-us-instagram.svg'
    }
  ],
  cta_text: 'Start Now'
})

// Icon mapping for dynamic loading
const iconMap = {
  '~/assets/images/icons/contact-us-whatsapp.svg': whatsappIcon,
  '~/assets/images/icons/contact-us-facebook.svg': facebookIcon,
  '~/assets/images/icons/contact-us-instagram.svg': instagramIcon
}

const getIcon = (iconPath) => {
  return iconMap[iconPath] || iconPath
}

const formatDescription = (text) => text.replace(/\s*&\s*/, '<br />& ')

onMounted(async () => {
  try {
    const data = await $fetch('/api/content/contact')
    if (data) {
      contactContent.value = { ...contactContent.value, ...data }
    }
  } catch (error) {
    console.error('Error loading contact content:', error)
    // Use defaults if fetch fails
  }
})
</script>

<template>
  <section
    id="contact"
    aria-labelledby="contact-heading"
    class="relative isolate overflow-hidden py-24 px-6 sm:px-10"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 -z-10">
      <img
        :src="contactBg"
        alt=""
        class="w-full h-full object-cover"
        aria-hidden="true"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-[#120023]/80 via-[#1a0034]/70 to-[#05000c]/90"
        aria-hidden="true"
      />
    </div>

    <div class="relative max-w-6xl mx-auto text-center text-white">
      <h2 id="contact-heading" class="text-3xl md:text-4xl font-extrabold mb-3">
        {{ contactContent.heading }}
      </h2>
      <p class="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
        {{ contactContent.description }}
      </p>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="(method, index) in contactContent.contact_methods"
          :key="index"
          class="bg-[#FFFAFA] rounded-[10px] shadow-[0_0_25px_rgba(255,139,16,0.25)] px-[21px] py-10 flex flex-col items-center text-center w-[300px] h-[510px] mx-auto"
        >
          <span class="inline-flex items-center justify-center w-[100px] h-[100px] mb-6">
            <img :src="getIcon(method.icon_path)" :alt="method.title" class="w-[100px] h-[100px] object-contain" />
          </span>
          <h3 class="text-xl font-bold text-purple-900">
            {{ method.title }}
          </h3>
          <p class="mt-8 text-lg font-semibold text-orange-500">
            {{ method.highlight }}
          </p>
          <p class="mt-12 text-sm text-gray-600" v-html="formatDescription(method.description)" />
        </article>
      </div>

      <button
        type="button"
        class="mt-12 inline-flex items-center justify-center px-10 py-4 rounded-[16px] bg-[#FF8B10] text-white font-semibold text-lg shadow-[0_0_25px_rgba(255,139,16,0.25)] transition hover:bg-[#ff9c33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
      >
        {{ contactContent.cta_text }}
      </button>
    </div>
  </section>
</template>

