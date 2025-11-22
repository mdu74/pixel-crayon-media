import type { ContentType } from '~/types/content'

export const useContent = () => {
  const { supabase } = useSupabase()

  // Get content by section
  const getContent = async (section: string) => {
    try {
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
      return null
    }
  }

  // Get all content for a section (for packages/services which have multiple items)
  const getAllContent = async (section: string) => {
    try {
      const { data, error } = await supabase
        .from('content')
        .select('*')
        .eq('section', section)
        .order('updated_at', { ascending: false })

      if (error) throw error
      return data?.map(item => item.data) || []
    } catch (error) {
      console.error(`Error fetching all ${section} content:`, error)
      return []
    }
  }

  // Save/Update content
  const saveContent = async (section: string, contentData: any) => {
    try {
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
          .update({ data: contentData })
          .eq('id', existing.id)
          .select()
          .single()

        if (error) throw error
        return { data, error: null }
      } else {
        // Insert new
        const { data, error } = await supabase
          .from('content')
          .insert({ section, data: contentData })
          .select()
          .single()

        if (error) throw error
        return { data, error: null }
      }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  // Save multiple items (for packages/services)
  const saveMultipleContent = async (section: string, items: any[]) => {
    try {
      // Delete existing content for this section
      await supabase
        .from('content')
        .delete()
        .eq('section', section)

      // Insert new items
      const itemsToInsert = items.map(item => ({
        section,
        data: item
      }))

      const { data, error } = await supabase
        .from('content')
        .insert(itemsToInsert)
        .select()

      if (error) throw error
      return { data, error: null }
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }

  return {
    getContent,
    getAllContent,
    saveContent,
    saveMultipleContent
  }
}

