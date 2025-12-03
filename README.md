# 🎮 Epic Games - Responsive Navbar

A pixel-perfect responsive navigation bar inspired by Epic Games Store, built with HTML, Tailwind CSS, and JavaScript.

## 📋 Project Overview

This project recreates the Epic Games Store navigation bar with exact specifications from the provided Figma design. The navbar is fully responsive across mobile, tablet, and desktop devices.

## ✨ Features

- **Responsive Design**: Adapts seamlessly to mobile (< 768px), tablet, and desktop devices
- **Glassy Mobile Menu**: Glassmorphism design with backdrop blur effects
- **Smooth Animations**: Slide-down/slide-up menu transitions
- **Animated Indicator**: Blue line smoothly moves between active navigation items
- **Active State Tracking**: JavaScript-powered active state management
- **Hover Effects**: Interactive hover states for all clickable elements
- **Icon Integration**: Custom SVG icons for language selector and sign-in button
- **Tailwind CSS CLI**: Production-ready build system with custom configuration
- **Clean JavaScript**: Vanilla JS for menu toggle and indicator positioning

## 🎨 Design Specifications

### Colors

- Navbar Background: `#313131`
- Page Background: `#000000`
- Primary Blue (Download/Indicator): `#007AFF`
- Text Gray: `#AAAAAA`
- White: `#FFFFFF`

### Typography

- Font Family: Poppins
- Font Weight: 500 (Medium)
- Font Size: 12px
- Line Height: 100%

### Dimensions

- Navbar Height: 42px
- Navbar Width: 1440px (max-width on desktop)
- Active Indicator: 52px × 5px

## 🛠️ Tech Stack

- **HTML5**: Semantic markup structure
- **Tailwind CSS v4.1.17**: Utility-first CSS via CLI (14.4 KB compiled)
- **JavaScript**: Vanilla JS for menu toggle and animated indicator
- **Google Fonts**: Poppins font family
- **CSS Animations**: Custom keyframes for smooth transitions
- **Glassmorphism**: Backdrop-filter blur effects

## 📁 Project Structure

```
Responsive-Navbar/
├── src/
│   ├── input.css        # Tailwind source file
│   └── output.css       # Compiled CSS (generated)
├── index.html           # Main HTML file with navbar structure
├── script.js           # JavaScript for mobile menu toggle
├── tailwind.config.js  # Tailwind CSS configuration
├── package.json        # NPM dependencies and scripts
├── logo.png           # Epic Games logo
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git (for version control)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Usama-Codez/Responsive-Navbar.git
   cd Responsive-Navbar
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build Tailwind CSS**

   ```bash
   npm run build
   ```

4. **Start development mode (watch for changes)**

   ```bash
   npm run watch
   ```

   Or use the alias:

   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server like Live Server in VS Code

### Available Scripts

- `npm run build` - Compile Tailwind CSS once
- `npm run watch` - Watch for changes and rebuild automatically
- `npm run dev` - Same as watch (alias for development)

## 🌐 Deployment

### Before Deployment

Make sure to build your CSS file:

```bash
npm run build
```

### Deploy to Netlify

1. **Via Netlify UI**

   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure build settings (leave empty for static site)
   - Click "Deploy site"

2. **Via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

### Deploy to Vercel

1. **Via Vercel UI**

   - Go to [Vercel](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

2. **Via Vercel CLI**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px

  - Hamburger menu
  - Stacked navigation items
  - Full-width buttons

- **Tablet/Desktop**: ≥ 768px
  - Horizontal navigation
  - All items visible
  - Condensed layout

## 🎯 Features Breakdown

### Navigation Links

- STORE (default active with blue indicator)
- FAQ
- HELP
- UNREAL ENGINE

### Animated Indicator

- Blue line that smoothly transitions between nav items
- Dynamic width and position calculation
- Cubic-bezier easing for smooth movement
- Responds to window resize events

### Right Section

- Language selector (globe icon)
- Sign In button (person+ icon)
- Download button (primary CTA with #007AFF background)

### Mobile Menu

- Glassy cards with backdrop blur effect
- Smooth slide-down/slide-up animations (0.4s/0.3s)
- Toggle button with hamburger/close states
- Responsive design with md: breakpoint

## 📸 Screenshots

The navbar matches the Figma design specifications:

- Desktop view: 1440px × 42px
- Active state with blue indicator
- Proper spacing and alignment
- Consistent typography

## 🔧 Customization

### Change Colors

Edit the Tailwind config in `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        "epic-dark": "#313131",
        "epic-blue": "#007AFF",
        "epic-gray": "#AAAAAA",
      },
    },
  },
};
```

Then rebuild:

```bash
npm run build
```

### Modify Links

Update navigation links in `index.html`:

```html
<a href="#your-link" class="nav-link" data-target="your-link">YOUR TEXT</a>
```

### Customize Animations

Edit animation keyframes in `src/input.css`:

```css
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Usama**

- Porfolio: [@Usama-Akram](https://usamaakram.netlify.app)
- Repository: [Responsive-Navbar](https://github.com/Usama-Codez/Responsive-Navbar)

## 🙏 Acknowledgments

- Design inspiration from Epic Games Store
- Figma design specifications provided
- Tailwind CSS for rapid development
- Google Fonts for Poppins typography

## 📞 Support

For support, please open an issue in the GitHub repository.

---

**Built with ❤️ using HTML, Tailwind CSS, and JavaScript**
