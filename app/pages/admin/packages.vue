<script setup>
definePageMeta({
  middleware: 'auth'
})

const { supabase } = useSupabase()
const loading = ref(false)
const saving = ref(false)
const message = ref({ type: '', text: '' })

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
  loading.value = true
  try {
    const data = await $fetch('/api/content/packages')
    if (data && data.length > 0) {
      packages.value = data
    }
  } catch (error) {
    console.error('Error loading packages content:', error)
  } finally {
    loading.value = false
  }
})

const addFeature = (pkgIndex) => {
  packages.value[pkgIndex].features.push('')
}

const removeFeature = (pkgIndex, featureIndex) => {
  packages.value[pkgIndex].features.splice(featureIndex, 1)
}

const handleSave = async () => {
  saving.value = true
  message.value = { type: '', text: '' }

  try {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) throw new Error('Not authenticated')

    const response = await $fetch('/api/content/packages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session.access_token}`
      },
      body: packages.value
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
        <h1 class="text-3xl font-bold text-white">Edit Packages Section</h1>
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
            v-for="(pkg, pkgIndex) in packages"
            :key="pkgIndex"
            class="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
          >
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-white">{{ pkg.title }}</h2>
              <label class="flex items-center gap-2 text-gray-300">
                <input
                  v-model="pkg.is_popular"
                  type="checkbox"
                  class="w-5 h-5"
                />
                Most Popular
              </label>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  v-model="pkg.title"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Subtitle</label>
                <input
                  v-model="pkg.subtitle"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Price</label>
                <input
                  v-model="pkg.price"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Price Label</label>
                <input
                  v-model="pkg.price_label"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Button Text</label>
                <input
                  v-model="pkg.button_text"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-300 mb-2">Features</label>
              <div
                v-for="(feature, featureIndex) in pkg.features"
                :key="featureIndex"
                class="flex gap-2 mb-2"
              >
                <input
                  v-model="pkg.features[featureIndex]"
                  type="text"
                  required
                  class="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  @click="removeFeature(pkgIndex, featureIndex)"
                  class="px-4 py-3 bg-red-500/20 border border-red-500 text-red-200 rounded-lg hover:bg-red-500/30"
                >
                  Remove
                </button>
              </div>
              <button
                type="button"
                @click="addFeature(pkgIndex)"
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

