# DronTrzebownisko.pl Interactive Portfolio

## Project Overview

DronTrzebownisko is an interactive web application showcasing drone photography, video editing, and videography services. It presents a comprehensive portfolio through dynamic references, personalized modals, and galleries of photos and videos. The application features location-based content filtering, multilingual support, and an interactive quiz about the Trzebownisko municipality.

## Technology Stack

### Core Technologies
- **React 18** - JavaScript library for building user interfaces
- **React Router 6** - For client-side routing
- **Vite** - Modern build tool and development server
- **SCSS/Sass** - CSS preprocessor for styling
- **Context API** - For state management (e.g., language settings)

### Dependencies
- `react-dom` - React rendering for web browsers
- `react-helmet` - For managing document head metadata
- `react-lazy-load-image-component` - For efficient image loading
- `react-lazyload` - For component lazy loading
- `react-router-dom` - For routing implementation
- `react-select` - For enhanced select components
- `react-window` - For efficient rendering of large lists

### Development Tools
- **ESLint** - For static code analysis
- **Sass** - For SCSS compilation
- **File-loader** - For loading static assets

## Project Structure

```
drontrzebownisko/
│
├── public/              # Public static assets
├── src/                 # Source code
│   ├── assets/          # Images, videos, icons
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── store/           # State management
│   │   └── language/    # Language context
│   ├── utils/           # Utility functions
│   └── main.jsx         # Application entry point
│
├── data/                # Content data files
└── docs/                # Documentation and assets
```

## Features

- **Dynamic References** - Homepage displays rotating references every three seconds, clickable for detailed view in modals
- **Language Switching** - Toggle between Polish and English interfaces with localStorage persistence
- **Custom Video Players** - Feature-rich video players with play/pause, timeline scrubbing, skip controls, and progress tracking
- **Location-based Content Filtering** - Filter photo gallery by specific locations
- **Interactive Quiz** - Educational quiz about Trzebownisko with timed questions, answer validation, and final score summary
- **Loading Animation** - Animated drone with spinning propellers during content loading
- **Responsive Design** - Optimized for various devices and screen sizes
- **Dynamic Content Loading** - All content loaded from external data files for easy updates

## Screenshots

### Website Mockup
![Website mockup](docs/assets/mockup.jpg "Website mockup")

### Features Demonstration

#### Homepage
![Homepage](docs/assets/1.gif "Homepage")

#### Portfolio Page
![Portfolio page](docs/assets/2.gif "Portfolio page")

#### Content Filtering
![Content filtering and municipality tour page](docs/assets/3.gif "Content filtering and municipality tour page")

#### Quiz Page
![Quiz page](docs/assets/4.gif "Quiz page")

#### References Page
![References page](docs/assets/5.gif "References page")

## Installation and Setup

### Prerequisites
- Node.js (v16.x or later recommended)
- npm (v8.x or later recommended)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/drontrzebownisko.git
   cd drontrzebownisko
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/`

4. **Build for production**
   ```bash
   npm run build
   ```
   Production files will be generated in the `dist/` directory

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Development Guide

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build

### Content Management

All application content is stored in JavaScript files in the `data/` directory. To update text, images, videos, or other content, modify these files directly.

### Adding Translations

The application uses a language context system defined in `src/store/language/languageContext.jsx`. Components access the current language using the `useLanguage()` hook.

### Component Structure

Components follow a modular structure with scoped SCSS modules to avoid style conflicts.

## Author

Michał Krudysz

## License

Proprietary - All rights reserved