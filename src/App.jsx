import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from "./pages/Home.jsx";
import Income from "./pages/Income.jsx";
import Expense from "./pages/Expense.jsx";
import Category from "./pages/Category.jsx";
import Filter from "./pages/Filter.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

// Protected Route component - only allows authenticated users
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    
    return children;
};

// Public Route component - redirects authenticated users to dashboard
const PublicRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }
    
    return children;
};

const App = () => {
    return (
        <>
            <Toaster />
            <BrowserRouter>
                <Routes>
                    {/* Root - redirect based on auth status */}
                    <Route path="/" element={<Root />} />
                    
                    {/* Public routes - only accessible when NOT logged in */}
                    <Route path="/login" element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    } />
                    <Route path="/signup" element={
                        <PublicRoute>
                            <Signup />
                        </PublicRoute>
                    } />
                    
                    {/* Protected routes - only accessible when logged in */}
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } />
                    <Route path="/income" element={
                        <ProtectedRoute>
                            <Income />
                        </ProtectedRoute>
                    } />
                    <Route path="/expense" element={
                        <ProtectedRoute>
                            <Expense />
                        </ProtectedRoute>
                    } />
                    <Route path="/category" element={
                        <ProtectedRoute>
                            <Category />
                        </ProtectedRoute>
                    } />
                    <Route path="/filter" element={
                        <ProtectedRoute>
                            <Filter />
                        </ProtectedRoute>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

const Root = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return isAuthenticated ? (
        <Navigate to="/dashboard" replace />
    ) : (
        <Navigate to="/login" replace />
    );
}

export default App