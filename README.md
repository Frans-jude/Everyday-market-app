# Everyday Market App

![Angular](https://img.shields.io/badge/Angular-17+-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)
![CSS](https://img.shields.io/badge/CSS3-Styling-blue?logo=css3)
![License](https://img.shields.io/badge/License-Educational-green)

A modern Angular application built using standalone components. This project was created for a school assignment and demonstrates component-based architecture, data binding, event binding, and custom styling.

---

## Screenshot

![Everyday Market App Screenshot](screenshots/Homepage.png)

---

## Features

- Custom gradient header with logo
- Product cards with images
- Clickable product selection
- Product description section
- Angular standalone components
- Responsive layout with CSS
- Dynamic product data rendering

---

## Technologies Used

- Angular 17+
- TypeScript
- HTML5
- CSS3

---

## Project Structure

```text
everyday-market-app/
├── public/
│   └── assets/
│       └── images/
│           └── logo.png
├── screenshots/
│   └── homepage.png
├── src/
│   └── app/
│       ├── shared/
│       │   └── header/
│       └── market/
│           ├── products-page/
│           ├── category-menu/
│           ├── category-menu-item/
│           └── model/
│               └── category.ts
└── README.md
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/everyday-market-app.git
cd everyday-market-app
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
ng serve
```

Open your browser and go to:

```text
http://localhost:4200
```

---

## Testing

### Test Steps Performed

1. Ran the application using `ng serve`.
2. Opened `http://localhost:4200`.
3. Verified the header displays the logo and title.
4. Confirmed all product cards are visible.
5. Clicked each product card.
6. Verified the selected product description updates.

### Commands Used

```bash
ng serve
ng g c shared/header
ng g c market/products-page
ng g c market/category-menu
ng g c market/category-menu-item
ng g interface market/model/category
```

---

## AI Assistance

I used OpenAI Codex and ChatGPT to help debug Angular issues, understand standalone components, and implement `@Input()` and `@Output()` bindings. I reviewed and understood all submitted code before submission.

---

## Author 
**Frans jude del Castillo**

---
