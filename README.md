# My Updated Personal Portfolio

A modern, responsive personal portfolio website built with Vue 3, Vite, Tailwind CSS, and Firebase.

## Features

### Frontend
- **Single Page Application (SPA)** with smooth navigation
- **Responsive Design** using Tailwind CSS
- **Modern Vue 3** with Composition API and `<script setup>` syntax
- **Component-based Architecture** for maintainable code
- **Smooth Animations** and transitions

### Sections
- **Hero Section**: Eye-catching landing with call-to-action
- **About Me**: Professional background and personal interests
- **Services**: List of offered services with detailed descriptions
- **Skills**: Technical skills with proficiency levels and experience
- **Blog**: Latest blog posts with categorization and search

### Admin Panel
- **Password-protected Admin Routes** for content management
- **CRUD Operations** for all content types:
  - Create, Read, Update, Delete blog posts
  - Add, update, delete services
  - Add, update, delete skills
  - Update About Me content
- **Firebase Authentication** integration
- **Real-time Content Updates** with Firebase Firestore

### Technical Stack
- **Vue 3** with Composition API
- **Vite** for fast development and building
- **TypeScript** support
- **Tailwind CSS** for styling
- **Vue Router** for navigation
- **Pinia** for state management
- **Firebase** for authentication and database

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure Firebase** (Optional)
   - Create a new Firebase project at https://console.firebase.google.com/
   - Enable Authentication and Firestore Database
   - Update the Firebase configuration in `src/firebase/config.js`
   - Replace the placeholder values with your actual Firebase project configuration

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The portfolio will be running locally

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Admin Panel

### Accessing the Admin Panel
1. Navigate to `/admin/login`
2. Use the demo credentials:
   - **Email**: admin@example.com
   - **Password**: admin123

### Admin Features
- **Dashboard**: Overview of all content
- **About Me Management**: Update personal information and skills
- **Services Management**: Add, edit, and delete services
- **Skills Management**: Manage technical skills with proficiency levels
- **Blog Management**: Create, edit, publish, and delete blog posts

## Firebase Configuration

To enable Firebase integration:

1. Update `src/firebase/config.js` with your Firebase project configuration:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key-here",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef123456"
   }
   ```

2. Set up Firestore collections:
   - `about`: For About Me content
   - `services`: For services offered
   - `skills`: For technical skills
   - `blogs`: For blog posts

## Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally

### Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## License

This project is open source and available under the MIT License.
