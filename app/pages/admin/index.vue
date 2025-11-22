<script setup>
definePageMeta({
  middleware: 'auth'
})

const { signOut, user } = useAuth()
const { initAuth } = useAuth()

onMounted(() => {
  initAuth()
})

const handleLogout = async () => {
  await signOut()
  navigateTo('/admin/login')
}

const sections = [
  { name: 'Hero', route: '/admin/hero', description: 'Main hero section with countdown' },
  { name: 'Packages', route: '/admin/packages', description: 'Package pricing and features' },
  { name: 'Services', route: '/admin/services', description: 'Service descriptions' },
  { name: 'About', route: '/admin/about', description: 'About section content' },
  { name: 'Contact', route: '/admin/contact', description: 'Contact information' },
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
    <div class="max-w-7xl mx-auto px-6 py-8">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-white mb-2">Content Management</h1>
          <p class="text-gray-300">Edit your website content</p>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-gray-300">{{ user?.email }}</span>
          <button
            @click="handleLogout"
            class="px-4 py-2 bg-red-500/20 border border-red-500 text-red-200 rounded-lg hover:bg-red-500/30 transition"
          >
            Logout
          </button>
        </div>
      </div>

      <!-- Content Sections Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="section in sections"
          :key="section.route"
          :to="section.route"
          class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer"
        >
          <h2 class="text-xl font-bold text-white mb-2">{{ section.name }}</h2>
          <p class="text-gray-300 text-sm">{{ section.description }}</p>
          <div class="mt-4 text-orange-400 font-semibold">Edit →</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

