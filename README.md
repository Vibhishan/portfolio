# 🚀 Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite. This portfolio showcases professional experience, projects, and contact information with a clean, minimalist design aesthetic.

## ✨ Live Demo

[Portfolio Website](https://vibhishanranga.com)

## 🎯 Features

- **🖥️ Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean, minimalist design with carefully crafted animations and transitions
- **📑 Section-Based Structure**:
  - **👋 Introduction**: Personal greeting with decorative SVG elements
  - **💼 Projects**: Showcase of personal and professional projects with hover effects
  - **📈 Experience**: Interactive timeline showing professional background
  - **📞 Contact**: Contact form and social links with SVG background

## 🛠️ Tech Stack

- **⚛️ React 19**: Latest version of the React library for building user interfaces
- **⚡ Vite**: Next-generation frontend tooling for fast development and optimized builds
- **🎭 SCSS**: Advanced CSS preprocessing for maintainable styling
- **📝 Modern JavaScript (ES6+)**: Utilizing latest JavaScript features

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone https://github.com/Vibhishan/portfolio.git
   cd portfolio
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Start the development server

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── public/                # Static files
├── src/                   # Source files
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # React components
│   │   ├── NavBar.jsx     # Navigation bar component
│   │   ├── Introduction.jsx # Hero section with SVG animations
│   │   ├── Projects.jsx   # Project cards with custom hover effects
│   │   ├── Experience.jsx # Timeline component
│   │   ├── Contact.jsx    # Contact section with SVG background
│   │   └── Loading.jsx    # Initial loading animation
│   ├── styles/            # SCSS style files
│   │   ├── main.scss      # Main style entry point
│   │   └── components/    # Component-specific styles
│   ├── App.jsx            # Main application with loading state management
│   └── main.jsx           # React entry point
└── package.json           # Dependencies and scripts
```

## 🏗️ Building for Production

```
npm run build
```

The build output will be in the `dist` folder, ready for deployment.

## 🚢 Deployment

This project can be easily deployed to platforms like:

- ▲ Vercel
- 🔷 Netlify
- 🐱 GitHub Pages

Follow the platform-specific instructions for deploying a Vite application.

## 🎨 Customization

- Update the content in the component files to reflect your information
- Modify the styling in `src/styles/components/*.scss` to match your personal brand
- Replace SVG elements and images with your own designs

## 🔍 Key Design Features

- 🌓 Dark theme for project cards and contact section
- 🎬 Custom hover animations for project cards
- 🖼️ SVG background elements with proper z-indexing
- 📱 Fully responsive across all device sizes

## 🙏 Acknowledgments

- Design inspiration from modern minimalist web design trends
- Built with React 19 and Vite 6

---

_This portfolio was created with ❤️ by Vibhishan Ranga
