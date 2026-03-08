# Admin Dashboard & Product Management System

This project is a **React-based Admin Dashboard** for managing products.
It allows administrators to add, edit, delete, and view products using **Browser Local Storage** without any backend server.

The application includes authentication pages, a responsive dashboard layout, and product management features.

---

## Project Features

### Authentication

* User Signup
* User Login
* Logout functionality
* User data stored in LocalStorage

### Admin Dashboard

* Sidebar navigation
* Dashboard overview cards
* Responsive layout

### Product Management

* Add new products
* Edit existing products
* Delete products
* Upload product image
* Search products
* Filter products by category

### All Products Page

* Products displayed in responsive grid layout
* Product image preview
* Category and price display

### Data Storage

* Uses Browser LocalStorage
* No backend or database required

---

## Technologies Used

* React.js
* JavaScript (ES6)
* HTML5
* CSS3
* Bootstrap
* React Router DOM
* LocalStorage

---

## Project Structure

```
src
│
├── components
│   └── Sidebar.js
│
├── pages
│   ├── Login.js
│   ├── Signup.js
│   ├── Dashboard.js
│   ├── Products.js
│   └── AllProducts.js
│
├── layouts
│   └── DashboardLayout.js
│
├── utils
│   └── localStorageHelper.js
│
├── App.js
└── index.js
```

---

## Installation & Setup

1. Clone the repository or download the project.

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm start
```

4. Open in browser:

```
http://localhost:3000
```

---

## Build for Production

To create a production build:

```
npm run build
```

The optimized build will be created inside the **build** folder.

---

## Application Pages

* Login Page
* Signup Page
* Admin Dashboard
* Product Management Page
* All Products Page

---

## Responsive Design

The application works on:

* Desktop
* Tablet
* Mobile

---

## Project Objective

The purpose of this project is to build a **modern Admin Dashboard using React.js** that allows administrators to manage products efficiently using **LocalStorage without a backend server**.

---

## Author

Ayesha Jamil
