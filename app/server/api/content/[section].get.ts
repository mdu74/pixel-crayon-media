import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const section = getRouterParam(event, 'section')
  const config = useRuntimeConfig()
  
  if (!section) {
    throw createError({
      statusCode: 400,
      message: 'Section parameter is required'
    })
  }

  const supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey)

  try {
    // For sections with multiple items, return all
    if (section === 'packages' || section === 'services') {
      const { data, error } = await supabase
        .from('content')
        .select('*')
        .eq('section', section)
        .order('updated_at', { ascending: false })

      if (error) throw error
      return data?.map(item => item.data) || []
    }

    // For single-item sections, return one
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .eq('section', section)
      .order('updated_at', { ascending: false })
      .limit(1)
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return data?.data || null
  } catch (error) {
    console.error(`Error fetching ${section} content:`, error)
    return section === 'packages' || section === 'services' ? [] : null
  }
})

