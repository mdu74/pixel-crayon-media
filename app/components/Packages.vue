<script setup>
const packages = ref([
  {
    package_type: 'quick_start',
    title: 'The Quick Start',
    subtitle: 'Entry-level, Basic Design, Quick Turnaround',
    price: 'R950',
    price_label: 'one-time',
    features: ['Simple, professional online card', 'Basic design template', 'Mobile responsive', 'Quick 3-5 day turnaround'],
    button_text: 'Get Quick for R950',
    is_popular: false
  },
  {
    package_type: 'standard_boost',
    title: 'The Standard Boost',
    subtitle: 'Custom Design, More Features',
    price: 'R1500',
    price_label: 'one-time',
    features: ['Unique custom design', 'Multiple pages', 'Contact forms', 'Social media integration', 'Perfect for small businesses'],
    button_text: 'Get Standard for R1500',
    is_popular: true
  },
  {
    package_type: 'premium_pro',
    title: 'The Premium Pro',
    subtitle: 'Advanced Features, Full Strategy Consultation',
    price: 'R2999',
    price_label: 'one-time',
    features: ['Everything in Standard', 'Advanced features (booking, e-commerce)', 'Full strategy consultation', 'Expert guidance for business goals', 'High-performing website'],
    button_text: 'Get Premium for R2999',
    is_popular: false
  }
])

onMounted(async () => {
  try {
    const data = await $fetch('/api/content/packages')
    if (data && data.length > 0) {
      packages.value = data
    }
  } catch (error) {
    console.error('Error loading packages content:', error)
    // Use defaults if fetch fails
  }
})
</script>

<template>
  <section id="packages" class="relative py-20 bg-white">
    <!-- Left/Right decorative iMac images -->
    <img src="../assets/images/packages-page/imac-left.png" alt="iMac left" class="hidden lg:block absolute -left-18 bottom-150 w-112 transform -translate-y-0 z-10 pointer-events-none" />
    <img src="../assets/images/packages-page/imac-right.png" alt="iMac right" class="hidden lg:block absolute -right-28 bottom-0 w-112 transform translate-y-1 z-10 pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">Choose Your Perfect Launchpad</h2>
        <p class="mt-3 text-gray-600">Three simple packages designed to fit every need and budget.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <!-- Left Card -->
        <div v-if="packages[0]" class="bg-white p-8 relative border border-purple-900 rounded-[10px] shadow-card min-h-[510px] flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
          <h3 class="text-xl font-bold text-gray-900">{{ packages[0].title }}</h3>
          <p class="text-sm text-gray-500 mt-2">{{ packages[0].subtitle }}</p>
          <hr class="bg-[#40005C] mt-6" />
          <div class="mt-6 mb-6">
            <div class="text-3xl font-extrabold text-purple-700">{{ packages[0].price }} <span class="text-sm font-medium text-gray-500">{{ packages[0].price_label }}</span></div>
          </div>
          <ul class="space-y-3">
            <li v-for="(feature, index) in packages[0].features" :key="index" class="flex items-start gap-3">
              <img src="~/assets/images/icons/check.svg" alt="check" class="w-5 h-5 mt-1" />
              <span class="text-gray-700">{{ feature }}</span>
            </li>
          </ul>

          <div class="mt-auto flex justify-center">
            <button class="px-6 py-3 border border-orange-500 text-orange-500 font-semibold bg-white hover:bg-gray-50 transition rounded-[10px] shadow-button-orange">{{ packages[0].button_text }}</button>
          </div>
        </div>

        <!-- Center Card (Most Popular) -->
        <div v-if="packages[1]" class="relative z-0 group transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 cursor-pointer">
          <div v-if="packages[1].is_popular" class="absolute -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out group-hover:-translate-y-1">
            <div class="bg-purple-800 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</div>
          </div>
          <div class="bg-orange-500 rounded-lg shadow-2xl p-8 text-white flex flex-col items-start min-h-[600px] transition-all duration-300 ease-in-out group-hover:shadow-2xl">
            <h3 class="text-2xl font-extrabold text-left">{{ packages[1].title }}</h3>
            <p class="text-sm mt-2 text-left">{{ packages[1].subtitle }}</p>
            <div class="mt-6 mb-6">
              <div class="text-4xl font-extrabold text-left">{{ packages[1].price }} <span class="text-base font-medium">{{ packages[1].price_label }}</span></div>
            </div>

            <ul class="space-y-3 text-left w-full max-w-xs">
              <li v-for="(feature, index) in packages[1].features" :key="index" class="flex items-start gap-3">
                <img src="~/assets/images/icons/check.svg" alt="check" class="w-5 h-5 mt-1" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <div class="mt-auto w-full flex justify-center">
              <button class="px-6 py-3 bg-[#40005C] text-white font-semibold transition rounded-[10px] shadow-button-purple hover:brightness-95">{{ packages[1].button_text }}</button>
            </div>
          </div>
        </div>

        <!-- Right Card -->
        <div v-if="packages[2]" class="bg-white p-8 relative border border-purple-900 rounded-[10px] shadow-card min-h-[510px] flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
          <h3 class="text-xl font-bold text-gray-900">{{ packages[2].title }}</h3>
          <p class="text-sm text-gray-500 mt-2">{{ packages[2].subtitle }}</p>
          <hr class="bg-[#40005C] mt-6" />
          <div class="mt-6 mb-6">
            <div class="text-3xl font-extrabold text-purple-700">{{ packages[2].price }} <span class="text-sm font-medium text-gray-500">{{ packages[2].price_label }}</span></div>
          </div>
          <ul class="space-y-3">
            <li v-for="(feature, index) in packages[2].features" :key="index" class="flex items-start gap-3">
              <img src="~/assets/images/icons/check.svg" alt="check" class="w-5 h-5 mt-1" />
              <span class="text-gray-700">{{ feature }}</span>
            </li>
          </ul>

          <div class="mt-auto flex justify-center">
            <button class="px-6 py-3 border border-orange-500 text-orange-500 font-semibold bg-white hover:bg-gray-50 transition rounded-[10px] shadow-button-orange">{{ packages[2].button_text }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Custom shadow utilities */
.shadow-card { box-shadow: 0 0 25px 0 rgba(10, 10, 10, 0.25); }
.shadow-button-orange { box-shadow: 0 0 25px 0 rgba(255, 139, 16, 0.25); }
.shadow-button-purple { box-shadow: 0 0 25px 0 rgba(64, 0, 92, 0.25); }
</style>
