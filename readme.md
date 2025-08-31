# 📦 Order Processing System with OTP Verification

A full-stack **Order Processing System** built with **React, Node.js, Express, and MongoDB**, featuring **OTP verification** for secure order confirmation. This project demonstrates authentication, product ordering, OTP-based verification, and order tracking.

---

## 🚀 Features

* 🔐 **User Authentication** (Signup/Login with JWT)
* 🛒 **Product Catalog** – Browse and select products
* 📩 **OTP Verification** – Orders require OTP confirmation
* 📊 **Order Management** – Place, confirm, and track orders
* 💳 **Payment Simulation** – Mock payment flow with status updates
* 📱 **Responsive UI** – Works on desktop & mobile

---

## 🛠 Tech Stack

**Frontend:**

* React.js
* Axios (API calls)
* TailwindCSS (UI Styling)

**Backend:**

* Node.js + Express.js
* MongoDB + Mongoose
* JWT Authentication
* Nodemailer (Email OTP Service)

**Database:**

* MongoDB (Atlas or local)

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
 git clone https://github.com/yourusername/order-processing-otp.git
 cd order-processing-otp
```

### 2️⃣ Backend Setup

```bash
 cd server
 npm install
```

* Create a `.env` file in `server/` with the following:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

* Run backend:

```bash
 npm start
```

### 3️⃣ Frontend Setup

```bash
 cd client
 npm install
 npm run dev
```

The app will be live at `http://localhost:5173/`

---

## 📂 Project Structure

```
order-processing-otp/
│── client/                # Frontend (React)
│   ├── src/
│   │   ├── components/    # Reusable UI Components
│   │   ├── pages/         # Main pages (Login, Signup, Orders)
│   │   ├── App.jsx        # Root Component
│   │   └── main.jsx       # Entry Point
│   └── package.json
│
│── server/                # Backend (Node + Express)
│   ├── models/            # Mongoose Models (User, Order)
│   ├── routes/            # API Routes
│   ├── controllers/       # Business Logic
│   ├── utils/             # OTP + Email Helpers
│   ├── server.js          # Main Entry
│   └── package.json
│
│── README.md
│── .gitignore
```

---

## 🔑 API Endpoints

### Auth Routes

* `POST /api/auth/signup` – Register new user
* `POST /api/auth/login` – Login user

### Order Routes

* `POST /api/orders/create` – Create new order
* `POST /api/orders/verify` – Verify OTP for order
* `GET /api/orders` – Get user orders

---

## 📸 Screenshots

* **Signup/Login Page**
* **Product List Page**
* **OTP Verification Screen**
* **Order Tracking Dashboard**

---

## 🧑‍💻 Contribution

Contributions are welcome! Follow these steps:

1. Fork repo
2. Create feature branch
3. Commit changes
4. Open Pull Request

---

## 📜 License

MIT License © 2025 Your Name
