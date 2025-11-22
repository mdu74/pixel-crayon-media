<script setup>
const services = ref([
  {
    card_type: 'business_card',
    title: 'Your Online Business Card',
    package_name: 'Quick Start (R950):',
    package_price: 'R950',
    description: 'A clean, basic website built fast. Great for getting your name out there without the fuss. Perfect for freelancers, consultants, and small service providers.',
    features: ['Fast turnaround', 'Professional look', 'Mobile friendly']
  },
  {
    card_type: 'custom_showcase',
    title: 'Your Custom Showcase',
    package_name: 'Standard Boost (R1500):',
    package_price: 'R1500',
    description: 'A unique design that matches your brand. Includes more pages and features to impress your visitors. Ideal for small businesses needing a unique look and more functionality.',
    features: ['Custom design', 'Multiple pages', 'Contact forms']
  },
  {
    card_type: 'strategy_partner',
    title: 'Your Full Strategy Partner',
    package_name: 'Premium Pro (R2999):',
    package_price: 'R2999',
    description: 'Everything you need to dominate online. Advanced features, full strategy consultation, and expert guidance to turn your website into a business growth engine.',
    features: ['Advanced features', 'Strategy consultation', 'Expert guidance']
  }
])

onMounted(async () => {
  try {
    const data = await $fetch('/api/content/services')
    if (data && data.length > 0) {
      services.value = data
    }
  } catch (error) {
    console.error('Error loading services content:', error)
    // Use defaults if fetch fails
  }
})
</script>

<template>
  <section id="services" class="relative py-20 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="~/assets/images/services/services-bg-01.jpg"
        alt="Services Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-purple-900/70 to-slate-900/80"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Heading Section -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          What You Get: Simple, Clear, and Effective
        </h2>
        <p class="text-lg md:text-xl text-white">
          Each package is designed with your success in mind.
        </p>
      </div>

      <!-- Three Package Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white rounded-[10px] p-8 shadow-lg flex flex-col"
        >
          <h3 class="text-xl font-bold text-purple-700 mb-4">{{ service.title }}</h3>
          <div class="text-lg font-bold text-gray-900 mb-3">{{ service.package_name }}</div>
          <p class="text-gray-700 mb-6 leading-relaxed">
            {{ service.description }}
          </p>
          <ul class="space-y-2 mt-auto">
            <li v-for="(feature, featureIndex) in service.features" :key="featureIndex" class="flex items-start gap-2">
              <span class="text-orange-500 font-bold">•</span>
              <span class="text-orange-500">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
