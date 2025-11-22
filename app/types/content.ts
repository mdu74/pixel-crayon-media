// Content types for the CMS

export interface HeroContent {
  id?: string
  section: 'hero'
  countdown_target_date: string
  primary_text: string
  title_text: string
  subtitle_text: string
  cta_primary_text: string
  cta_secondary_text: string
  updated_at?: string
}

export interface PackageContent {
  id?: string
  section: 'packages'
  package_type: 'quick_start' | 'standard_boost' | 'premium_pro'
  title: string
  subtitle: string
  price: string
  price_label: string
  features: string[]
  button_text: string
  is_popular?: boolean
  updated_at?: string
}

export interface ServiceContent {
  id?: string
  section: 'services'
  card_type: 'business_card' | 'custom_showcase' | 'strategy_partner'
  title: string
  package_name: string
  package_price: string
  description: string
  features: string[]
  updated_at?: string
}

export interface AboutContent {
  id?: string
  section: 'about'
  heading: string
  intro_paragraph: string
  services: {
    category: string
    icon_path: string
    items: string[]
  }[]
  updated_at?: string
}

export interface ContactContent {
  id?: string
  section: 'contact'
  heading: string
  description: string
  contact_methods: {
    title: string
    highlight: string
    description: string
    icon_path: string
  }[]
  cta_text: string
  updated_at?: string
}

export type ContentType = HeroContent | PackageContent | ServiceContent | AboutContent | ContactContent

