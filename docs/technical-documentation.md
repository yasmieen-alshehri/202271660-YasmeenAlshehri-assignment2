# Technical Documentation – Assignment 2

## 1. Technologies Used
- HTML5 for website structure
- CSS3 for styling and layout
- JavaScript for interactivity and dynamic features
- Advice Slip API for fetching a developer quote

---

## 2. Project Structure
- index.html – Main structure of the portfolio website
- css/styles.css – Styling, layout rules, and responsive design
- js/script.js – JavaScript logic for interactive features
- assets/images – Images used in the projects section
- docs – Documentation files including AI usage and technical documentation

---

## 3. Layout & Styling
- Used Flexbox and CSS Grid to organize the layout.
- Implemented CSS variables to manage theme colors.
- Organized styles into logical sections (Navbar, Hero, Projects, Contact, etc.).
- Used hover effects and transitions to improve visual interaction.

---

## 4. JavaScript Interactivity
Several interactive features were implemented using JavaScript:

- Dark/light theme toggle using CSS variables and localStorage.
- Mobile navigation menu toggle.
- Project filtering by category using data attributes.
- Project search functionality that filters cards dynamically.
- Expandable project cards that reveal additional details.
- Active navigation highlighting based on scroll position.
- A fade-up animation is used for the About section when it becomes visible during scrolling.

---

## 5. API Integration
- Integrated the **Advice Slip API** to display a developer quote in the contact section.
- Used the JavaScript `fetch()` function to retrieve data from the API.
- Implemented error handling to display a message if the API request fails.

---

## 6. Form Interaction
- Implemented a contact form with required input validation.
- Added email format validation using the HTML `pattern` attribute.
- Displayed a success message when the form is submitted.

---

## 7. Responsive Design
- Used CSS media queries to adapt the layout for smaller screens.
- Adjusted navigation behavior for mobile devices.
- Ensured images and cards scale properly across different screen sizes.

---

## 8. Code Quality
- Organized CSS into clearly labeled sections.
- Added comments to JavaScript, HTML and CSS for readability.
- Refactored code to remove unused styles and improve structure.
- Verified that the project runs without console errors.