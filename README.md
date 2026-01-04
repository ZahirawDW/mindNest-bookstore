# 📚 MindNest Bookstore

A dynamic, responsive bookstore website showcasing three self-help books with seamless content switching and interactive features.


🔗 **[Live Demo](https://mindnest-bookstore.netlify.app/)**

---

## 🎯 Project Overview

MindNest is a single-page bookstore application that demonstrates dynamic content rendering without page reloads. Users can explore three different books, each with its own unique theme, pricing plans, and customer reviews.

---

## ✨ Features

- **Dynamic Content Switching**: Switch between three books instantly without page refresh
- **Theme Customization**: Each book has a unique color scheme that updates the entire site
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Form Validation**: Real-time validation with custom error messages
- **LocalStorage Integration**: Remembers your last viewed book across sessions
- **Interactive Pricing Cards**: Click any pricing button to auto-fill the contact form
- **Bootstrap Toast Notifications**: Professional success messages on form submission
- **Star Rating System**: Dynamic review ratings with full, half, and empty stars
- **Smooth Scrolling**: Enhanced navigation between sections
- **Dynamic Favicon**: Changes based on the selected book

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with modern layouts
- **Bootstrap 5**: Responsive grid system and components
- **JavaScript (ES6)**: Vanilla JS for dynamic functionality
- **Bootstrap Icons**: UI icons
- **Netlify**: Hosting and deployment

## 🔍 Code Quality & Security

This project has been analyzed with **SonarQube** to ensure production-ready code quality:

- ✅ **Quality Gate: PASSED** - Meets industry standards
- ✅ **Security Rating: A** - No critical vulnerabilities  
- ✅ **Fixed ReDoS vulnerabilities** - Secure regex patterns
- ✅ **Reduced code duplication** - Maintainable codebase
- ✅ **Added error handling** - Robust user experience

---

## 📂 Project Structure
```
mindnest-bookstore/
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── style.css
│   ├── js/
│   │   ├── bootstrap.bundle.min.js
│   │   └── script.js
│   └── images/
│       ├── book1/
│       ├── book2/
│       └── book3/
├── index.html
└── README.md
```

---

## 🚀 How It Works

### Book Data Structure
All book information is stored in a JavaScript array of objects, making it easy to add or modify books:
```javascript
const books = [
  {
    id: 1,
    title: "Whispers of the Mind",
    description: "...",
    theme: "theme-book1",
    priceCards: { ... },
    reviews: [ ... ]
  }
  // ... more books
]
```

### Dynamic Content Updates
When a user selects a book, the `showBook()` function updates:
- Page title and favicon
- Hero section content
- Pricing information
- About section details
- Customer reviews
- Overall color theme

### Form Validation
Custom validation rules ensure data quality:
- Name: 2-40 letters only
- Email: Valid email format
- Location: Valid address format
- Format selection: Required field


---

## 🎨 Color Themes

Each book has a carefully selected color palette:

- **Whispers of the Mind**: Warm browns and soft beige (#53362d, #986b5c, #ebc7ba)
- **Growth Path**: Natural greens (#102f15, #728c5a, #eaf1b1)
- **The Calm Within**: Calming blues (#0a1931, #275171, #b3cfe5)

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

---

## 🎓 What I Learned

- DOM manipulation and event handling
- LocalStorage for state persistence
- Dynamic theme switching
- Form validation patterns
- Bootstrap component integration
- Clean, maintainable code structure
- Git version control and GitHub workflows
- Code quality tools - Using SonarQube for security and maintainability

---

## 🔮 Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Implement search feature
- [ ] Add more books to the collection
- [ ] Create admin panel for book management
- [ ] Add user authentication
- [ ] Integrate payment gateway
- [ ] Add book preview/sample chapters

---

## 👤 Author

**EL-MAHJOUR Zahira**

- GitHub: [@ZahirawDW](https://github.com/ZahirawDW)
- LinkedIn: [Zahira El-Mahjour][https://www.linkedin.com/in/zahira-el-mahjour]

---


## 🙏 Acknowledgments

- **Bootstrap** team for the amazing framework
- **Netlify** for seamless hosting
- **SonarQube** for code quality analysis and security insights
- The web development community for inspiration

---

⭐ **If you like this project, please give it a star!**