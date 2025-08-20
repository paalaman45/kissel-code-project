# Environment Configuration Guide

This guide will help you set up environment variables for your Kissel Code portfolio to work properly in both development and production environments.

## Quick Setup

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file with your actual values:**
   ```bash
   # Open in your favorite editor
   code .env
   # or
   nano .env
   ```

## Required Environment Variables

### Firebase Configuration (Required)
These variables are **required** for the application to function properly:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**How to get Firebase configuration:**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Go to Project Settings (gear icon)
4. Scroll down to "Your apps" and select your web app
5. Copy the configuration values from the `firebaseConfig` object

### GitHub Configuration (Optional)
For image upload functionality:

```env
VITE_GITHUB_TOKEN=ghp_your_github_token_here
VITE_GITHUB_REPO=username/repo-name
VITE_GITHUB_OWNER=github_username
```

**How to get GitHub Personal Access Token:**
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with `repo` permissions
3. Copy the token (you won't see it again!)

### Personal Information
Update these with your actual contact details:

```env
VITE_CONTACT_EMAIL=your.email@example.com
VITE_CONTACT_PHONE=+1234567890
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
VITE_INSTAGRAM_URL=https://instagram.com/yourusername
```

### Application Configuration
Customize your portfolio details:

```env
VITE_APP_TITLE=Your_Portfolio_Name
VITE_APP_DESCRIPTION=Your_Portfolio_Description
VITE_APP_URL=https://your-portfolio-domain.com
```

## Development vs Production

### Development (.env)
For local development, your `.env` file might look like:

```env
VITE_FIREBASE_API_KEY=AIzaSyBXbL...
VITE_FIREBASE_AUTH_DOMAIN=your-project-dev.firebaseapp.com
# ... other firebase config
VITE_APP_URL=http://localhost:5173
```

### Production
For production deployment (Vercel, Netlify, etc.), set these environment variables in your hosting platform's dashboard:

**Vercel:**
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add each variable one by one

**Netlify:**
1. Go to Site settings
2. Environment variables
3. Add each variable

## Validation

The application will automatically validate your environment configuration on startup. Check the browser console for any missing variables.

If you see errors like:
```
Missing required environment variables: ['VITE_FIREBASE_API_KEY', 'VITE_FIREBASE_PROJECT_ID']
```

Make sure to add these variables to your `.env` file.

## Security Notes

- **Never commit your `.env` file to Git** (it's already in `.gitignore`)
- **Use different Firebase projects for development and production**
- **Regenerate tokens if they're ever exposed**
- **Firebase config is safe to expose in client-side code** (it's not a secret)

## Troubleshooting

### "Firebase configuration missing" error
- Check that all VITE_FIREBASE_* variables are set in your `.env` file
- Ensure there are no typos in variable names
- Restart your development server after changing `.env`

### Images not uploading
- Verify your GitHub token has `repo` permissions
- Check that VITE_GITHUB_REPO is in the format `username/repository`
- Make sure your repository exists and is accessible

### Social links not working
- Update VITE_GITHUB_URL, VITE_LINKEDIN_URL, VITE_INSTAGRAM_URL
- Ensure URLs include `https://`

## Example .env File

Here's a complete example with fake data:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyExample123456789
VITE_FIREBASE_AUTH_DOMAIN=my-portfolio-12345.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=my-portfolio-12345
VITE_FIREBASE_STORAGE_BUCKET=my-portfolio-12345.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
VITE_FIREBASE_MEASUREMENT_ID=G-ABCD123456

# GitHub Configuration
VITE_GITHUB_TOKEN=ghp_abcdefghijklmnopqrstuvwxyz123456789
VITE_GITHUB_REPO=johndoe/my-portfolio
VITE_GITHUB_OWNER=johndoe

# Application Configuration
VITE_APP_TITLE=John Doe
VITE_APP_DESCRIPTION=Full Stack Developer & Creative Coder
VITE_APP_URL=https://johndoe.dev

# Contact Information
VITE_CONTACT_EMAIL=john@johndoe.dev
VITE_CONTACT_PHONE=+1234567890

# Social Media
VITE_GITHUB_URL=https://github.com/johndoe
VITE_LINKEDIN_URL=https://linkedin.com/in/johndoe
VITE_INSTAGRAM_URL=https://instagram.com/johndoe
```

## Need Help?

If you're still having trouble, check:
1. Console errors in your browser's developer tools
2. Terminal output when running `npm run dev`
3. Make sure your `.env` file is in the project root (same level as `package.json`)

Remember: Changes to `.env` require restarting your development server!