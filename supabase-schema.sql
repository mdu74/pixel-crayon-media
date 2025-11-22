-- Supabase Database Schema for Content Management
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Content table for all sections
CREATE TABLE IF NOT EXISTS content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section TEXT NOT NULL CHECK (section IN ('hero', 'packages', 'services', 'about', 'contact')),
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_content_section ON content(section);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_content_updated_at
  BEFORE UPDATE ON content
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
ALTER TABLE content ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read content
CREATE POLICY "Content is viewable by everyone"
  ON content FOR SELECT
  USING (true);

-- Policy: Only authenticated users can insert/update/delete
CREATE POLICY "Content is editable by authenticated users"
  ON content FOR ALL
  USING (auth.role() = 'authenticated');

-- Insert default content (optional - you can seed this via the admin panel)
-- This is just an example structure

