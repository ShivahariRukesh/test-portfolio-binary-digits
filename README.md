# Next.js Portfolio with Admin Panel

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and GSAP animations. Features a complete admin panel for managing projects with PostgreSQL database integration.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Dynamic Content**: The projects shown in the project section are dynamicProject data fetched from PostgreSQL database
- **Admin Panel**: Full CRUD operations for project management
- **GSAP Animations**: Smooth, professional animations throughout
- **TypeScript**: Type-safe development experience
- **Modern Stack**: Next.js, Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP with ScrollTrigger
- **Database**: PostgreSQL
- **State Management**: React Context API
- **Authentication**: Simple session-based auth

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up PostgreSQL database and create the projects table:
   ```sql
   CREATE DATABASE portfolio_db;

   CREATE TABLE projects (
     id SERIAL PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     description TEXT,
     image_url VARCHAR(500),
     category VARCHAR(100),
   );
   ```

4. Create `.env.local` file:
   ```
   NEXT_DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
   NEXT_ADMIN_USERNAME = 'admin'
   NEXT_ADMIN_PASSWORD = 'admin'

   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## 🔐 Admin Access

- **URL**: `http://localhost:3000/admin`
- **Username**: `admin`
- **Password**: `admin`

## 📁 Project Structure

```
└──app/
    ├── admin/                 # Admin panel pages and components
    │   ├── components/        # Admin-specific components
    │   └── page.tsx          # Admin dashboard
    │   └── loading.tsx       # Admin loading component
    ├── api/                  # API routes
    │   ├── projects/         # Project CRUD endpoints
    │   └── auth/            # Authentication endpoint
    ├── components/          # Main UI  and Reusable UI components
    ├── context/            # React context providers
    ├── lib/              # Database and api functions
    │   ├── api/         # Api functions
    │   └── database/          # Database functions
    │── services/           #Functionality that interacts with database and the route controllers
    └── types/           # Typescript interfaces and types
└── public/           # Typescript interfaces and types
    ├── admin/        # Public images
    ├── uploads/        # Stores the images that is used for the project image url which written by the server

## 🎨 Components

### Main Components
- **Navbar**: Navigation with smooth scroll effects
- **Hero**: Animated landing section with moon background
- **Project**: Dynamic project showcase with GSAP animations
- **About**: Animated section with split text effects
- **Contact**: Contact form with animation triggers

### Admin Components
- **AdminAuth**: Secure login form
- **ProjectForm**: Create/edit project modal
- **ProjectList**: Tabular project management interface

## 🔧 API Endpoints

- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project
- `POST /api/auth` - Authenticate admin user

## 🎭 Animations

The project uses GSAP for smooth, professional animations


## 🔄 State Management

Uses React Context API for:
- Project data management
- Loading states
- CRUD operations



## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Optimized for all screen sizes
- **Touch Friendly**: Mobile-optimized interactions
- **Performance**: Optimized images and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
```

This completes your Next.js portfolio with:

✅ **Responsive design** (mobile + desktop)
✅ **TypeScript** throughout
✅ **Tailwind CSS** styling
✅ **GSAP animations** with ScrollTrigger
✅ **Reusable components** structure
✅ **PostgreSQL backend** with full CRUD
✅ **Admin panel** for project management
✅ **React Context** for state management
✅ **Clean, commented code**

**Admin Credentials:**
- Username: `admin`
- Password: `admin`
- Access: `http://localhost:3000/admin`

The application features smooth animations, a modern dark theme and a complete project management system for  portfolio projects!