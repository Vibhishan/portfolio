# Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite. This portfolio showcases professional experience, projects, and contact information with a clean, minimalist design aesthetic.

## Live Demo

[Portfolio Website](https://vibhishanranga.com)

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist design with carefully crafted animations and transitions
- **Section-Based Structure**:
  - **Introduction**: Personal greeting with decorative SVG elements
  - **Projects**: Showcase of personal and professional projects
  - **Experience**: Interactive timeline showing professional background
  - **Contact**: Contact form and information

## Tech Stack

- **React 19**: Latest version of the React library for building user interfaces
- **Vite**: Next-generation frontend tooling for fast development and optimized builds
- **SCSS**: Advanced CSS preprocessing for maintainable styling
- **Modern JavaScript (ES6+)**: Utilizing latest JavaScript features

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/portfolio.git
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

## Project Structure

```
portfolio/
├── public/                # Static files
├── src/                   # Source files
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # React components
│   │   ├── NavBar.jsx     # Navigation bar
│   │   ├── Introduction.jsx # Hero section
│   │   ├── Projects.jsx   # Projects section
│   │   ├── Experience.jsx # Timeline section
│   │   └── Contact.jsx    # Contact section
│   ├── styles/            # SCSS style files
│   │   └── components/    # Component-specific styles
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Entry point
└── package.json           # Dependencies and scripts
```

## Building for Production

```
npm run build
```

The build output will be in the `dist` folder, ready for deployment.

## Deployment

This project can be easily deployed to platforms like:

- Vercel
- Netlify
- GitHub Pages

Follow the platform-specific instructions for deploying a Vite application.

## Customization

- Update the content in the component files to reflect your information
- Modify the styling in `src/styles/components/*.scss` to match your personal brand
- Replace SVG elements and images with your own designs

## Acknowledgments

- Design inspiration from modern minimalist web design trends
- Built with React 19 and Vite 6

---

_This portfolio was built by [Your Name] - [Your Website/GitHub/LinkedIn]_
