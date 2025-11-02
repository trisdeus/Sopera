# Sopera

**Watch addictive Indonesian dramas, 1 minute at a time.**

Sopera is a modern web-based streaming platform designed for short-form Indonesian drama content. The platform provides an engaging, mobile-first experience for users to discover and watch episodic content in bite-sized segments.

## 🌟 Features

- **Landing Page**: Eye-catching welcome screen with authentication options (Email and Google sign-in)
- **Home Feed**: Browse and discover trending Indonesian dramas
- **Video Player**: Immersive full-screen video playback experience with episode tracking
- **Search**: Find your favorite dramas quickly and efficiently
- **User Profile**: Manage your account and viewing preferences
- **Settings**: Customizable notifications, privacy controls, and help center

## 🚀 Technology Stack

- **HTML5**: Semantic markup for modern web standards
- **TailwindCSS**: Utility-first CSS framework via CDN
- **Google Fonts**: Plus Jakarta Sans and Noto Sans typography
- **Material Symbols**: Google's icon system for UI elements
- **Vanilla JavaScript**: Lightweight interactivity without framework dependencies

## 📁 Project Structure

```
Sopera/
├── index.html              # Landing/authentication page
├── pages/
│   ├── home.html          # Main feed/dashboard
│   ├── search.html        # Search interface
│   ├── profile.html       # User profile page
│   ├── videoPlayer.html   # Video playback interface
│   └── settingPages/
│       ├── notifications.html
│       ├── privacy.html
│       └── help.html
├── .gitattributes         # Git configuration for line endings
└── README.md             # This file
```

## 🎨 Design

- **Color Scheme**: Dark theme with primary red accent (#ea2a33)
- **Typography**: Plus Jakarta Sans and Noto Sans font families
- **Responsive**: Mobile-first design approach
- **Modern UI**: Glassmorphism effects, smooth transitions, and Material Design icons

## 🛠️ Installation & Setup

Since this is a static website with no build process required, setup is straightforward:

1. **Clone the repository**
   ```bash
   git clone https://github.com/trisdeus/Sopera.git
   cd Sopera
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Navigate to**
   ```
   http://localhost:8000
   ```

## 🌐 Deployment

This project can be deployed to any static hosting service:

- **GitHub Pages**: Push to `gh-pages` branch or configure in repository settings
- **Netlify**: Drag and drop the project folder or connect your repository
- **Vercel**: Import the repository and deploy with zero configuration
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Cloudflare Pages**: Connect your GitHub repository

## 📱 Usage

1. **Landing Page**: Start at `index.html` to see the welcome screen
2. **Navigate**: Click "Continue with Email" or "Continue with Google" to access the home page
3. **Browse**: Explore dramas on the home feed
4. **Search**: Use the search functionality to find specific content
5. **Watch**: Click on any drama to start watching in the video player
6. **Settings**: Access user settings and preferences from the home page

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and structure
- Ensure cross-browser compatibility
- Test on multiple devices and screen sizes
- Keep the mobile-first approach
- Maintain the dark theme aesthetic

## 📄 License

This project is available for use under the terms specified by the repository owner.

## 🔗 Links

- **Repository**: [github.com/trisdeus/Sopera](https://github.com/trisdeus/Sopera)
- **Issues**: Report bugs or request features in the [Issues](https://github.com/trisdeus/Sopera/issues) section

## 📞 Contact

For questions or support, please open an issue in the repository.

---

Made with ❤️ for Indonesian drama enthusiasts
