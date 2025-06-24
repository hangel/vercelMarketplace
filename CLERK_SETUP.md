# Clerk Authentication Setup

This project has been successfully integrated with Clerk authentication following the official React + Vite setup guidelines.

## Setup Completed

✅ **Clerk React SDK Installed**: `@clerk/clerk-react@latest`

✅ **Environment Variable Configured**: 
- File: `.env.local`
- Variable: `VITE_CLERK_PUBLISHABLE_KEY=pk_test_d2hvbGUtYW5lbW9uZS02NS5jbGVyay5hY2NvdW50cy5kZXYk`

✅ **ClerkProvider Wrapper**: Added to `src/index.jsx` with proper error handling

✅ **Authentication Components**: Integrated into `src/layouts/MainLayout.jsx`
- `<SignedIn>` and `<SignedOut>` for conditional rendering
- `<SignInButton>` and `<SignUpButton>` for authentication
- `<UserButton>` for user profile management

## Key Features

1. **Modal Authentication**: Sign in/up buttons open in modal dialogs
2. **Conditional Navigation**: Different UI for signed-in vs signed-out users
3. **Automatic Redirect**: Users are redirected to home page after sign out
4. **User Profile**: UserButton component provides profile management

## Usage

The authentication is now active throughout the marketplace app:

- **Signed Out Users**: See "Sign In" and "Sign Up" buttons in the navbar
- **Signed In Users**: See the UserButton component for profile management
- **Protected Routes**: Can be easily added using `<SignedIn>` wrapper

## Development

The app is running on: `http://localhost:5175/`

To start development:
```bash
npm run dev
```

## Official Documentation

For more information, visit: https://clerk.com/docs/quickstarts/react 