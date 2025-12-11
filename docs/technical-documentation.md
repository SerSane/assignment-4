# Technical Documentation - Portfolio Website

## Architecture Overview

This portfolio website is built using vanilla web technologies with a focus on performance, accessibility, and modern web standards.

## File Structure

```
assignment-1/
├── index.html                    # Main HTML document
├── css/
│   └── styles.css               # Complete stylesheet with responsive design
├── js/
│   └── script.js                # Interactive functionality
├── assets/
│   └── placeholder-image-person.jpg  # Profile image asset
├── docs/
│   ├── ai-usage-report.md       # AI usage documentation
│   ├── technical-documentation.md    # This file
└── README.md                    # Project overview and setup
```

## Technical Specifications

### HTML Structure
- **Semantic HTML**: Uses proper semantic elements (`<nav>`, `<section>`)
- **Meta Tags**: Responsive viewport and character encoding
- **External Dependencies**: Font Awesome CDN for icons

### CSS Architecture
- **CSS Custom Properties**: Theme system using CSS variables
- **Flexbox & Grid**: Modern layout systems for responsive design
- **CSS Transitions**: Smooth animations and hover effects

### JavaScript Functionality
- **Vanilla JavaScript**: No external frameworks or libraries
- **DOM Manipulation**: Direct element selection and modification
- **Event Handling**: Click, scroll, and form event listeners
- **localStorage API**: Persistent theme preference storage
- **IntersectionObserver API**: Scroll-triggered animations

## Theme System Implementation

### CSS Variables
```css
:root {
    --primary-color: #2563eb;
    --background-color: #ffffff;
    /* ... other variables */
}

[data-theme="dark"] {
    --primary-color: #3b82f6;
    --background-color: #0f172a;
    /* ... dark theme overrides */
}
```

### JavaScript Theme Toggle
- Toggles `data-theme` attribute on `<body>` element
- Updates Font Awesome icons (moon ↔ sun)
- Persists preference using localStorage
- Smooth transitions via CSS

## Responsive Design

### Breakpoints
- **Desktop**: 1200px+ (default)
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Layout Systems
- **CSS Grid**: Project cards and skills sections
- **Flexbox**: Navigation, buttons, contact items
- **Responsive Images**: Object-fit for proper scaling

## Performance Considerations

### Optimization Techniques
- **Minimal Dependencies**: Only Font Awesome CDN
- **Efficient CSS**: Consolidated single stylesheet
- **Optimized Images**: Proper sizing and compression
- **Smooth Animations**: Hardware-accelerated transforms
- **Lazy Loading**: IntersectionObserver for scroll animations

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Edge
- **CSS Features**: Custom properties, Grid, Flexbox
- **JavaScript APIs**: localStorage, IntersectionObserver, smooth scrolling

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Descriptive alt text for images
- Meaningful link text and button labels
- Logical tab order for keyboard users

## External Resources

### Various external resources were utilized in the development process
- [Stack Overflow](https://stackoverflow.com/questions): Sparsly utilized to look up some specific bugs
- [CSS Documentation](http://developer.mozilla.org/en-US/docs/Web/CSS): Assisted in finding various visual effects to enhance the overall look of the website
- [HTML Color Codes](https://htmlcolorcodes.com/): Used for better color customizability
- [Cdnjs Libraries](https://cdnjs.com/libraries/font-awesome/6.0.0): Used for importing font-awesome library which contains popular used icons
- [W3schools](https://www.w3schools.com/): Used to get an overall idea on how dark/light mode toggle is implemented