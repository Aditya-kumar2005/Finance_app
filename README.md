# FinVault - Personal Finance Manager

A modern, responsive React-based personal finance management application built with cutting-edge web technologies. FinVault helps you track transactions, visualize spending patterns, and manage your financial health with an intuitive dashboard.

![FinVault Dashboard](./docs/screenshot.png)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building](#building)
- [Configuration](#configuration)
- [Key Components](#key-components)
- [Approach & Architecture](#approach--architecture)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Dashboard
- **Real-time Balance Tracking**: View your current balance with animated counter
- **Financial Summary**: Quick overview of total income, expenses, and net savings
- **Balance Trend Chart**: Line chart showing balance progression over time
- **Spending by Category**: Doughnut chart visualizing expense distribution
- **Monthly Analysis**: Bar chart comparing income vs expenses by month
- **Recent Transactions**: Last 5 transactions at a glance

### Transactions Management
- **Add/Edit Transactions**: Create and modify income and expense records
- **Transaction Categories**: Pre-defined categories for income and expenses
- **Advanced Filtering**: Search, filter by type, category, and sort options
- **Export Data**: Download transactions as CSV or JSON
- **Delete Transactions**: Remove unwanted records with confirmation

### Insights
- **Financial Analytics**: Comprehensive spending analysis and trends
- **Category Breakdown**: Detailed breakdown of expenses by category
- **Period Comparison**: Compare metrics across different time periods
- **Visual Reports**: Charts and graphs for data visualization

### User Experience
- **Dark Mode**: Toggle between light and dark themes
- **Admin/User Roles**: Role-based access control (Admin vs Read-only)
- **Toast Notifications**: Real-time feedback for user actions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Polished transitions and micro-interactions
- **Local Storage**: Persistent data storage without backend

## 🛠 Tech Stack

### Frontend
- **React 19.2.4** - Modern UI library with latest hooks and features
- **Vite 8.0.3** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.2.2** - Utility-first CSS framework with dark mode support
- **Chart.js** - Powerful charting library for data visualization

### Styling & Design
- **PostCSS** - CSS processing with autoprefixer
- **DM Sans & Space Grotesk** - Professional typography
- **Font Awesome 6.5.1** - Comprehensive icon library
- **CSS Variables** - Theme management system

### Development Tools
- **Babel** - JavaScript compiler (via Vite plugin)
- **ESLint** - Code quality and consistency
- **Vite Config** - Optimized build configuration

### State Management
- **React Context API** - Global state management (Transactions, Role, Theme, Toasts)
- **useReducer** - Predictable state updates
- **Custom Hooks** - Reusable logic (useTxn, useRole, useTheme, useToast, etc.)

## 📁 Project Structure

```
my-react-app/
├── src/
│   ├── components/
│   │   ├── BalChart.jsx          # Balance trend chart
│   │   ├── CatChart.jsx          # Spending by category chart
│   │   ├── MoChart.jsx           # Monthly income vs expenses
│   │   ├── CatIcon.jsx           # Category icon component
│   │   ├── DashTab.jsx           # Dashboard tab
│   │   ├── TxnTab.jsx            # Transactions tab
│   │   ├── InsTab.jsx            # Insights tab
│   │   ├── TxnModal.jsx          # Add/edit transaction modal
│   │   ├── TxnFilters.jsx        # Transaction filters
│   │   ├── TxnRow.jsx            # Transaction list item
│   │   ├── Recent.jsx            # Recent transactions
│   │   ├── SumCard.jsx           # Summary card
│   │   ├── SumCards.jsx          # Container for summary cards
│   │   ├── Header.jsx            # Navigation header
│   │   ├── Toasts.jsx            # Toast notifications
│   │   ├── DelModal.jsx          # Delete confirmation modal
│   │   ├── Empty.jsx             # Empty state
│   │   ├── Constant.jsx          # Constants and configuration
│   │   ├── Seed.jsx              # Sample data
│   │   ├── Utilites.jsx          # Utility functions
│   │   ├── useAnimVal.jsx        # Animated value hook
│   │   ├── useChart.jsx          # Chart helper hook
│   │   ├── useFiltered.jsx       # Filtered transactions hook
│   │   ├── useInsights.jsx       # Insights data hook
│   │   ├── useSummary.jsx        # Summary calculations hook
│   │   └── useTxn.jsx            # Transaction context hook
│   ├── providers/
│   │   ├── TxnProvider.jsx       # Transaction state management
│   │   ├── RoleProvider.jsx      # User role management
│   │   ├── ThemeProvider.jsx     # Dark mode theme management
│   │   └── ToastProvider.jsx     # Toast notifications context
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   ├── main.jsx                  # Entry point
│   ├── index.css                 # Global styles & theme
│
├── public/                       # Static assets
├── index.html                    # HTML template
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint rules
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0 or higher
- **npm**: v9.0 or higher
- **Git**: For version control

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd my-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   This will install all required packages including:
   - React & React-DOM
   - Vite & build tools
   - Tailwind CSS & PostCSS
   - Chart.js for visualizations
   - Font Awesome for icons
   - ESLint for code quality

### Development

1. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at:
   - **Local**: http://localhost:5173
   - **Network**: Available on your network (check terminal output)

2. **Development features**
   - Hot Module Replacement (HMR) - Changes reflect instantly
   - Fast build times - Vite's optimized dev server
   - Source maps - Easy debugging with original source files
   - ESLint integration - Real-time code linting

### Building

1. **Create production build**
   ```bash
   npm run build
   ```
   
   This generates optimized files in the `dist/` directory:
   - Minified JavaScript
   - Optimized CSS with Tailwind purging
   - Optimized images and fonts
   - Tree-shaken dependencies

2. **Preview production build locally**
   ```bash
   npm run preview
   ```

3. **Lint code**
   ```bash
   npm run lint
   ```

## ⚙️ Configuration

### Tailwind CSS Configuration

Configured in `tailwind.config.js`:
- **Dark Mode**: Class-based switching (`.dark` class on root element)
- **Custom Fonts**: Space Grotesk (headings) + DM Sans (body)
- **Responsive Design**: Mobile-first approach
- **Content Paths**: Scans all JS/JSX files for classes

### Theme System

Global CSS variables in `src/index.css`:
- Color palette (primary, secondary, danger, warning)
- Light/dark backgrounds
- Border colors
- Text colors

```css
:root {
  --color-primary: #10B981;      /* Emerald */
  --color-secondary: #06B6D4;    /* Cyan */
  --color-tertiary: #14B8A6;     /* Teal */
}
```

### Key Constants

See `src/components/Constant.jsx`:
- Category configurations with icons and colors
- Income categories: Salary, Freelance, Investment Returns, etc.
- Expense categories: Food, Transportation, Shopping, etc.
- Storage key for localStorage

## 🏗 Approach & Architecture

### State Management Strategy

**Context API with useReducer Pattern**:
- **TxnProvider**: Manages all transaction data with reducer
- **RoleProvider**: Handles user role (Admin/User)
- **ThemeProvider**: Manages dark/light mode toggle
- **ToastProvider**: Centralized toast notification system

### Data Flow

```
User Action
    ↓
Component Event Handler
    ↓
Context Dispatch Action
    ↓
Reducer Updates State
    ↓
Components Re-render
    ↓
UI Updates
```

### Local Storage

All data persists in browser localStorage:
- Key: `finvault_v2`
- Stores: Array of transactions
- Auto-saves on every transaction change
- Fallback to seed data if localStorage unavailable

### Custom Hooks

**Logic Separation**: Custom hooks extract component logic into reusable functions:
- `useTxn()` - Access transaction context
- `useRole()` - Access role context
- `useTheme()` - Access theme context
- `useToast()` - Toast notification methods
- `useFiltered()` - Filtered and sorted transactions
- `useSummary()` - Budget calculations
- `useInsights()` - Analytics data

## 🎨 Key Components

### Dashboard Components
- **SumCard**: Shows single metric with icon and animated value
- **SumCards**: Container managing 4 summary cards with calculations
- **BalChart**: Line chart showing balance over time
- **CatChart**: Doughnut chart for spending by category
- **MoChart**: Bar chart comparing monthly income vs expenses

### Transaction Components
- **TxnTab**: Main transaction view with add/edit/delete
- **TxnModal**: Form for adding/editing transactions
- **TxnFilters**: Search, filter, sort, and export controls
- **TxnRow**: Individual transaction list item

### Layout Components
- **Header**: Navigation tabs and role/theme/access badge
- **RoBanner**: Read-only mode warning
- **Toasts**: Toast notification stack (bottom-right)
- **DelModal**: Delete confirmation dialog

## 🎯 Customization

### Adding New Categories

Edit `src/components/Constant.jsx`:
```javascript
export const CAT_CFG = {
  'Category Name': {
    icon: 'fa-icon-name',      // Font Awesome icon
    color: '#HEX_COLOR'        // Hex color code
  }
};

export const EXP_CATS = ['Category Name', ...];
```

### Changing Theme Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --color-primary: #NEW_COLOR;
  --text-light-primary: #NEW_TEXT_COLOR;
}
```

### Modifying Animations

Global animations in `src/index.css`:
- `.fu` - Fade-in animation
- `.tin` / `.tout` - Toast in/out
- `.mcon` - Modal container pop
- Adjust duration or easing functions as needed

### Adding New Features

1. Create component in `src/components/`
2. Add custom hook if needed in `src/components/useX.jsx`
3. Create provider if adding global state in `src/providers/XProvider.jsx`
4. Style using Tailwind classes and CSS variables

## 📦 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit vercel.com
   - Import from Git
   - Select repository
   - Click Deploy

### Netlify

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Drag & drop `dist/` folder to Netlify
   - Or connect Git repository

### Traditional Server

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder to server**
   - Configure server to serve `index.html` for all routes
   - Set appropriate cache headers

### Environment Variables

Create `.env` file for production configuration:
```
VITE_API_URL=https://your-api.com
VITE_APP_NAME=FinVault
```

Access in code: `import.meta.env.VITE_API_URL`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Make changes and test: `npm run dev`
4. Lint code: `npm run lint`
5. Build for production: `npm run build`
6. Commit: `git commit -m "Add amazing feature"`
7. Push: `git push origin feature/amazing-feature`
8. Open Pull Request

## 📝 Development Workflow

### Typical Day

1. **Start dev server**
   ```bash
   npm run dev
   ```

2. **Make changes** - Files auto-refresh with HMR

3. **Check for errors**
   ```bash
   npm run lint
   ```

4. **Before committing**
   ```bash
   npm run build
   ```

5. **Deploy**
   - Push to GitHub → Vercel auto-deploys

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 5173 already in use
The dev server automatically tries the next available port (5174, 5175, etc.)

### Build errors
```bash
# Clear Vite cache
rm -rf dist .vite
npm run build
```

### Chart not displaying
- Verify Chart.js is installed: `npm list chart.js`
- Check browser console for errors
- Ensure canvas elements are rendered

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Chart.js Documentation](https://www.chartjs.org)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for better financial management**

Questions or issues? Check existing issues or create a new one on GitHub.
