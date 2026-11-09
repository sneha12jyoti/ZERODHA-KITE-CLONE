## Project Structure



## ✨ Key Features

### 🔐 Authentication & User Management
- Secure user registration and login.
- JWT-based authentication and authorization.
- Password hashing using bcrypt.
- Demo login functionality.
- User profile management and simulator reset.

### 📊 Stock Market Dashboard
- 20+ Indian equities with simulated market prices.
- NIFTY 50 and SENSEX benchmark tickers.
- Dynamic stock price updates through a market pulse engine.
- Stock search functionality.
- Historical stock charts with multiple timeframes.

### ⭐ Watchlist Management
- Five independent watchlist tabs per user.
- Add, remove and switch between watchlist tabs.
- Dynamic green/red price indicators.
- Persistent watchlists using MongoDB.

### 💹 Trading & Order Management
- Simulated BUY and SELL order execution.
- CNC and MIS order types.
- Market and Limit orders.
- Margin and holdings validation.
- Order book with execution records.
- Overselling and insufficient balance protection.

### 💰 Portfolio Management
- Holdings management.
- Weighted average purchase price calculation.
- Live profit and loss tracking.
- Sector-wise portfolio analytics.
- Asset allocation and portfolio overview.

### 💳 Funds Management
- Virtual funds deposit and withdrawal.
- Available margin calculations.
- Financial transaction ledger.
- Transaction statement and history.

### 🎨 User Interface
- Zerodha Kite-inspired trading interface.
- Interactive Recharts visualizations.
- Light and Dark mode.
- Responsive trading workspace.
- Toast notifications for order confirmations.
- Stock details modal with market depth visualization.

---

## 🏗️ Project Structure

```text
ZERODHA/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Stock.js
│   │   │   ├── Watchlist.js
│   │   │   ├── Order.js
│   │   │   ├── Holding.js
│   │   │   └── Transaction.js
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── stockRoutes.js
│   │   │   ├── watchlistRoutes.js
│   │   │   ├── orderRoutes.js
│   │   │   ├── portfolioRoutes.js
│   │   │   ├── fundsRoutes.js
│   │   │   └── profileRoutes.js
│   │   │
│   │   ├── seed.js
│   │   └── server.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   └── Navbar.jsx
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   └── TradingLayout.jsx
│   │   │   │
│   │   │   └── trading/
│   │   │       ├── Watchlist.jsx
│   │   │       ├── BuySellModal.jsx
│   │   │       └── StockDetailsModal.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── MarketContext.jsx
│   │   │   ├── ThemeContext.jsx
│   │   │   └── ToastContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── AuthPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── HoldingsPage.jsx
│   │   │   ├── OrdersPage.jsx
│   │   │   ├── FundsPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   │
│   │   ├── index.css
│   │   └── App.jsx
│   │
│   ├── vite.config.js
│   └── package.json
│
├── README.md
└── package.json
```

### 🧪 Technical Audit

The application underwent automated testing covering:

- Authentication and authorization.
- MongoDB persistence.
- Watchlist management.
- BUY/SELL order execution.
- Weighted average price calculations.
- Funds management.
- Concurrent transaction handling.
- Input validation and security.
- Frontend production build.


