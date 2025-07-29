# 🛡️ 2025 Ethical Pen Testing Hardware Arsenal Infographic

A modern, interactive web infographic showcasing the essential hardware tools for ethical penetration testing and security assessment in 2025. Built with vanilla JavaScript, CSS3, and Font Awesome icons for a beautiful, responsive user experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![CSS](https://img.shields.io/badge/CSS-3-blue.svg)

## 🚀 Features

### Interactive Elements
- **Live Search**: Real-time filtering with debounced input
- **Category Filters**: Quick access to USB, Wireless, RF/Counter, Physical, Network, and Emerging tools
- **View Modes**: Toggle between grid and list layouts
- **Dark/Light Theme**: Persistent theme selection with smooth transitions
- **Keyboard Shortcuts**: 
  - `Ctrl/Cmd + K`: Focus search
  - `1-7`: Quick filter by category
  - `Escape`: Clear search

### Content Sections
- **50+ Hardware Tools**: Comprehensive coverage of pen testing equipment
- **Price Ranges**: Beginner ($500-1,500), Professional ($5,000-7,000), Enterprise ($15,000+)
- **Platform Compatibility Matrix**: Android, Chrome OS, iOS, Windows, Linux support
- **Legal & Training Information**: Professional guidance and certification details
- **Tool Details**: Prices, features, specifications, and compatibility

### Design Features
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Smooth Animations**: Fade, slide, and pulse effects
- **Modern UI**: Gradient headers, card-based layout, professional color scheme
- **Accessibility**: ARIA labels, keyboard navigation, high contrast support
- **Print-Friendly**: Optimized styles for printing

## 📁 Project Structure

```
pentest-hardware-infographic/
│
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and animations
├── js/
│   └── scripts.js      # Interactive functionality
├── README.md           # This file
└── LICENSE            # MIT License (optional)
```

## 🛠️ Installation

1. **Clone or Download** the repository:
```bash
git clone https://github.com/yourusername/pentest-hardware-infographic.git
cd pentest-hardware-infographic
```

2. **No Build Process Required!** This is a vanilla JavaScript project with no dependencies.

3. **Open in Browser**:
   - Double-click `index.html` or
   - Use a local server (recommended):
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html → "Open with Live Server"
```

## 🎯 Usage

### Basic Navigation
1. **Browse Tools**: Scroll through the grid of hardware tools
2. **Search**: Type in the search box to filter by name or features
3. **Filter**: Click category buttons to show specific tool types
4. **Change View**: Toggle between grid and list layouts
5. **Switch Theme**: Click the moon/sun icon for dark/light mode

### Tool Categories
- **🔌 USB Attack**: Rubber Ducky, Bash Bunny, O.MG Cable
- **📡 Wireless**: WiFi Pineapple, HackRF One, ESP32 devices
- **📻 RF/Counter**: RAKSA iDet, SpyFinder Pro, DD1207
- **🔑 Physical**: Flipper Zero, Proxmark3, Lock picks
- **🌐 Network**: LAN Turtle, EndaceProbe, TAPs
- **🚀 Emerging**: M1 Device, BUG Device, CapibaraZero

### Advanced Features

#### JavaScript API
The page exposes a global `pentestTools` object for programmatic control:

```javascript
// Filter by category
pentestTools.filterByCategory('wireless');

// Search for tools
pentestTools.searchTools('flipper');

// Toggle theme
pentestTools.toggleTheme();

// Change view
pentestTools.setView('list');
```

#### Customization
Modify CSS variables in `:root` for easy theming:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #7c3aed;   /* Accent color */
    --bg-primary: #ffffff;        /* Background color */
    --text-primary: #111827;      /* Text color */
}
```

## 🔧 Technical Details

### Performance
- **Debounced Search**: 300ms delay for optimal performance
- **Lazy Animations**: Staggered animations on scroll
- **Efficient Filtering**: CSS-based hide/show for smooth transitions
- **LocalStorage**: Minimal usage for theme preference

### Browser Support
- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

### Dependencies
- **Font Awesome 6.5.1**: Icon library (CDN)
- No other external dependencies!

## 📊 Tool Database

The infographic includes detailed information for each tool:
- **Pricing**: Current market prices (2025)
- **Features**: Key capabilities and specifications
- **Compatibility**: Platform support matrix
- **Categories**: Organized by primary function
- **Badges**: Visual indicators (Popular, Premium, New, etc.)

## 🎨 Styling Guide

### Color Scheme
- **Primary**: #2563eb (Blue)
- **Secondary**: #7c3aed (Purple)
- **Accent**: #06b6d4 (Cyan)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Amber)
- **Danger**: #ef4444 (Red)

### Typography
- **Font**: System font stack for optimal performance
- **Headings**: 3rem (main), 2rem (sections), 1.5rem (cards)
- **Body**: 1rem with 1.6 line-height

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-tool`)
3. Commit changes (`git commit -am 'Add new tool'`)
4. Push to branch (`git push origin feature/new-tool`)
5. Open a Pull Request

### Adding New Tools
To add a new tool, edit the HTML and add a new `.tool-card` div:

```html
<div class="tool-card" data-category="category-name" data-price="price-number">
    <div class="tool-header">
        <i class="fas fa-icon-name tool-icon"></i>
        <span class="tool-badge">Badge Text</span>
    </div>
    <h3 class="tool-name">Tool Name</h3>
    <div class="tool-price">$Price Range</div>
    <div class="tool-features">
        <div class="feature"><i class="fas fa-check"></i> Feature 1</div>
        <div class="feature"><i class="fas fa-check"></i> Feature 2</div>
    </div>
    <div class="tool-stats">
        <div class="stat-item">
            <i class="fas fa-icon"></i>
            <span>Stat Text</span>
        </div>
    </div>
</div>
```

## 📝 License

This project is licensed under the MIT License - see below:

```
MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## ⚖️ Legal Disclaimer

This infographic is for **educational and professional security testing purposes only**. Users must:
- Obtain proper written authorization before using any tools
- Comply with all applicable laws and regulations
- Use tools only for legitimate security testing
- Maintain appropriate insurance and certifications

**The authors are not responsible for any misuse of the information provided.**

## 🔗 Resources

### Official Tool Websites
- [Hak5](https://shop.hak5.org/) - USB Rubber Ducky, WiFi Pineapple, Bash Bunny
- [Flipper Zero](https://flipperzero.one/) - Multi-tool device
- [Lab401](https://lab401.com/) - European pen testing equipment
- [Proxmark](https://proxmark.com/) - RFID/NFC tools

### Learning Resources
- [OSCP Certification](https://www.offensive-security.com/pwk-oscp/)
- [Kali Linux](https://www.kali.org/)
- [TOOOL](https://toool.us/) - The Open Organisation of Lockpickers

### Communities
- [r/pentesting](https://reddit.com/r/pentesting)
- [r/AskNetsec](https://reddit.com/r/AskNetsec)
- [Null Byte](https://null-byte.wonderhowto.com/)

## 📞 Support

For questions, issues, or suggestions:
1. Open an issue on GitHub
2. Check existing issues for solutions
3. Review the code comments for implementation details

## 🎯 Roadmap

Future enhancements planned:
- [ ] Tool comparison feature
- [ ] Budget calculator
- [ ] Export to PDF functionality
- [ ] Multi-language support
- [ ] API integration for live pricing
- [ ] User reviews and ratings
- [ ] Mobile app version

## 💡 Credits

- **Design & Development**: Dennis Smaltz
- **Icons**: Font Awesome 6.5.1
- **Data Sources**: Industry research and vendor specifications
- **Inspiration**: Security community and pen testing professionals

---
