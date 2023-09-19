import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useIsAuthenticated } from 'react-auth-kit'
import Navbar from './components/Navbar.tsx'
import NotFound from './routes/NotFound.tsx'
import Register from './routes/Register.tsx'
import Login from './routes/Login.tsx'
import Logout from './routes/Logout.tsx'

const PrivateRoute = ({ Component } : { Component: React.FC }) => {
    const isAuthenticated = useIsAuthenticated();
    const auth = isAuthenticated();
    return auth ? <Component /> : <Navigate to="/login" />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider authType="cookie" authName="auth">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<PrivateRoute Component={App} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
)