
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const navigate = useNavigate();

    const menu = [
        { name: "Dashboard", path: "/dashboard", icon: "bi-grid-fill" },
        { name: "Users", path: "/users", icon: "bi-people-fill" },
        { name: "Products", path: "/products", icon: "bi-box-seam-fill" },
        { name: "Orders", path: "/orders", icon: "bi-cart-fill" },
        { name: "Reports", path: "/reports", icon: "bi-bar-chart-fill" },
        { name: "Settings", path: "/settings", icon: "bi-gear-fill" },
    ];

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <>
            {sidebarOpen && (
                <div
                    className="sidebar-overlay d-lg-none"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
                <h4 className="brand">
                    <i className="bi bi-shield-lock-fill me-2 text-info" />
                    Admin<span>Panel</span>
                </h4>

                <p className="menu-label">MAIN MENU</p>

                <nav className="nav flex-column gap-2">
                    {menu.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={() => setSidebarOpen(false)}
                        >
                            <i className={`bi ${item.icon} me-3`} />
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-bottom">
                    <div className="admin-profile">
                        <div className="avatar">AD</div>
                        <div>
                            <strong>Admin User</strong>
                            <small>Administrator</small>
                        </div>
                    </div>

                    <button className="logout-btn" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-left me-2" />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
