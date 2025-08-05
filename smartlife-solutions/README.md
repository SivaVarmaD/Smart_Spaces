# SmartLife Solutions - Home Automation Website

A modern, responsive Next.js application for SmartLife Solutions Pvt. Ltd., a leading home automation company based in Hyderabad, Telangana, India.

## 🏠 About SmartLife Solutions

SmartLife Solutions specializes in delivering eco-friendly, scalable automation solutions for Hyderabad's upscale areas including Banjara Hills, Gachibowli, and Jubilee Hills. We transform traditional homes into intelligent living spaces through cutting-edge technology.

## ✨ Features

### Core Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multi-language Support**: English, Telugu, and Hindi
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Accessibility**: WCAG compliant design principles

### Pages & Functionality
- **Home**: Hero section with animated elements and featured products
- **About**: Company information with scroll-triggered animations
- **Solutions**: Product catalog with e-commerce functionality
- **Case Studies**: Project showcases with before/after comparisons
- **Blog**: SEO-optimized blog with masonry grid layout
- **Contact**: Contact form with Google Maps integration
- **Request Demo**: Demo booking form with multi-step process

### E-commerce Features
- Product catalog with categories and filtering
- Shopping cart functionality
- Buy Now buttons with hover effects
- Price display in INR (₹)
- Product features and specifications

### Interactive Elements
- Sticky "Request Demo" button with glow effects
- Animated testimonials and statistics
- Scroll-triggered fade-in animations
- Hover effects and micro-interactions
- Live chat integration (Tawk.to)

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion
- **Backend**: Supabase (Database, Auth, Storage)
- **Deployment**: Vercel (recommended)
- **Fonts**: Google Fonts (Montserrat, Lora)
- **Icons**: Heroicons
- **Internationalization**: i18next

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/smartlife-solutions.git
   cd smartlife-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   - Supabase URL and API key
   - Google Maps API key
   - Tawk.to widget configuration
   - Email service credentials
   - Payment gateway keys

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
smartlife-solutions/
├── src/
│   └── app/
│       ├── components/          # Reusable React components
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   └── StickyDemoButton.tsx
│       ├── lib/                 # Utility functions and configurations
│       │   ├── supabase.ts
│       │   └── i18n.ts
│       ├── about/               # About page
│       ├── solutions/           # Solutions/Products page
│       ├── case-studies/        # Case studies page
│       ├── blog/               # Blog page
│       ├── contact/            # Contact page
│       ├── request-demo/       # Demo request page
│       ├── globals.css         # Global styles and custom CSS
│       ├── layout.tsx          # Root layout component
│       └── page.tsx            # Home page
├── public/                     # Static assets
├── .env.example               # Environment variables template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🎨 Design System

### Colors
- **Primary Blue**: #007BFF
- **Primary Green**: #28A745 (CTA buttons)
- **Silver**: #C0C0C0 (borders and accents)
- **Text**: #171717 (primary), #6B7280 (secondary)

### Typography
- **Headings**: Montserrat (Bold)
- **Body**: Montserrat (Regular)
- **Captions**: Lora (Italic)
- **Sizes**: H1 (32px), H2 (24px), Body (16px), Line height (1.5x)

### Layout
- **Grid**: 12-column system
- **Padding**: 24px
- **Margins**: 16px
- **Breakpoints**: Mobile-first responsive design

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Set up the following tables:
   - `products` (id, name, description, price, category, features, image_url)
   - `orders` (id, user_id, products, total_amount, status)
   - `blog_posts` (id, title, content, excerpt, category, author)
3. Enable Row Level Security (RLS)
4. Add your Supabase URL and anon key to `.env.local`

### Google Maps Integration
1. Get a Google Maps API key
2. Enable Maps JavaScript API and Places API
3. Add the API key to `.env.local`
4. Update the contact page with your business location

### Live Chat (Tawk.to)
1. Create a Tawk.to account
2. Get your widget ID and property ID
3. Add the configuration to `.env.local`
4. The chat widget will appear with a pulsing animation

## 📱 Features by Page

### Home Page
- Full-screen hero with animated tagline
- Featured products with hover effects
- Company overview and services
- Customer testimonials slider
- Quick links to main sections

### Solutions Page
- Product categories with filtering
- E-commerce functionality with cart
- Product details with features
- Price display in INR
- YouTube video integration placeholders
- 3D tilt effects on product images

### About Page
- Animated mission statement
- Core values with icons
- Statistics counter
- Service areas in Hyderabad
- Scroll-triggered animations

### Contact Page
- Contact form with validation
- Google Maps integration
- Required field highlighting
- Success/error messages
- Business address and details

### Request Demo Page
- Multi-step demo booking form
- Product selection dropdown
- Date picker for scheduling
- Progress indicators
- Success popup notifications

### Blog Page
- Masonry grid layout
- Category filtering
- SEO-optimized content
- Related posts
- Social sharing buttons

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on git push

### Manual Deploy
```bash
npm run build
npm start
```

### Environment Variables for Production
Ensure all environment variables are set in your production environment:
- Supabase credentials
- Google Maps API key
- Email service configuration
- Payment gateway keys
- Analytics tracking IDs

## 🔍 SEO Features

- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for better search results
- **Sitemap**: Auto-generated sitemap.xml
- **Alt Text**: All images have descriptive alt text
- **Performance**: Optimized images and lazy loading

## 🌐 Multi-language Support

The application supports three languages:
- **English** (default)
- **Telugu** (తెలుగు)
- **Hindi** (हिन्दी)

Language switching is available in the navbar with a #28A745 highlight for the selected language.

## 📊 Analytics & Monitoring

- Google Analytics integration
- Performance monitoring
- Error tracking
- User behavior analytics
- Conversion tracking for demo requests and purchases

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions:
- Email: support@smartlifesolutions.in
- Phone: +91-XXX-XXX-XXXX
- Address: SmartLife Solutions Pvt. Ltd., Hyderabad, Telangana, India

## 📄 License

This project is proprietary software owned by SmartLife Solutions Pvt. Ltd.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Supabase for the backend infrastructure
- Vercel for hosting and deployment

---

**SmartLife Solutions Pvt. Ltd.** - *Transforming homes into intelligent living spaces*

For more information, visit our website or contact us for a demo of our home automation solutions.
