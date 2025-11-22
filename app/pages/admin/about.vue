<script setup>
definePageMeta({
  middleware: 'auth'
})

const { supabase } = useSupabase()
const loading = ref(false)
const saving = ref(false)
const message = ref({ type: '', text: '' })

const form = ref({
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
  loading.value = true
  try {
    const { data } = await $fetch('/api/content/about')
    if (data) {
      form.value = { ...form.value, ...data }
    }
  } catch (error) {
    console.error('Error loading about content:', error)
  } finally {
    loading.value = false
  }
})

const addServiceItem = (serviceIndex) => {
  form.value.services[serviceIndex].items.push('')
}

const removeServiceItem = (serviceIndex, itemIndex) => {
  form.value.services[serviceIndex].items.splice(itemIndex, 1)
}

const handleSave = async () => {
  saving.value = true
  message.value = { type: '', text: '' }

  try {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) throw new Error('Not authenticated')

    const response = await $fetch('/api/content/about', {
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
        <h1 class="text-3xl font-bold text-white">Edit About Section</h1>
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
            <label class="block text-sm font-medium text-gray-300 mb-2">Intro Paragraph</label>
            <textarea
              v-model="form.intro_paragraph"
              rows="4"
              required
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div class="space-y-8">
            <div
              v-for="(service, serviceIndex) in form.services"
              :key="serviceIndex"
              class="bg-white/5 rounded-lg p-6 border border-white/10"
            >
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Category Name</label>
                  <input
                    v-model="service.category"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">Icon Path</label>
                  <input
                    v-model="service.icon_path"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Service Items</label>
                <div
                  v-for="(item, itemIndex) in service.items"
                  :key="itemIndex"
                  class="flex gap-2 mb-2"
                >
                  <input
                    v-model="service.items[itemIndex]"
                    type="text"
                    required
                    class="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    type="button"
                    @click="removeServiceItem(serviceIndex, itemIndex)"
                    class="px-4 py-3 bg-red-500/20 border border-red-500 text-red-200 rounded-lg hover:bg-red-500/30"
                  >
                    Remove
                  </button>
                </div>
                <button
                  type="button"
                  @click="addServiceItem(serviceIndex)"
                  class="mt-2 px-4 py-2 bg-green-500/20 border border-green-500 text-green-200 rounded-lg hover:bg-green-500/30"
                >
                  + Add Item
                </button>
              </div>
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

