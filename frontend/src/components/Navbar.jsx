
import React from "react";
import { useLocation } from "react-router-dom";

function Navbar({ search, setSearch, sidebarOpen, setSidebarOpen }) {
    const location = useLocation();

    const pageNames = {
        "/dashboard": "Dashboard",
        "/users": "Users",
        "/products": "Products",
        "/orders": "Orders",
        "/reports": "Reports",
        "/settings": "Settings",
    };

    const activePage = pageNames[location.pathname] || "Dashboard";

    return (
        <header className="topbar">
            <div className="d-flex align-items-center gap-3">
                <button
                    className="btn btn-light d-lg-none"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <i className="bi bi-list fs-4" />
                </button>

                <div>
                    <h5 className="mb-0 fw-bold">{activePage}</h5>
                    <small className="text-secondary">
                        Welcome back, Admin!
                    </small>
                </div>
            </div>

            <div className="d-flex align-items-center gap-3">
                <div className="input-group search-input">
                    <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-search" />
                    </span>

                    <input
                        className="form-control bg-light border-start-0"
                        type="search"
                        placeholder="Search users..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <button
                    className="btn btn-light position-relative"
                    onClick={() => alert("No new notifications.")}
                >
                    <i className="bi bi-bell fs-5" />
                    <span className="notification-dot" />
                </button>
            </div>
        </header>
    );
}

export default Navbar;
