import type { User } from '@supabase/supabase-js'

export const useAuth = () => {
  const { supabase } = useSupabase()
  const user = useState<User | null>('auth_user', () => null)
  const loading = useState<boolean>('auth_loading', () => false)

  // Check current session
  const checkSession = async () => {
    loading.value = true
    try {
      const { data: { session } } = await supabase.auth.getSession()
      user.value = session?.user ?? null
      return session
    } catch (error) {
      console.error('Error checking session:', error)
      user.value = null
      return null
    } finally {
      loading.value = false
    }
  }

  // Sign in
  const signIn = async (email: string, password: string) => {
    loading.value = true
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (error) throw error
      
      user.value = data.user
      return { user: data.user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    } finally {
      loading.value = false
    }
  }

  // Sign out
  const signOut = async () => {
    loading.value = true
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      user.value = null
      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    } finally {
      loading.value = false
    }
  }

  // Listen to auth changes
  const initAuth = () => {
    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user ?? null
    })
  }

  return {
    user: readonly(user),
    loading: readonly(loading),
    checkSession,
    signIn,
    signOut,
    initAuth
  }
}

