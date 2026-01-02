# 💰 Money Manager - Frontend Web Application

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![React Router](https://img.shields.io/badge/React%20Router-7.9.5-CA4245?style=for-the-badge&logo=react-router)

A modern, responsive web application for managing personal finances with real-time analytics, category management, and transaction tracking.

[Features](#-features) • [Tech Stack](#-technology-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Screenshots](#-screenshots) • [Deployment](#-deployment)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Pages](#-pages)
- [State Management](#-state-management)
- [API Integration](#-api-integration)
- [Styling](#-styling)
- [Build & Deployment](#-build--deployment)
- [Environment Variables](#-environment-variables)

---

## ✨ Features

### 🔐 Authentication & Security
- ✅ User registration with email verification
- ✅ Secure login with JWT authentication
- ✅ Protected routes for authenticated users
- ✅ Automatic token management
- ✅ Profile management with photo upload

### 💼 Financial Management
- ✅ **Dashboard**: Real-time balance, income, expense overview
- ✅ **Income Tracking**: Add, view, and delete income transactions
- ✅ **Expense Tracking**: Add, view, and delete expense transactions
- ✅ **Categories**: Create and manage custom categories with emojis
- ✅ **Filtering**: Advanced search with date range, keyword, and sorting

### 📊 Analytics & Visualization
- ✅ Interactive charts (Recharts integration)
- ✅ Recent transactions list
- ✅ Financial overview cards
- ✅ Real-time balance calculation

### 📤 Export & Reporting
- ✅ Excel export for income/expense data
- ✅ Email reports with transaction details
- ✅ Download financial summaries

### 🎨 User Experience
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode compatible
- ✅ Emoji picker for categories/transactions
- ✅ Toast notifications for user feedback
- ✅ Smooth animations and transitions
- ✅ Toggleable sidebar navigation
- ✅ Loading states and error handling

---

## 🛠️ Technology Stack

### Core Framework
- **React**: 19.2.0 (Latest)
- **Vite**: 7.2.2 (Build tool)
- **React DOM**: 19.2.0
- **React Router DOM**: 7.9.5 (Navigation)

### Styling
- **Tailwind CSS**: 4.1.17
- **@tailwindcss/vite**: 4.1.17
- **Lucide React**: 0.553.0 (Icons)

### State & Data Management
- **React Context API**: Global state management
- **Axios**: 1.13.2 (HTTP client)
- **React Hot Toast**: 2.6.0 (Notifications)

### UI Components & Tools
- **Recharts**: 3.4.1 (Charts & graphs)
- **Emoji Picker React**: 4.15.0
- **Moment.js**: 2.30.1 (Date formatting)
- **XLSX**: 0.18.5 (Excel export)

### Development Tools
- **ESLint**: Code quality
- **@vitejs/plugin-react**: 5.1.0
- **Vite**: Fast development server

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

```bash
✓ Node.js (v18 or higher)
✓ npm or yarn
✓ Git
```

**Verify Installations:**
```bash
node --version   # Should show v18+
npm --version    # Should show npm version
```

---

### Installation

1. **Clone the Repository**
```bash
git clone <repository-url>
cd moneymanagerwebapp
```

2. **Install Dependencies**

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

3. **Configure Environment**

Create a `.env` file in the root directory:

```env
# Backend API URL
VITE_API_BASE_URL=http://localhost:8081/api/v1.0

# Cloudinary Configuration (for image uploads)
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

# App Configuration
VITE_APP_NAME=Money Manager
```

---

### Configuration

#### Update API Base URL

Edit `src/util/apiEndpoints.js`:

```javascript
// For Local Development
export const BASE_URL = "http://localhost:8081/api/v1.0";

// For Production
// export const BASE_URL = "https://your-backend-api.com/api/v1.0";
```

#### Cloudinary Setup (Profile Image Upload)

1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your Cloud Name
3. Create an unsigned upload preset
4. Update in `src/util/apiEndpoints.js`:

```javascript
const CLOUDINARY_CLOUD_NAME = "your_cloud_name";
```

---

### Running the Application

#### Development Mode

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

**Application will start at:** `http://localhost:5173`

#### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

#### Lint Code

```bash
npm run lint
```

---

## 📁 Project Structure

```
moneymanagerwebapp/
├── public/
│   └── _redirects                 # Netlify redirects config
├── src/
│   ├── assets/
│   │   └── assets.js             # Static assets & sidebar data
│   ├── components/
│   │   ├── AddCategoryForm.jsx   # Category creation form
│   │   ├── AddExpenseForm.jsx    # Expense creation form
│   │   ├── AddIncomeForm.jsx     # Income creation form
│   │   ├── CategoryList.jsx      # Display categories
│   │   ├── Dashboard.jsx         # Main layout wrapper
│   │   ├── DeleteAlert.jsx       # Confirmation dialog
│   │   ├── EmojiPickerPopup.jsx  # Emoji selector
│   │   ├── ExpenseList.jsx       # Expense table
│   │   ├── ExpenseOverview.jsx   # Expense analytics
│   │   ├── FinanceOverview.jsx   # Balance cards
│   │   ├── IncomeList.jsx        # Income table
│   │   ├── IncomeOverview.jsx    # Income analytics
│   │   ├── InfoCard.jsx          # Reusable info card
│   │   ├── Input.jsx             # Form input component
│   │   ├── Menubar.jsx           # Top navigation
│   │   ├── Model.jsx             # Modal wrapper
│   │   ├── ProfilePhotoSelector.jsx  # Profile image upload
│   │   ├── RecentTransactions.jsx    # Recent activity list
│   │   ├── Sidebar.jsx           # Side navigation
│   │   ├── Tansactions.jsx       # Transaction display
│   │   └── TransactionInformationCard.jsx
│   ├── context/
│   │   └── AppContext.jsx        # Global state management
│   ├── hooks/
│   │   └── useUser.jsx           # Custom user hook
│   ├── pages/
│   │   ├── Category.jsx          # Categories page
│   │   ├── Expense.jsx           # Expenses page
│   │   ├── Filter.jsx            # Filter & search page
│   │   ├── Home.jsx              # Dashboard home
│   │   ├── Income.jsx            # Income page
│   │   ├── Login.jsx             # Login page
│   │   └── Signup.jsx            # Registration page
│   ├── util/
│   │   ├── apiEndpoints.js       # API endpoint definitions
│   │   ├── axiosConfig.jsx       # Axios configuration
│   │   ├── numberFormat.js       # Number formatting utilities
│   │   ├── uploadProfileImage.js # Image upload handler
│   │   └── vlidation.js          # Form validation helpers
│   ├── App.css                   # Global styles
│   ├── App.jsx                   # Main app component
│   ├── index.css                 # Base styles
│   └── main.jsx                  # Entry point
├── .gitignore
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML template
├── netlify.toml                  # Netlify deployment config
├── package.json                  # Dependencies
├── README.md                     # This file
├── tailwind.config.js            # Tailwind configuration
└── vite.config.js                # Vite configuration
```

---

## 🧩 Components

### Core Components

#### **Dashboard.jsx**
Main layout wrapper with sidebar and menubar integration.

```jsx
<Dashboard>
  <YourPageContent />
</Dashboard>
```

#### **Menubar.jsx**
Top navigation with user menu, logout, and sidebar toggle.

Features:
- User profile dropdown
- Logout functionality
- Mobile sidebar toggle
- Responsive design

#### **Sidebar.jsx**
Side navigation with user profile and menu items.

Features:
- Toggleable visibility
- Profile photo display
- Active route highlighting
- Smooth animations

---

### Form Components

#### **AddIncomeForm.jsx** / **AddExpenseForm.jsx**
Transaction creation forms with:
- Category selection
- Amount input
- Date picker
- Emoji picker
- Form validation

#### **AddCategoryForm.jsx**
Category creation with:
- Name input
- Type selection (income/expense)
- Emoji picker
- Validation

---

### Data Display Components

#### **FinanceOverview.jsx**
Three-card display showing:
- Total Balance
- Total Income
- Total Expense

#### **RecentTransactions.jsx**
Unified list of recent income and expenses.

#### **IncomeList.jsx** / **ExpenseList.jsx**
Detailed transaction tables with:
- Category display
- Amount formatting
- Date formatting
- Delete functionality
- Excel export

---

## 📄 Pages

### **Home.jsx** (Dashboard)
- Financial overview cards
- Recent transactions
- Quick statistics
- Charts and graphs

### **Income.jsx**
- Add income form
- Income list table
- Income analytics
- Excel export

### **Expense.jsx**
- Add expense form
- Expense list table
- Expense analytics
- Excel export

### **Category.jsx**
- Create categories
- View all categories
- Edit categories
- Category type filtering

### **Filter.jsx**
- Advanced search
- Date range filtering
- Keyword search
- Sort options
- Export filtered results

### **Login.jsx** / **Signup.jsx**
- Authentication forms
- Input validation
- Error handling
- Redirect on success

---

## 🔄 State Management

### AppContext (Global State)

```jsx
const AppContext = createContext();

// State Structure
{
  user: {
    id: number,
    fullName: string,
    email: string,
    profilePictureUrl: string,
    token: string
  },
  isSidebarOpen: boolean,
  setUser: function,
  clearUser: function,
  toggleSidebar: function
}
```

### Usage

```jsx
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Component() {
  const { user, setUser, isSidebarOpen, toggleSidebar } = useContext(AppContext);
  
  // Use state
  console.log(user.fullName);
  toggleSidebar();
}
```

### Local Storage Persistence

- User data persisted automatically
- Sidebar state saved
- Token stored for API requests

---

## 🌐 API Integration

### Axios Configuration

Located in `src/util/axiosConfig.jsx`:

```javascript
// Automatic JWT token injection
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Error handling
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Redirect to login
    }
    return Promise.reject(error);
  }
);
```

### API Endpoints

All endpoints defined in `src/util/apiEndpoints.js`:

```javascript
export const API_ENDPOINTS = {
  login: `${BASE_URL}/login`,
  register: `${BASE_URL}/register`,
  getUserInfo: `${BASE_URL}/profile`,
  getAllIncomes: `${BASE_URL}/incomes`,
  addIncome: `${BASE_URL}/incomes`,
  getAllExpenses: `${BASE_URL}/expenses`,
  addExpense: `${BASE_URL}/expenses`,
  dashboard: `${BASE_URL}/dashboard`,
  // ... more endpoints
};
```

### Making API Calls

```jsx
import axios from '../util/axiosConfig';
import { API_ENDPOINTS } from '../util/apiEndpoints';

// GET request
const response = await axios.get(API_ENDPOINTS.getAllIncomes);

// POST request
const response = await axios.post(API_ENDPOINTS.addIncome, {
  name: "Salary",
  amount: 5000,
  categoryId: 1
});

// DELETE request
await axios.delete(API_ENDPOINTS.deleteIncome(incomeId));
```

---

## 🎨 Styling

### Tailwind CSS

Custom configuration in `tailwind.config.js`:

```javascript
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981'
      }
    }
  }
}
```

### Common Utility Classes

```css
/* Buttons */
.btn-primary: bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700

/* Cards */
.card: bg-white rounded-lg shadow-md p-6

/* Input */
.input: border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500
```

### Custom CSS

Global styles in `src/App.css` and `src/index.css`.

---

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

Output directory: `dist/`

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

#### Netlify

`netlify.toml` configuration:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Deploy Steps:**
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables
5. Deploy!

#### Vercel

```bash
npm install -g vercel
vercel --prod
```

#### Other Platforms
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3 + CloudFront**
- **Firebase Hosting**

---

## 🔐 Environment Variables

### Development (.env)

```env
VITE_API_BASE_URL=http://localhost:8081/api/v1.0
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

### Production

Set environment variables in your hosting platform:

- **Netlify**: Site Settings → Environment Variables
- **Vercel**: Project Settings → Environment Variables
- **Heroku**: Config Vars

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] User registration and email verification
- [ ] Login and logout
- [ ] Add/delete income transactions
- [ ] Add/delete expense transactions
- [ ] Create categories
- [ ] Dashboard analytics display
- [ ] Filter transactions
- [ ] Export to Excel
- [ ] Profile photo upload
- [ ] Responsive design (mobile, tablet, desktop)

---

## 🐛 Troubleshooting

### Common Issues

**API Connection Failed**
```bash
# Check backend is running
curl http://localhost:8081/api/v1.0/health

# Verify BASE_URL in apiEndpoints.js
```

**Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Styling Not Applied**
```bash
# Rebuild Tailwind
npm run dev
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Axios Documentation](https://axios-http.com/)

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- React Team
- Vite Team
- Tailwind CSS Team
- All open-source contributors

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ using React + Vite

</div>
