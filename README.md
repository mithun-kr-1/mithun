# Mithun K R - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, education, and experience.

## Features

- 🎨 Modern and attractive UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations and transitions
- 🎯 Easy navigation with smooth scrolling
- 🌈 Beautiful gradient effects

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
mithunkrp/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Activities.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

To update your portfolio:

1. **Social Links**: Edit the links in `Hero.jsx` and `Contact.jsx`
2. **Content**: Update the content in respective component files
3. **Colors**: Modify the color scheme in `tailwind.config.js`
4. **Profile Photo**: Add your photo to the `public` folder and reference it in `Hero.jsx`

## Notes

- Update the social media links with your actual profiles
- Add your portfolio link when available
- Consider adding a profile photo for a more personal touch
- Update project links if you have live demos or GitHub repositories

## License

This project is open source and available for personal use.

