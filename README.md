# 🏫 Little Kingdom Senior Secondary School Website

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.14.2-CA4245.svg?logo=react-router)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-Private-red.svg)]()

> Official modern, responsive, and SEO-optimized website for **Little Kingdom Senior Secondary School (LKPS)**, Baihar, Balaghat District, Madhya Pradesh.

---

## 📋 Table of Contents

- [About the School & Project](#-about-the-school--project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
  - [Previewing Production Build](#previewing-production-build)
- [SEO & Structured Data](#-seo--structured-data)
- [Deployment](#-deployment)
- [School Contact Information](#-school-contact-information)

---

## 🌟 About the School & Project

**Little Kingdom Senior Secondary School (LKPS)**, founded in 2009 by **Pravin Kumar Mishra**, is the largest educational institution in Baihar, Balaghat district, Madhya Pradesh. The school is known for producing district board toppers, fostering holistic development, providing state-of-the-art infrastructure, computer labs, smart classrooms, sports facilities, and hosting the biggest annual functions in the district.

This website project is built to deliver a premium digital experience for prospective students, parents, and existing school community members.

---

## ✨ Key Features

- 📱 **Fully Responsive Layout**: Seamless experience across mobile, tablet, and desktop devices.
- 🏫 **Comprehensive Page Routing**:
  - **Home (`/`)**: Hero banner, key highlights, quick facility tour, achievements, and announcements.
  - **About Us (`/about`)**: School history, vision, founder's message, leadership profile.
  - **Admissions (`/admissions`)**: Admission criteria, process, documentation requirements, and fee structure details.
  - **Faculty (`/teachers`)**: Directory of qualified educators and staff profiles.
  - **Academic Results (`/academic-results`)**: Board exam toppers, performance metrics, and historical achievements.
  - **Campus & Facilities**: Dedicated feature pages for the **Computer Lab**, **Pre-Primary Wing**, and **School Playground**.
  - **Event & Activity Galleries**: Showcase pages for **Annual Function**, **Republic Day Celebrations**, **Science Exhibition**, **Art Events**, and **School Assemblies**.
- 📢 **Announcement Bar**: Dynamic notification bar at the top for urgent school notices and admission deadlines.
- 🏆 **Result Popup Modal**: Interactive popup showcasing board exam top rankers and school achievements.
- 📸 **Instagram Showcase & Media Galleries**: Interactive preview of campus life, activities, and events.
- 🔍 **SEO & Search Visibility**: Built with JSON-LD schema markup (`EducationalOrganization`, `ImageGallery`), custom Open Graph meta tags, meta descriptions, and Google-friendly image pre-rendering.

---

## 🛠️ Tech Stack

- **Core**: [React 18](https://reactjs.org/) (JavaScript / JSX)
- **Build Tool & Bundler**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/), PostCSS, Autoprefixer
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (configured via `vercel.json`)

---

## 📁 Project Structure

```
school's website/
├── public/                 # Static assets (images, icons, logo, SEO assets)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── About.jsx       # Home about section preview
│   │   ├── AnnouncementBar.jsx # Notification banner
│   │   ├── Features.jsx    # Key features overview
│   │   ├── Footer.jsx      # Global footer with quick links & map
│   │   ├── GalleryPreview.jsx # Campus gallery highlights
│   │   ├── Hero.jsx        # Homepage hero section
│   │   ├── InstagramShowcase.jsx # Social gallery feed
│   │   ├── Navbar.jsx      # Navigation header with mobile menu
│   │   ├── PageSEO.jsx     # Dynamic SEO meta component
│   │   └── ResultPopup.jsx # Pop-up modal for board results
│   ├── pages/              # Router page views
│   │   ├── AboutPage.jsx
│   │   ├── AcademicResultPage.jsx
│   │   ├── AdmissionPage.jsx
│   │   ├── AnnualFunctionPage.jsx
│   │   ├── ArtEventGalleryPage.jsx
│   │   ├── ComputerLabPage.jsx
│   │   ├── ExhibitionPage.jsx
│   │   ├── GalleryDetail.jsx
│   │   ├── Home.jsx
│   │   ├── PlaygroundPage.jsx
│   │   ├── PrePrimaryPage.jsx
│   │   ├── RepublicDayPage.jsx
│   │   ├── SchoolAssemblyPage.jsx
│   │   └── TeachersPage.jsx
│   ├── App.jsx             # Main App layout & route definitions
│   ├── index.css           # Tailwind CSS imports & global styles
│   └── main.jsx            # Application entry point
├── index.html              # Base HTML template with SEO schema & fallback content
├── package.json            # Dependencies & scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vercel.json             # Vercel deployment configuration
└── vite.config.js          # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (version 18 or higher recommended) and npm installed:

```bash
node -v
npm -v
```

### Installation

1. Clone the repository or navigate to the project folder:
   ```bash
   cd "school's website"
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with hot-reload:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The compiled output will be generated in the `dist/` directory.

### Previewing Production Build

To test the compiled production build locally before deploying:

```bash
npm run preview
```

---

## 🎯 SEO & Structured Data

The website is optimized for search engines to achieve high visibility for terms related to education in Baihar and Balaghat district:

- **JSON-LD Schema**:
  - `EducationalOrganization` schema providing institution details, founder info, address, contact numbers, and social media handles.
  - `ImageGallery` schema indexing high-resolution campus and event photography.
- **Open Graph & Twitter Cards**: High-impact social previews for link sharing on WhatsApp, Facebook, Twitter, and LinkedIn.
- **Prerender Fallbacks**: `<noscript>` image elements embedded in `index.html` to ensure full image indexing by search crawlers.

---

## 🚀 Deployment

The project is pre-configured for seamless single-page application (SPA) deployment on **Vercel** via `vercel.json` rewrite rules.

To deploy manually via Vercel CLI:

```bash
npx vercel
```

---

## 📞 School Contact Information

- 🏫 **Institution**: Little Kingdom Senior Secondary School (LKPS)
- 📍 **Address**: Balaghat Road, Baihar, Balaghat District, Madhya Pradesh - 481111
- 👤 **Founder & Director**: Pravin Kumar Mishra
- 📞 **Phone**: +91-7566173757
- 📧 **Email**: baiharlkps@gmail.com
- 🌐 **Website**: [www.littlekingdombaihar.in](https://www.littlekingdombaihar.in)
- 📱 **Social Media**:
  - [Instagram](https://www.instagram.com/littlekingdomschoolbaihar)
  - [YouTube](https://youtube.com/@littlekingdompublicschool)

---

*Created with ❤️ for Little Kingdom Senior Secondary School, Baihar.*
