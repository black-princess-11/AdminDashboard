
import React from "react";

import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import AdminLayout from "./components/AdminLayout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
    return (
        <Routes>

            {/* Login Page */}
            <Route path="/login" element={<Login />} />

            {/* Admin Layout */}
            <Route path="/" element={<AdminLayout />}>

                <Route
                    index
                    element={<Navigate to="/dashboard" replace />}
                />

                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="products" element={<Products />} />
                <Route path="orders" element={<Orders />} />
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />

            </Route>

            {/* Invalid URL */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />

        </Routes>
    );
}

export default App;
