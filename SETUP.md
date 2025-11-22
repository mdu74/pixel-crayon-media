# Content Management System Setup Guide

This guide will help you set up authentication and content management for your Pixel Crayon Media website.

## Prerequisites

1. A Supabase account (free tier available at https://supabase.com)
2. Node.js and npm installed
3. Your project deployed on Vercel (or running locally)

## Step 1: Create a Supabase Project

1. Go to https://supabase.com and sign up/login
2. Click "New Project"
3. Fill in your project details:
   - Name: `pixel-crayon-media` (or your preferred name)
   - Database Password: Choose a strong password
   - Region: Choose the closest region to your users
4. Wait for the project to be created (takes a few minutes)

## Step 2: Set Up the Database

1. In your Supabase dashboard, go to the SQL Editor
2. Open the file `supabase-schema.sql` from this project
3. Copy and paste the entire SQL script into the SQL Editor
4. Click "Run" to execute the script
5. This will create:
   - The `content` table
   - Row Level Security (RLS) policies
   - Automatic timestamp updates

## Step 3: Create an Admin User

1. In Supabase dashboard, go to "Authentication" > "Users"
2. Click "Add user" > "Create new user"
3. Enter an email and password for your admin account
4. Save the credentials securely

## Step 4: Configure Environment Variables

### For Local Development

Create a `.env` file in the root of your project:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to "Settings" > "Environment Variables"
3. Add the following variables:
   - `SUPABASE_URL` - Your Supabase project URL (found in Project Settings > API)
   - `SUPABASE_ANON_KEY` - Your Supabase anon/public key (found in Project Settings > API)

**Where to find these values:**
- In Supabase dashboard, go to "Project Settings" > "API"
- Copy the "Project URL" → This is your `SUPABASE_URL`
- Copy the "anon public" key → This is your `SUPABASE_ANON_KEY`

## Step 5: Access the Admin Panel

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000/admin/login`
3. Log in with the admin credentials you created in Step 3
4. You'll be redirected to the admin dashboard where you can edit all content sections

## Step 6: Initial Content Setup

After logging in, you can:

1. **Edit Hero Section** (`/admin/hero`)
   - Update countdown target date
   - Change headings and text
   - Modify CTA button text

2. **Edit Packages** (`/admin/packages`)
   - Update package titles, prices, and descriptions
   - Add/remove features
   - Mark packages as "Most Popular"

3. **Edit Services** (`/admin/services`)
   - Update service card content
   - Modify descriptions and features

4. **Edit About Section** (`/admin/about`)
   - Update company description
   - Modify service categories and items

5. **Edit Contact Section** (`/admin/contact`)
   - Update contact information
   - Modify social media links

## How It Works

- **Public Access**: All content is publicly readable (no authentication required)
- **Admin Access**: Only authenticated users can edit content
- **Real-time Updates**: Changes are saved to Supabase and immediately available on your website
- **Fallback Content**: If content isn't found in the database, components use default hardcoded values

## Security Notes

- The `SUPABASE_ANON_KEY` is safe to expose in client-side code (it's designed for this)
- Row Level Security (RLS) ensures only authenticated users can modify content
- Never commit your `.env` file to version control
- Keep your admin password secure

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure you've set `SUPABASE_URL` and `SUPABASE_ANON_KEY` in your environment
- Restart your development server after adding environment variables

### Can't log in
- Verify the user exists in Supabase Authentication > Users
- Check that the email and password are correct
- Ensure RLS policies are set up correctly (run the SQL schema again if needed)

### Content not updating
- Check browser console for errors
- Verify the API routes are working: `/api/content/[section]`
- Ensure the database table was created correctly

## Support

For issues or questions:
1. Check the Supabase documentation: https://supabase.com/docs
2. Review the Nuxt documentation: https://nuxt.com/docs
3. Check the project's GitHub issues

