# 🚗 Car Rental System

A full-stack Car Rental System built using **React.js**, **Node.js**, **Express.js**, **MongoDB**, and **Firebase**. This project was developed as part of a hiring assessment task to showcase practical development, problem-solving, and full-stack skills.

---

## 🔍 Live Demo

**Client:** [https://car-sale-website-aea7c.web.app](https://car-sale-website-aea7c.web.app)\
**Server:** [https://car-sale-web-server.vercel.app](https://car-sale-web-server.vercel.app)
**Server Site Repo** [https://github.com/shakib071/Car-Sale-Website-Server-Side](https://github.com/shakib071/Car-Sale-Website-Server-Side)


---

## 🎓 Project Purpose

This project aims to build a complete Car Rental System where users can:

- Register and log in securely using Firebase Authentication and JWT.
- Add, update, and delete car listings.
- View all available cars with search and sorting features.
- Book a car and view booking status.
- Modify or cancel bookings.
- Ensure real-time availability status.

---

## 📅 Pages & Features

### Home Page

- **Banner Section** with background image/video
- **Why Choose Us**: 4 benefits shown with icons
- **Recent Listings**: Display 6-8 latest cars
- **Special Offers** with animated cards

### Available Cars Page

- Grid/List view switch
- Sorting by date & price
- Search by model or location

### Car Details Page

- Full car details
- Book Now button with confirmation modal

### Add Car (Private Route)

- Add car details with validation
- Stores user info and default values (booking count = 0)

### My Cars (Private Route)

- Tabular view of user-listed cars
- Update modal for car details
- Delete confirmation modal

### My Bookings (Private Route)

- Tabular view of all bookings
- Cancel or modify booking date

### Login/Register

- Firebase Google & Email/Password Auth
- Redirects with proper error handling

### Error Page

- 404 GIF/image with "Back to Home" button

---

## ⚖️ Admin & Backend Features

- **JWT Authentication**

  - Generated on login
  - Stored in HTTP-only cookie
  - Used to protect private APIs

- **Database**

  - MongoDB with collections for cars & bookings
  - `$inc` used to update booking count

- **Secure Server**

  - Firebase Admin SDK securely managed
  - Sensitive keys stored in `.env`

- **Sort/Search**

  - Sorting implemented in frontend
  - Search filters by model and location

---

## 🛠️ Technologies Used


## 🛠️ Frontend Dependencies

| Package                  | Purpose                                                          |
| ------------------------ | ---------------------------------------------------------------- |
| **react**                | Core React library for UI development                            |
| **react-dom**            | Entry point to the DOM for React                                 |
| **react-router**         | Client-side routing                                              |
| **axios**                | Promise-based HTTP client                                        |
| **firebase**             | Firebase Authentication and Realtime DB integration              |
| **@emotion/react**       | Library for writing css styles with JavaScript                   |
| **@tailwindcss/vite**    | Integrating TailwindCSS with Vite build tool                     |
| **tailwindcss**          | Utility-first CSS framework                                      |
| **framer-motion**        | Animation library for React                                      |
| **lottie-react**         | Render Lottie animations                                         |
| **react-icons**          | Include popular icons in your React app                          |
| **react-toastify**       | Toast notification system                                        |
| **sweetalert2**          | Popup boxes (success, error, confirmation, etc.)                 |
| **pikaday**              | Lightweight date picker                                          |
| **swiper**               | Modern mobile touch slider with hardware-accelerated transitions |
| **react-awesome-reveal** | Reveal animations for components                                 |

---

## 🛠️ Backend Dependencies

| Package            | Purpose                                                         |
| ------------------ | --------------------------------------------------------------- |
| **express**        | Web framework for building RESTful APIs                         |
| **cors**           | Enable Cross-Origin Resource Sharing                            |
| **dotenv**         | Load environment variables from a `.env` file                   |
| **mongodb**        | Official MongoDB driver for Node.js                             |
| **firebase-admin** | Manage Firebase from server side, verify tokens                 |
| **jsonwebtoken**   | Generate and verify JWT tokens                                  |
| **cookie-parser**  | Parse cookies in requests, especially useful for JWT in cookies |
| **nodemon** (dev)  | Development tool that auto-restarts the server on changes       |




## 📅 Deployment

- **Frontend** hosted on Firebase
- **Backend** hosted on Vercel
- No 404/CORS/504 errors
- Responsive across devices

---


## 🚀 Getting Started

### 1. Clone the repository

 - git clone https://github.com/shakib071/Car-Sale-Website-Client-Side.git

### 2. Then 
 - cd Car-Sale-Website-Client-Side
 - npm install
### 3. Create Authentication method with Firebase
### 4. Connect to the server
### 5. Finally 
 - npm run dev


---




## 🌟 Author

**Shakib Hasan**\
[Github](https://github.com/shakib071)

---

> ❤️ Drive Your Dreams Today!

