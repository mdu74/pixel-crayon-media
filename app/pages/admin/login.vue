<script setup>
definePageMeta({
  layout: false
})

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const { signIn } = useAuth()

const handleLogin = async () => {
  error.value = ''
  loading.value = true

  try {
    const { user, error: authError } = await signIn(email.value, password.value)
    
    if (authError) {
      error.value = authError
      return
    }

    if (user) {
      navigateTo('/admin')
    }
  } catch (err) {
    error.value = err.message || 'An error occurred during login'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20">
      <h1 class="text-3xl font-bold text-white mb-2 text-center">Admin Login</h1>
      <p class="text-gray-300 text-center mb-8">Pixel Crayon Media CMS</p>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="admin@example.com"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="••••••••"
          />
        </div>

        <div v-if="error" class="bg-red-500/20 border border-red-500 rounded-lg p-3">
          <p class="text-red-200 text-sm">{{ error }}</p>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>
    </div>
  </div>
</template>

