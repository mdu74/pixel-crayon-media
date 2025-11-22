import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  // Verify authentication
  const config = useRuntimeConfig()
  const supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey)
  
  const authHeader = getHeader(event, 'authorization')
  
  if (!authHeader) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  const token = authHeader.replace('Bearer ', '')
  const { data: { user }, error: authError } = await supabase.auth.getUser(token)

  if (authError || !user) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  const section = getRouterParam(event, 'section')
  const body = await readBody(event)

  if (!section) {
    throw createError({
      statusCode: 400,
      message: 'Section parameter is required'
    })
  }

  try {
    // For sections with multiple items
    if (section === 'packages' || section === 'services') {
      if (Array.isArray(body)) {
        // Delete existing content for this section
        await supabase
          .from('content')
          .delete()
          .eq('section', section)

        // Insert new items
        const itemsToInsert = body.map(item => ({
          section,
          data: item
        }))

        const { data, error } = await supabase
          .from('content')
          .insert(itemsToInsert)
          .select()

        if (error) throw error
        return { success: true, data }
      }
    }

    // For single-item sections
    // Check if content exists
    const { data: existing } = await supabase
      .from('content')
      .select('id')
      .eq('section', section)
      .limit(1)
      .single()

    if (existing) {
      // Update existing
      const { data, error } = await supabase
        .from('content')
        .update({ data: body })
        .eq('id', existing.id)
        .select()
        .single()

      if (error) throw error
      return { success: true, data }
    } else {
      // Insert new
      const { data, error } = await supabase
        .from('content')
        .insert({ section, data: body })
        .select()
        .single()

      if (error) throw error
      return { success: true, data }
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to save content'
    })
  }
})

