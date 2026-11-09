# 📈 Zerodha Kite Clone – Full Stack Stock Trading Simulator

A full-stack stock trading simulator inspired by Zerodha Kite, built using React.js, Node.js, Express.js and MongoDB. The application provides a realistic trading experience with stock watchlists, virtual funds, buy/sell order execution, portfolio tracking and JWT-based authentication.

> **Disclaimer:** This project is developed strictly for educational purposes. It is not affiliated with Zerodha. All stock prices, transactions, market data and funds are simulated. No real financial transactions take place.

---

## 🚀 Live Demo

- Live Server Status

Both services are running in the background and ready to use:

Frontend Application: http://localhost:3000
Backend API: http://localhost:5000
API Health Check: http://localhost:5000/api/health
- **GitHub Repository:** https://github.com/sneha12jyoti/ZERODHA-KITE-CLONE

---

## ✨ Key Features
ZERODHA/
├── backend/
│   ├── src/
│   │   ├── config/db.js             # Local MongoDB connection + MongoMemoryServer fallback
│   │   ├── middleware/auth.js       # JWT authorization middleware
│   │   ├── models/
│   │   │   ├── User.js              # Client schema & bcrypt password hashing
│   │   │   ├── Stock.js             # 20+ Indian stocks, OHLC, L2 Depth & Historical charts
│   │   │   ├── Watchlist.js         # 5 watchlist tabs per user
│   │   │   ├── Order.js             # CNC & MIS order execution records
│   │   │   ├── Holding.js           # Portfolio holdings with weighted average price
│   │   │   └── Transaction.js       # Financial ledger & statement
│   │   ├── routes/
│   │   │   ├── authRoutes.js        # Register, Login, Demo Login, Me
│   │   │   ├── stockRoutes.js       # Stocks, live benchmark indices, search, tick engine
│   │   │   ├── watchlistRoutes.js   # Watchlist management (add, remove, switch tabs)
│   │   │   ├── orderRoutes.js       # Buy/Sell engine with margin & holdings checks
│   │   │   ├── portfolioRoutes.js   # Holdings with live P&L and sector analytics
│   │   │   ├── fundsRoutes.js       # Margin calculations, deposit, withdraw, statement
│   │   │   └── profileRoutes.js     # User stats, name edit, and simulator reset
│   │   ├── seed.js                  # Database seeder with realistic Indian equities
│   │   └── server.js                # Express app & periodic market pulse generator
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   └── Navbar.jsx       # Header with live NIFTY 50 & SENSEX ticker
│   │   │   ├── layout/
│   │   │   │   └── TradingLayout.jsx# Split workspace (Watchlist sidebar + Content)
│   │   │   └── trading/
│   │   │       ├── Watchlist.jsx    # 5 tabs, stock search, green/red ticks, hover bar
│   │   │       ├── BuySellModal.jsx # Authentic Kite order modal (CNC/MIS, Market/Limit)
│   │   │       └── StockDetailsModal.jsx # Multi-timeframe Recharts & L2 market depth
│   │   ├── context/
│   │   │   ├── AuthContext.jsx      # JWT auth & session management
│   │   │   ├── MarketContext.jsx    # Live prices, benchmark indices & tick pulse
│   │   │   ├── ThemeContext.jsx     # Light / Dark mode persistence
│   │   │   └── ToastContext.jsx     # Order confirmation & notification alerts
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx      # Clean Zerodha public homepage
│   │   │   ├── AuthPage.jsx         # Sign up & Log in with initial demo balance selection
│   │   │   ├── DashboardPage.jsx    # Portfolio overview, asset allocation, top gainers/losers
│   │   │   ├── HoldingsPage.jsx     # Portfolio table, individual P&L, sector pie chart
│   │   │   ├── OrdersPage.jsx       # Order book with filters and execution logs
│   │   │   ├── FundsPage.jsx        # Margin breakdown, deposit, withdraw & ledger
│   │   │   └── ProfilePage.jsx      # Account stats, dark mode toggle, and reset simulator
│   │   ├── index.css                # Kite typography, signature palette & animations
│   │   └── App.jsx                  # React Router v6 setup & protected route boundaries
│   ├── vite.config.js               # Vite config with API proxy
│   └── package.json
├── README.md                        # Documentation & setup instructions
└── package.json                     # Root orchestrator scripts

### 🔐 Authentication & User Management
- Secure user registration and login.
- JWT-based authentication and authorization.
- Password hashing using bcrypt.
- Protected API routes.
- Unique client ID generation.
- User profile management.

### 📊 Stock Market Dashboard
- Live-simulated stock price updates.
- NIFTY 50 and SENSEX benchmark display.
- Interactive stock charts.
- Stock search functionality.
- Market price movements.

### ⭐ Watchlist Management
- Five independent watchlist tabs.
- Add and remove stocks.
- Duplicate stock prevention.
- Watchlist persistence using MongoDB.

### 💹 Trading & Order Management
- Virtual BUY and SELL orders.
- Market and limit order support.
- Order validation.
- Insufficient balance protection.
- Overselling prevention.
- Simulated order execution.

### 💰 Portfolio Management
- Holdings management.
- Weighted average purchase price calculation.
- Available margin tracking.
- Virtual fund deposits and withdrawals.
- Transaction history.
- Portfolio performance tracking.

### 🛡️ Security & Reliability
- Atomic MongoDB operations to prevent race conditions.
- JWT token verification.
- Password protection using bcrypt.
- Input validation and sanitization.
- Protected financial operations.
- Error handling and API validation.

### 📱 Responsive Interface
- Modern trading dashboard.
- Interactive charts.
- Responsive navigation.
- Mobile-friendly layout.

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Build Tool | Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| API | REST API |
| Charts | Recharts |
| Testing | Automated API testing, Node.js |
| Version Control | Git, GitHub |

---

## 🏗️ System Architecture

The application follows a client-server architecture.

```text
             USER
               |
               |
        REACT FRONTEND
          (Vite)
               |
               |
          REST APIs
               |
               |
       NODE.JS + EXPRESS
               |
        ----------------
        |       |      |
      Auth   Trading  Portfolio
        |       |      |
        ----------------
               |
               |
          MONGODB
               |
        ----------------
        |      |       |
      Users  Orders  Holdings
        |
     Watchlists
        |
    Transactions
        |
      Stocks
```

---



## ⚙️ Installation & Setup

### Prerequisites

Make sure you have installed:

- Node.js (v18 or higher)
- npm
- MongoDB (local installation or MongoDB Atlas)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/sneha12jyoti/ZERODHA-KITE-CLONE.git
```

### 2. Navigate to the Project

```bash
cd ZERODHA-KITE-CLONE
```

### 3. Install Backend Dependencies

```bash
npm --prefix backend install
```

### 4. Install Frontend Dependencies

```bash
npm --prefix frontend install
```

### 5. Configure Environment Variables

Create a `.env` file in the backend directory.

Configure the MongoDB connection string, JWT secret, port and other environment variables according to the backend configuration.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
NODE_ENV=development
```

For production, use secure environment variables configured through your hosting provider.

**Never commit your actual `.env` file or expose credentials on GitHub.**

### 6. Start the Backend

```bash
npm --prefix backend start
```

Backend runs on:

```text
http://localhost:5000
```

### 7. Start the Frontend

Open another terminal:

```bash
npm --prefix frontend run dev
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🔗 API Overview

The backend exposes RESTful APIs for different application functionalities.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate user |
| GET | `/api/auth/me` | Retrieve authenticated user |
| GET | `/api/watchlist` | Retrieve watchlists |
| POST | `/api/watchlist/add` | Add stock to watchlist |
| POST | `/api/watchlist/remove` | Remove stock |
| GET | `/api/portfolio/holdings` | Retrieve portfolio holdings |
| POST | `/api/orders/place` | Place BUY/SELL order |
| POST | `/api/funds/deposit` | Deposit virtual funds |
| POST | `/api/funds/withdraw` | Withdraw virtual funds |
| PUT | `/api/profile/update` | Update user profile |
| POST | `/api/profile/reset` | Reset simulator data |
| GET | `/api/health` | Check backend health |

---

## 🧪 Testing & Technical Audit

The project underwent a technical audit covering authentication, database operations, order execution, portfolio accounting, security and concurrency handling.

**Automated Testing Results:**

| Category | Result |
|---|---|
| System Health | PASS |
| JWT Authentication | PASS |
| User Registration & Login | PASS |
| Watchlist Management | PASS |
| Stock Search Sanitization | PASS |
| BUY Order Execution | PASS |
| SELL Order Execution | PASS |
| Portfolio Accounting | PASS |
| Funds Management | PASS |
| Concurrent Withdrawals | PASS |
| MongoDB Persistence | PASS |
| Frontend Production Build | PASS |

**Overall: 39 automated test assertions passed with 0 failures**, according to the project's technical audit report.

Run the audit test suite:

```bash
node audit-tests.js
```

---

## ⚠️ Simulated vs. Live Components

For transparency, the application distinguishes between simulated trading functionality and actual backend infrastructure.

| Component | Implementation |
|---|---|
| Stock Market Prices | Simulated |
| Order Matching | Simulated |
| Virtual Funds | Simulated |
| KYC Verification | Simulated |
| REST API | Real Express.js backend |
| Database | MongoDB |
| Authentication | JWT and bcrypt |
| Portfolio Accounting | Backend calculations |
| Frontend | React.js application |

The application does not connect to NSE/BSE trading infrastructure or execute real trades.

---

## 🔮 Future Improvements

- Real-time market data integration.
- Advanced candlestick chart visualization.
- Improved market depth and order book simulation.
- Background execution engine for Stop Loss and GTT orders.
- Advanced portfolio analytics.
- Enhanced trading history and reporting.
- Cloud deployment and production monitoring.

---

## 👩‍💻 Author

**K Sneha**

B.Tech – Computer Science and Engineering

NIST University, Berhampur

- GitHub: https://github.com/sneha12jyoti
- LinkedIn: https://www.linkedin.com/in/k-sneha-63ba47374

---

## ⭐ Support

If you find this project interesting, consider giving the repository a star!

Thank you for visiting **Zerodha Kite Clone**.

**Built with ❤️ using React.js, Node.js, Express.js and MongoDB.**
