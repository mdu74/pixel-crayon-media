<script setup>
definePageMeta({
  middleware: 'auth'
})

const { supabase } = useSupabase()
const loading = ref(false)
const saving = ref(false)
const message = ref({ type: '', text: '' })

const form = ref({
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

onMounted(async () => {
  loading.value = true
  try {
    const { data } = await $fetch('/api/content/contact')
    if (data) {
      form.value = { ...form.value, ...data }
    }
  } catch (error) {
    console.error('Error loading contact content:', error)
  } finally {
    loading.value = false
  }
})

const addContactMethod = () => {
  form.value.contact_methods.push({
    title: '',
    highlight: '',
    description: '',
    icon_path: ''
  })
}

const removeContactMethod = (index) => {
  form.value.contact_methods.splice(index, 1)
}

const handleSave = async () => {
  saving.value = true
  message.value = { type: '', text: '' }

  try {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) throw new Error('Not authenticated')

    const response = await $fetch('/api/content/contact', {
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
    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex items-center gap-4 mb-8">
        <NuxtLink to="/admin" class="text-orange-400 hover:text-orange-300">← Back</NuxtLink>
        <h1 class="text-3xl font-bold text-white">Edit Contact Section</h1>
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
            <label class="block text-sm font-medium text-gray-300 mb-2">Heading</label>
            <input
              v-model="form.heading"
              type="text"
              required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              v-model="form.description"
              rows="3"
              required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">CTA Button Text</label>
            <input
              v-model="form.cta_text"
              type="text"
              required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold text-white">Contact Methods</h2>
              <button
                type="button"
                @click="addContactMethod"
                class="px-4 py-2 bg-green-500/20 border border-green-500 text-green-200 rounded-lg hover:bg-green-500/30"
              >
                + Add Contact Method
              </button>
            </div>

            <div
              v-for="(method, methodIndex) in form.contact_methods"
              :key="methodIndex"
              class="bg-white/5 rounded-lg p-6 border border-white/10"
            >
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Title</label>
                  <input
                    v-model="method.title"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Highlight Text</label>
                  <input
                    v-model="method.highlight"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <input
                    v-model="method.description"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Icon Path</label>
                  <input
                    v-model="method.icon_path"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <button
                type="button"
                @click="removeContactMethod(methodIndex)"
                class="px-4 py-2 bg-red-500/20 border border-red-500 text-red-200 rounded-lg hover:bg-red-500/30"
              >
                Remove
              </button>
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

