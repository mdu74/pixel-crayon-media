<script setup>
const aboutContent = ref({
  heading: 'Who Are We?',
  intro_paragraph: 'Pixel Crayon Media is a dynamic, 100% black-owned visual communications company dedicated to transforming ideas into compelling visual experiences. We specialize in creating innovative design solutions that help businesses communicate effectively, build strong brand identities, and connect meaningfully with their audiences.',
  services: [
    {
      category: 'Web Design',
      icon_path: '~/assets/images/icons/web-design-icon.png',
      items: ['Responsive website design', 'E-commerce solutions', 'UX and UI design', 'Website maintenance']
    },
    {
      category: 'Graphic Design',
      icon_path: '~/assets/images/icons/graphic-design-icon.png',
      items: ['Marketing collateral design', 'Publication design', 'Packaging design', 'Social media graphics']
    },
    {
      category: 'Animation',
      icon_path: '~/assets/images/icons/animation-icon.png',
      items: ['2D and 3D animation', 'Character animation', 'Product visualization', 'Animated presentations']
    },
    {
      category: 'Skills Training',
      icon_path: '~/assets/images/icons/skills-training-icon.png',
      items: ['Design software training', 'Digital marketing workshops', 'Creative skills development', 'Professional development programs']
    }
  ]
})

onMounted(async () => {
  try {
    const data = await $fetch('/api/content/about')
    if (data) {
      aboutContent.value = { ...aboutContent.value, ...data }
    }
  } catch (error) {
    console.error('Error loading about content:', error)
    // Use defaults if fetch fails
  }
})
</script>

<template>
  <section id="about" class="relative py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Column: Content -->
        <div class="space-y-8">
          <!-- Heading -->
          <h2 class="text-3xl md:text-4xl font-extrabold text-purple-700">{{ aboutContent.heading }}</h2>
          
          <!-- Introductory Paragraph -->
          <p class="text-gray-700 leading-relaxed text-base md:text-lg">
            {{ aboutContent.intro_paragraph }}
          </p>

          <!-- Service Categories Grid (2x2) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div
              v-for="(service, index) in aboutContent.services"
              :key="index"
              class="space-y-3"
            >
              <div class="flex items-center gap-3">
                <img :src="service.icon_path.replace('~/', '/')" :alt="service.category" class="w-12 h-12" />
                <h3 class="text-lg font-bold text-purple-700">{{ service.category }}</h3>
              </div>
              <ul class="space-y-2 pl-16">
                <li v-for="(item, itemIndex) in service.items" :key="itemIndex" class="text-gray-700">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Right Column: Image and Logos -->
        <div class="relative flex flex-col h-full">
          <!-- Main Image -->
          <div class="mb-8">
            <img 
              src="../assets/images/about-page/main-content.png" 
              alt="Pixel Crayon Media Team" 
              class="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>

