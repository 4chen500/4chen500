# 4chen500 - Personal Web Vitals Dashboard

A minimal React application that displays real-time Web Vitals metrics and serves as a personal portfolio component. This app is designed to be embedded into a Google Site via iframe.

## Overview

This application showcases:
- **Real-time Web Vitals monitoring** - Displays Core Web Vitals metrics as they load
- **LinkedIn integration** - Direct link to professional profile
- **Clean, minimal design** - Optimized for iframe embedding
- **Performance focused** - Built with React and modern web standards

## Features

### Web Vitals Display
- Automatically captures and displays Core Web Vitals metrics:
  - **CLS** (Cumulative Layout Shift)
  - **FID** (First Input Delay) 
  - **LCP** (Largest Contentful Paint)
  - **FCP** (First Contentful Paint)
  - **TTFB** (Time to First Byte)
- Real-time updates as metrics become available
- Clean, readable format with precise decimal values

### LinkedIn Integration
- Prominent LinkedIn profile link
- Opens in new tab for seamless navigation
- Professional branding integration

### Repository Link
- Subtle "Source" link in bottom-right corner
- Links to this GitHub repository
- Non-intrusive design that doesn't distract from main content

## Technical Details

### Architecture
- **React 19** - Modern React with latest features
- **CSS3** - Custom styling with absolute positioning
- **Web Vitals API** - Native browser performance metrics
- **Responsive Design** - Works across different screen sizes

### Iframe Integration
This app is specifically designed for embedding in Google Sites:

```html
<iframe 
  src="https://your-domain.com" 
  width="100%" 
  height="600"
  frameborder="0"
  allowfullscreen>
</iframe>
```

**Recommended iframe settings:**
- Width: 100% (responsive)
- Height: 600px minimum
- Frameborder: 0 (clean appearance)
- Allowfullscreen: true (optional)

### Performance Optimizations
- Minimal bundle size for fast loading
- Efficient Web Vitals capture
- Optimized for iframe constraints
- No external dependencies beyond React

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
git clone https://github.com/4chen500/4chen500.git
cd 4chen500
npm install
```

### Development Server
```bash
npm start
```
Runs the app at `http://localhost:3000`

### Building for Production
```bash
npm run build
```
Creates optimized build in the `static/` directory

### Testing
```bash
# Run unit tests
npm test

# Run E2E tests
npm run test:e2e

# Run E2E tests with visible browser
npm run test:e2e:headed
```

## Deployment

### Static Hosting
The app builds to static files that can be deployed to any static hosting service:

- **GitHub Pages** - Free hosting for public repos
- **Netlify** - Easy deployment with continuous integration
- **Vercel** - Optimized for React applications
- **AWS S3** - Scalable cloud hosting

### Build Output
After running `npm run build`, the following files are generated:
- `index.html` - Main HTML file
- `static/css/main.*.css` - Compiled styles
- `static/js/main.*.js` - Compiled JavaScript
- `static/js/453.*.chunk.js` - Code splitting chunk

### Google Sites Integration
1. Build the application: `npm run build`
2. Deploy the static files to your hosting service
3. In Google Sites, add an "Embed" element
4. Use the iframe code with your deployed URL
5. Adjust iframe dimensions as needed

## Configuration

### Web Vitals
The app automatically captures Web Vitals using the browser's native APIs. No configuration needed - metrics appear as they become available.

### Styling
Customize the appearance by modifying:
- `src/App.css` - Main application styles
- `src/index.css` - Global styles and resets

### LinkedIn Link
Update the LinkedIn URL in `src/App.js`:
```javascript
const href = "https://www.linkedin.com/in/your-profile/";
```

## Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+

Web Vitals API support varies by browser, but the app gracefully handles unsupported browsers.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests: `npm test && npm run test:e2e`
5. Commit changes: `git commit -m 'Add feature'`
6. Push to branch: `git push origin feature-name`
7. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **GitHub**: [4chen500](https://github.com/4chen500)
- **LinkedIn**: [Joseph Chen](https://www.linkedin.com/in/4chen500/)

---

*Built with ❤️ using React and modern web technologies*
