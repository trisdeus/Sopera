# Sopera

Watch addictive Indonesian dramas, 1 minute at a time.

Sopera is a static, mobile-first web streaming UI focused on short-form and episodic Indonesian drama content. The interface is built with semantic HTML, a compact CSS theme, and vanilla JavaScript — no build step required.

## 🌟 Features

- **Landing / library** with hero video and curated rows (Untuk Kamu, Romantis, Drama, Horor, Slice of Life)
- **Short Form feed**: vertically scrollable short videos (short-form container)
- **Video modal**: full-screen / centered modal with video playback, metadata, like/dislike, share and comments
- **Account area**: profile, subscription badge and navigation into settings
- **Settings area** split into sub-pages: General (settings), Privacy, Payment, About, Help
- **Mobile-first responsive dark theme** with glassy accents and gradient placeholders

## 🚀 Technology Stack

- **HTML5**: Semantic markup for modern web standards
- **CSS**: Single `styles.css` file, mobile-first and responsive
- **Vanilla JavaScript**: `main.js` for UI state, tabs, modal, short-form population and comments
- No framework or build tools required

## 📁 Project Structure

```
Sopera/
├── index.html            # Single-page UI: library, short form, accounts, settings sub-pages and video modal
├── styles.css            # All styles (dark theme, responsive layouts, gradients)
├── main.js               # UI logic: populate rows, short-form, tabs, modal, likes/comments/share
└── README.md             # This file
```

## 🛠️ Installation & Setup

Since this is a static website with no build process required, setup is straightforward:

1. **Clone the repository**

   ```bash
   git clone https://github.com/trisdeus/Sopera.git
   cd Sopera
   ```

2. **Serve locally (no build)**:

   - **Python:**
     ```bash
     python -m http.server 8000
     ```
   - **Node (http-server):**
     ```bash
     npx http-server
     ```
   - **PHP:**
     ```bash
     php -S localhost:8000
     ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📱 Usage

- Use the bottom tab bar to switch between Library, Short Form, and Account.
- Tap a movie card or "Putar" to open the video modal. In the modal you can play/pause, like/dislike, share, and post comments.
- Account → Pengaturan opens settings; sub-items navigate into Privacy, Payment, About and Help views.
- Short Form feed snaps vertically per item for a quick short-video experience.

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
