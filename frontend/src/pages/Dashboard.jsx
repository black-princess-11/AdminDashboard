
import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import StatsCard from "../components/StatsCard";
import RevenueChart from "../components/RevenueChart";
import OrderSummary from "../components/OrderSummary";
import RecentUsers from "../components/RecentUsers";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {
    const navigate = useNavigate();
    const { search } = useOutletContext();

    const stats = [
        { title: "Total Users", value: "1,248", change: "+12.5%", icon: "bi-people-fill", color: "primary" },
        { title: "Total Revenue", value: "$12,560", change: "+8.2%", icon: "bi-currency-dollar", color: "success" },
        { title: "Total Orders", value: "356", change: "+15.3%", icon: "bi-cart-fill", color: "warning" },
        { title: "Pending Orders", value: "24", change: "-3.4%", icon: "bi-clock-fill", color: "danger" },
    ];

    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
        { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Editor", status: "Pending" },
        { id: 4, name: "Sarah Wilson", email: "sarah@example.com", role: "User", status: "Active" },
        { id: 5, name: "David Miller", email: "david@example.com", role: "User", status: "Inactive" },
    ];

    const filteredUsers = users.filter((user) =>
        `${user.name} ${user.email} ${user.role}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <>
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                <div>
                    <h3 className="fw-bold mb-1">Dashboard Overview</h3>
                    <p className="text-secondary mb-0">
                        Here's what's happening with your business today.
                    </p>
                </div>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/reports")}
                >
                    <i className="bi bi-download me-2" />
                    View Reports
                </button>
            </div>

            <StatsCard stats={stats} />

            <div className="row g-4 mb-4">
                <RevenueChart />
                <OrderSummary />
            </div>

            <div className="row g-4">
                <RecentUsers users={filteredUsers} />
                <RecentActivity />
            </div>
        </>
    );
}

export default Dashboard;
