<script setup>
definePageMeta({
  middleware: 'auth'
})

const { supabase } = useSupabase()
const loading = ref(false)
const saving = ref(false)
const message = ref({ type: '', text: '' })

const form = ref({
  countdown_target_date: '',
  primary_text: 'BLACK FRIDAY',
  title_text: 'QUICK LAUNCH\nSPECIAL!',
  subtitle_text: 'launch your online presence or upgrade your existing site with our\nlimited-time, budget-friendly packages.\nsimple, fast, and professional.',
  cta_primary_text: 'Claim Deal Now',
  cta_secondary_text: 'Learn More'
})

onMounted(async () => {
  loading.value = true
  try {
    const { data } = await $fetch('/api/content/hero')
    if (data) {
      form.value = { ...form.value, ...data }
    }
  } catch (error) {
    console.error('Error loading hero content:', error)
  } finally {
    loading.value = false
  }
})

const handleSave = async () => {
  saving.value = true
  message.value = { type: '', text: '' }

  try {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) throw new Error('Not authenticated')

    const response = await $fetch('/api/content/hero', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session.access_token}`
      },
      body: form.value
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
    <div class="max-w-4xl mx-auto px-6 py-8">
      <div class="flex items-center gap-4 mb-8">
        <NuxtLink to="/admin" class="text-orange-400 hover:text-orange-300">← Back</NuxtLink>
        <h1 class="text-3xl font-bold text-white">Edit Hero Section</h1>
      </div>

      <div v-if="loading" class="text-white text-center py-12">Loading...</div>

      <div v-else class="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
        <div v-if="message.text" :class="[
          'mb-6 p-4 rounded-lg',
          message.type === 'success' ? 'bg-green-500/20 border border-green-500 text-green-200' : 'bg-red-500/20 border border-red-500 text-red-200'
        ]">
          {{ message.text }}
        </div>

        <form @submit.prevent="handleSave" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">
              Countdown Target Date
            </label>
            <input
              v-model="form.countdown_target_date"
              type="datetime-local"
              required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">
              Primary Text (Large Heading)
            </label>
            <input
              v-model="form.primary_text"
              type="text"
              required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">
              Title Text (Main Heading)
            </label>
            <textarea
              v-model="form.title_text"
              rows="3"
              required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <p class="text-xs text-gray-400 mt-1">Use \n for line breaks</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">
              Subtitle Text
            </label>
            <textarea
              v-model="form.subtitle_text"
              rows="4"
              required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <p class="text-xs text-gray-400 mt-1">Use \n for line breaks</p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                Primary CTA Button Text
              </label>
              <input
                v-model="form.cta_primary_text"
                type="text"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                Secondary CTA Button Text
              </label>
              <input
                v-model="form.cta_secondary_text"
                type="text"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <button
            type="submit"
            :disabled="saving"
            class="w-full px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all disabled:opacity-50"
          >
            {{ saving ? 'Saving...' : 'Save Changes' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

