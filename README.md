# Billy Labay — Portfolio

Personal portfolio built with **React + Vite + Tailwind CSS**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed nav with dark/light toggle + mobile menu
│   ├── Hero.jsx         # About / landing section
│   ├── Experience.jsx   # Career timeline
│   ├── Projects.jsx     # Project cards
│   ├── Skills.jsx       # Skills, certifications, education
│   ├── Contact.jsx      # Contact links & CTA
│   ├── Footer.jsx       # Footer
│   └── FadeIn.jsx       # Scroll-triggered fade-in wrapper
├── hooks/
│   ├── useInView.js     # IntersectionObserver hook
│   └── useTheme.js      # Dark/light mode toggle
├── data/
│   └── index.js         # All data
├── App.jsx
├── main.jsx
└── index.css            # CSS variables, animations, global styles
```

## 🛠️ Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Google Fonts (Syne, Plus Jakarta Sans, Fira Code)
- Devicon
