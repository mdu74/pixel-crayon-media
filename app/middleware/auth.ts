export default defineNuxtRouteMiddleware(async (to, from) => {
  const { checkSession } = useAuth()
  const session = await checkSession()
  
  if (!session) {
    return navigateTo('/admin/login')
  }
})

