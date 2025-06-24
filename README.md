# Global Board World - Unified Marketplace

A comprehensive React-based marketplace platform that connects communities through buying, selling, services, jobs, events, and more.

## 🚀 Features

### Core Marketplace Features
- **Product Listings** - Browse and search through thousands of products
- **Services Directory** - Find local services and contractors
- **Job Board** - Discover employment opportunities
- **Events Platform** - Join community events and networking
- **Contract Management** - Create and manage service agreements
- **Messaging System** - Direct communication between users
- **User Profiles** - Comprehensive user profiles with reviews
- **Campaign Support** - Support community causes and fundraising

### Technical Features
- **Responsive Design** - Works seamlessly on all devices
- **Modern UI/UX** - Built with Tailwind CSS and shadcn/ui
- **Type Safety** - TypeScript support throughout
- **State Management** - React Query for efficient data management
- **Routing** - React Router DOM for smooth navigation
- **Component Library** - Reusable UI components

## 📁 Project Structure

```
/src
  /assets          # Static assets and images
  /components      # Reusable UI components
    /ui            # shadcn/ui component library
  /layouts         # Layout components (MainLayout)
  /pages           # All page components
    ├── Home.jsx
    ├── Explore.jsx
    ├── ProductPage.jsx
    ├── Profile.jsx
    ├── ProfileReviews.jsx
    ├── JobDetails.jsx
    ├── EventDetails.jsx
    ├── HowItWorks.jsx
    ├── ContractCreation.jsx
    ├── Contracts.jsx
    ├── ContractsProfile.jsx
    ├── CampaignDetails.jsx
    ├── Messages.jsx
    ├── Privacy.jsx
    ├── Results.jsx
    └── ReviewContract.jsx
  /context         # React context providers
  /hooks           # Custom React hooks
  /services        # API services and utilities
  /styles          # Global styles and Tailwind CSS
  /utils           # Utility functions
```

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🌐 Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with featured listings |
| `/explore` | Explore | Browse all marketplace items |
| `/product/:id` | ProductPage | Individual product details |
| `/profile` | Profile | User profile management |
| `/profile/reviews` | ProfileReviews | User reviews and ratings |
| `/job/:id` | JobDetails | Job posting details |
| `/event/:id` | EventDetails | Event information |
| `/how-it-works` | HowItWorks | Platform guide |
| `/contract/create` | ContractCreation | Create new contracts |
| `/contracts` | Contracts | Contract dashboard |
| `/contracts/profile` | ContractsProfile | Contract performance |
| `/campaign/:id` | CampaignDetails | Campaign details |
| `/messages` | Messages | Messaging interface |
| `/privacy` | Privacy | Privacy policy |
| `/results` | Results | Search results |
| `/contract/review/:id` | ReviewContract | Contract review |

## 🎨 Design System

### Color Palette
- **Primary**: `#5648ff` (Purple)
- **Background**: `#0b0b0b` (Dark)
- **Surface**: `#1f1f1f` (Dark Gray)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#99999b` (Light Gray)

### Typography
- **Font Family**: DM Sans
- **Responsive Typography**: Tailwind CSS utilities
- **Consistent Spacing**: 8px grid system

## 🔧 Technology Stack

### Frontend
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### State Management
- **React Query** - Server state management
- **React Context** - Global state management
- **Local State** - React hooks (useState, useEffect)

## 🚀 Deployment

### Replit Deployment
This project is optimized for Replit deployment:

1. Import the project into Replit
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. The app will be available at your Replit URL

### Other Platforms
- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_APP_NAME="Global Board World"
```

## 🧪 Testing

```bash
# Run type checking
npm run check

# Build project
npm run build
```

## 📱 Multi-Role Support

The platform supports different user roles:
- **Buyers** - Browse and purchase items
- **Sellers** - List and sell products/services
- **Job Seekers** - Find employment opportunities
- **Employers** - Post job listings
- **Event Organizers** - Create and manage events
- **Service Providers** - Offer professional services

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: support@globalboard.com
- Documentation: Coming soon
- Community: Join our Discord server

---

**Built with ❤️ by the Global Board World team** 