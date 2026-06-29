# Konveksi Abadi — Landing Page & Admin Dashboard

A responsive full-stack frontend application for a clothing/convection business (Konveksi) built with React, TypeScript, and Tailwind CSS. Features a public landing page with dynamic product showcase and a full CRUD Admin Dashboard powered by json-server as a fake REST API.

## Project Overview

**Konveksi Abadi** is a modern web application designed to showcase clothing products and provide an admin interface for product management. The landing page presents the business professionally with sections for hero, about, featured products, testimonials, and contact. The admin dashboard allows full product lifecycle management without a real backend.

## Features

### Landing Page
- Responsive navbar with mobile hamburger menu
- Hero section with call-to-action and statistics
- About company section
- Featured products loaded dynamically from API
- Why Choose Us section
- Customer testimonials
- Contact form / CTA section
- Footer with navigation links

### Admin Dashboard
- View all products in a responsive table
- Create new products with form validation
- Edit existing products
- Delete products with confirmation modal
- Success and error toast notifications
- Loading and empty states

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI library |
| Vite 8 | Build tool & dev server |
| TypeScript | Type safety |
| Tailwind CSS 4 | Utility-first styling |
| React Router DOM 7 | Client-side routing |
| Axios | HTTP client |
| json-server | Fake REST API |
| concurrently | Run API + dev server together |

## Installation Guide

### Prerequisites
- Node.js 18+ 
- npm 9+

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AssignmentDay44_FE26_RijalAmmar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```
   This runs both:
   - **json-server** at `http://localhost:3001`
   - **Vite dev server** at `http://localhost:5173`

4. **Open in browser**
   - Landing Page: [http://localhost:5173](http://localhost:5173)
   - Admin Dashboard: [http://localhost:5173/admin](http://localhost:5173/admin)

### Other Scripts

```bash
npm run dev:client   # Frontend only (requires json-server running separately)
npm run server       # json-server only
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint (oxlint)
```

## Folder Structure

```
src/
├── assets/              # Static assets (images, icons)
├── components/
│   ├── admin/           # Admin-specific components
│   │   ├── AdminLayout.tsx
│   │   ├── ProductForm.tsx
│   │   └── ProductTable.tsx
│   ├── common/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── Modal.tsx
│   │   ├── ProductCard.tsx
│   │   └── ToastContainer.tsx
│   └── landing/         # Landing page sections
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── FeaturedProducts.tsx
│       ├── WhyChooseUs.tsx
│       ├── Testimonials.tsx
│       ├── ContactSection.tsx
│       └── Footer.tsx
├── hooks/
│   ├── useProducts.ts       # Fetch all products
│   ├── useProductForm.ts    # Form state, validation, mutations
│   └── useToast.ts          # Toast notification state
├── pages/
│   ├── LandingPage.tsx
│   ├── AdminDashboard.tsx
│   ├── AdminCreateProduct.tsx
│   └── AdminEditProduct.tsx
├── routes/
│   └── AppRoutes.tsx
├── services/
│   ├── api.ts               # Axios instance & interceptors
│   └── productService.ts    # Product CRUD API calls
├── types/
│   ├── product.ts           # Product interfaces
│   └── api.ts               # API error types
└── utils/
    ├── constants.ts         # App constants & static data
    └── formatCurrency.ts    # IDR currency formatter
```

## API Explanation

The application uses **json-server** to simulate a REST API from `db.json`.

**Base URL:** `http://localhost:3001`

### Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Create a new product |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

### Product Schema

```json
{
  "id": "string",
  "name": "string",
  "category": "string",
  "description": "string",
  "price": "number",
  "image": "string (URL)",
  "stock": "number"
}
```

### Sample Data

`db.json` includes 8 sample products across categories: Kaos, Kemeja, Jaket, Hoodie, Seragam, Celana, and Aksesoris.

## Clean Code Implementation

- **Separation of concerns:** UI components, business logic (hooks), and API calls (services) are in separate layers
- **Reusable components:** Button, Input, Modal, ProductCard, etc. are shared across pages
- **Custom hooks:** `useProducts`, `useProductForm`, `useProductMutation`, `useToast` encapsulate logic
- **TypeScript interfaces:** Strong typing for Product, ProductFormData, and API errors
- **Single responsibility:** Each component handles one concern
- **DRY principle:** Currency formatting, constants, and API config are centralized
- **Meaningful naming:** Files and functions clearly describe their purpose

## AI-assisted Development Documentation

This project was built with AI assistance (Cursor AI) following a structured prompt-based workflow.

### Development Approach
1. Project scaffolding with Vite + React + TypeScript
2. Tailwind CSS configuration with custom theme
3. json-server setup with sample data
4. Layered architecture (types → services → hooks → components → pages)
5. Landing page sections built as isolated components
6. Admin CRUD with form validation and notifications
7. Final review for TypeScript errors, linting, and responsiveness

### AI Tools Used
- **Cursor AI Agent** — Primary code generation and architecture
- **Vite scaffold** — Project initialization
- **json-server** — Fake API generation

## Prompt History

### Initial Prompt
```
Build a responsive landing page for a clothing/convection business (Konveksi) 
with React + Vite + TypeScript + Tailwind CSS.

Requirements:
- Landing page with Navbar, Hero, About, Featured Products, Why Choose Us, 
  Testimonials, Contact, Footer
- Admin Dashboard with CRUD (Add, Edit, Delete, View products)
- json-server as fake REST API with db.json
- React Router DOM, Axios
- Project structure: assets, components, hooks, pages, routes, services, types, utils
- Clean code: reusable components, custom hooks, TypeScript interfaces
- Responsive design for mobile, tablet, desktop
- Professional README with AI documentation
```

### Follow-up Refinements (Applied During Development)
- Custom color theme (primary blue + accent orange) for brand identity
- Toast notifications for admin actions
- Confirmation modal before delete
- Loading and empty states for better UX
- Image preview in product form
- Stock level color indicators in admin table
- Indonesian language for UI copy (target market)

## Manual Improvements after AI Generation

After AI-generated code, the following manual improvements were applied:

1. **Brand customization** — Named the business "Konveksi Abadi" with consistent branding
2. **Indonesian localization** — All UI text in Bahasa Indonesia for target audience
3. **Currency formatting** — IDR formatter using `Intl.NumberFormat`
4. **Stock indicators** — Color-coded stock levels (red/amber/green) in admin table
5. **Image preview** — Live preview when entering image URL in product form
6. **Concurrent dev script** — Single `npm run dev` command runs both servers
7. **Accessibility** — ARIA labels on modals, mobile menu, and toast notifications
8. **Error handling** — User-friendly messages when API is unavailable

## License

This project is created for educational purposes as part of DiBimbing Bootcamp Assignment Day 44.
