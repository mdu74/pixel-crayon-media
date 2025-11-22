<script setup>
definePageMeta({
  middleware: 'auth'
})

const { supabase } = useSupabase()
const loading = ref(false)
const saving = ref(false)
const message = ref({ type: '', text: '' })

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
  loading.value = true
  try {
    const data = await $fetch('/api/content/services')
    if (data && data.length > 0) {
      services.value = data
    }
  } catch (error) {
    console.error('Error loading services content:', error)
  } finally {
    loading.value = false
  }
})

const addFeature = (serviceIndex) => {
  services.value[serviceIndex].features.push('')
}

const removeFeature = (serviceIndex, featureIndex) => {
  services.value[serviceIndex].features.splice(featureIndex, 1)
}

const handleSave = async () => {
  saving.value = true
  message.value = { type: '', text: '' }

  try {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) throw new Error('Not authenticated')

    const response = await $fetch('/api/content/services', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session.access_token}`
      },
      body: services.value
    })

    message.value = { type: 'success', text: 'Content saved successfully!' }
    setTimeout(() => {
      message.value = { type: '', text: '' }
    }, 3000)
  } catch (error) {
    message.value = { type: 'error', text: error.message || 'Failed to save content' }
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex items-center gap-4 mb-8">
        <NuxtLink to="/admin" class="text-orange-400 hover:text-orange-300">← Back</NuxtLink>
        <h1 class="text-3xl font-bold text-white">Edit Services Section</h1>
      </div>

      <div v-if="loading" class="text-white text-center py-12">Loading...</div>

      <div v-else>
        <div v-if="message.text" :class="[
          'mb-6 p-4 rounded-lg',
          message.type === 'success' ? 'bg-green-500/20 border border-green-500 text-green-200' : 'bg-red-500/20 border border-red-500 text-red-200'
        ]">
          {{ message.text }}
        </div>

        <form @submit.prevent="handleSave" class="space-y-8">
          <div
            v-for="(service, serviceIndex) in services"
            :key="serviceIndex"
            class="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
          >
            <h2 class="text-2xl font-bold text-white mb-6">{{ service.title }}</h2>

            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  v-model="service.title"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Package Name</label>
                <input
                  v-model="service.package_name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Package Price</label>
                <input
                  v-model="service.package_price"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-300 mb-2">Description</label>
              <textarea
                v-model="service.description"
                rows="4"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-300 mb-2">Features</label>
              <div
                v-for="(feature, featureIndex) in service.features"
                :key="featureIndex"
                class="flex gap-2 mb-2"
              >
                <input
                  v-model="service.features[featureIndex]"
                  type="text"
                  required
                  class="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  @click="removeFeature(serviceIndex, featureIndex)"
                  class="px-4 py-3 bg-red-500/20 border border-red-500 text-red-200 rounded-lg hover:bg-red-500/30"
                >
                  Remove
                </button>
              </div>
              <button
                type="button"
                @click="addFeature(serviceIndex)"
                class="mt-2 px-4 py-2 bg-green-500/20 border border-green-500 text-green-200 rounded-lg hover:bg-green-500/30"
              >
                + Add Feature
              </button>
            </div>
          </div>

          <button
            type="submit"
            :disabled="saving"
            class="w-full px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all disabled:opacity-50"
          >
            {{ saving ? 'Saving...' : 'Save All Changes' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

