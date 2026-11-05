
import React, { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menu = [
    { name: "Dashboard", icon: "bi-grid-fill" },
    { name: "Users", icon: "bi-people-fill" },
    { name: "Products", icon: "bi-box-seam-fill" },
    { name: "Orders", icon: "bi-cart-fill" },
    { name: "Reports", icon: "bi-bar-chart-fill" },
    { name: "Settings", icon: "bi-gear-fill" },
  ];

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
    <div className="d-flex admin-layout">
      {sidebarOpen && (
        <div
          className="sidebar-overlay d-lg-none"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <h4 className="brand">
          <i className="bi bi-shield-lock-fill me-2 text-info" />
          Admin<span>Panel</span>
        </h4>

        <p className="menu-label">MAIN MENU</p>

        <nav className="nav flex-column gap-2">
          {menu.map((item) => (
            <button
              key={item.name}
              className={`nav-link ${activePage === item.name ? "active" : ""}`}
              onClick={() => {
                setActivePage(item.name);
                setSidebarOpen(false);
              }}
            >
              <i className={`bi ${item.icon} me-3`} />
              {item.name}
            </button>
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

          <button
            className="logout-btn"
            onClick={() => alert("Connect your logout function here.")}
          >
            <i className="bi bi-box-arrow-left me-2" /> Logout
          </button>
        </div>
      </aside>

      {/* Main section */}
      <main className="main-area flex-grow-1">
        {/* Top navbar */}
        <header className="topbar">
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn btn-light d-lg-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <i className="bi bi-list fs-4" />
            </button>

            <div>
              <h5 className="mb-0 fw-bold">{activePage}</h5>
              <small className="text-secondary">Welcome back, Admin!</small>
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
              aria-label="Notifications"
              onClick={() => alert("No new notifications.")}
            >
              <i className="bi bi-bell fs-5" />
              <span className="notification-dot" />
            </button>
          </div>
        </header>

        <div className="dashboard-content">
          {activePage === "Dashboard" ? (
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
                  onClick={() => setActivePage("Reports")}
                >
                  <i className="bi bi-download me-2" />
                  View Reports
                </button>
              </div>

              {/* Statistics */}
              <div className="row g-3 mb-4">
                {stats.map((stat) => (
                  <div className="col-12 col-sm-6 col-xl-3" key={stat.title}>
                    <div className="card stat-card h-100">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="text-secondary">{stat.title}</span>
                          <div className={`stat-icon ${stat.color}`}>
                            <i className={`bi ${stat.icon}`} />
                          </div>
                        </div>
                        <h3 className="fw-bold mb-2">{stat.value}</h3>
                        <small className={stat.change.startsWith("-") ? "text-danger" : "text-success"}>
                          <i className={`bi ${stat.change.startsWith("-") ? "bi-graph-down-arrow" : "bi-graph-up-arrow"} me-1`} />
                          {stat.change}
                          <span className="text-secondary"> from last month</span>
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row g-4 mb-4">
                {/* Sales chart */}
                <div className="col-12 col-xl-7">
                  <div className="card dashboard-card h-100">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between mb-4">
                        <div>
                          <h5 className="fw-bold mb-1">Revenue Overview</h5>
                          <small className="text-secondary">Weekly performance</small>
                        </div>
                        <span className="badge text-bg-primary">This week</span>
                      </div>

                      <div className="chart">
                        {[45, 65, 50, 80, 60, 90, 72].map((height, index) => (
                          <div className="chart-item" key={index}>
                            <div
                              className="chart-bar"
                              style={{ height: `${height}%` }}
                              title={`${height} units`}
                            />
                            <small>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}</small>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order summary */}
                <div className="col-12 col-xl-5">
                  <div className="card dashboard-card h-100">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-4">Order Summary</h5>

                      {[
                        { label: "Completed", value: 68, color: "success" },
                        { label: "Pending", value: 20, color: "warning" },
                        { label: "Cancelled", value: 12, color: "danger" },
                      ].map((item) => (
                        <div className="mb-4" key={item.label}>
                          <div className="d-flex justify-content-between mb-2">
                            <span>{item.label}</span>
                            <strong>{item.value}%</strong>
                          </div>
                          <div className="progress" style={{ height: 8 }}>
                            <div
                              className={`progress-bar bg-${item.color}`}
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Users table and activity */}
              <div className="row g-4">
                <div className="col-12 col-xxl-8">
                  <div className="card dashboard-card">
                    <div className="card-body p-0">
                      <div className="p-4 d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-0">Recent Users</h5>
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => setActivePage("Users")}
                        >
                          View All
                        </button>
                      </div>

                      <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                          <thead className="table-light">
                            <tr>
                              <th className="ps-4">User</th>
                              <th>Role</th>
                              <th>Status</th>
                              <th className="pe-4">ID</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredUsers.map((user) => (
                              <tr key={user.id}>
                                <td className="ps-4">
                                  <div className="fw-semibold">{user.name}</div>
                                  <small className="text-secondary">{user.email}</small>
                                </td>
                                <td>{user.role}</td>
                                <td>
                                  <span className={`badge ${
                                    user.status === "Active"
                                      ? "text-bg-success"
                                      : user.status === "Pending"
                                      ? "text-bg-warning"
                                      : "text-bg-secondary"
                                  }`}>
                                    {user.status}
                                  </span>
                                </td>
                                <td className="pe-4">#{String(user.id).padStart(3, "0")}</td>
                              </tr>
                            ))}
                            {filteredUsers.length === 0 && (
                              <tr>
                                <td colSpan="4" className="text-center py-4">
                                  No users found.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-xxl-4">
                  <div className="card dashboard-card h-100">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-4">Recent Activity</h5>

                      {[
                        { icon: "bi-person-plus", color: "success", title: "New user registered", time: "2 hours ago" },
                        { icon: "bi-cart-check", color: "primary", title: "New order received", time: "4 hours ago" },
                        { icon: "bi-file-earmark-text", color: "warning", title: "Report generated", time: "Yesterday" },
                        { icon: "bi-gear", color: "danger", title: "Settings updated", time: "Yesterday" },
                      ].map((activity) => (
                        <div className="activity-item" key={activity.title}>
                          <div className={`activity-icon ${activity.color}`}>
                            <i className={`bi ${activity.icon}`} />
                          </div>
                          <div>
                            <div className="fw-semibold">{activity.title}</div>
                            <small className="text-secondary">{activity.time}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="card dashboard-card">
              <div className="card-body p-5 text-center">
                <i className="bi bi-folder2-open display-4 text-primary" />
                <h4 className="mt-3">{activePage}</h4>
                <p className="text-secondary mb-0">
                  Add your {activePage.toLowerCase()} management content here.
                </p>
                {activePage === "Users" && (
                  <div className="table-responsive mt-4 text-start">
                    <table className="table table-hover">
                      <thead>
                        <tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr>
                      </thead>
                      <tbody>
                        {filteredUsers.map((user) => (
                          <tr key={user.id}>
                            <td>{user.name}</td><td>{user.email}</td>
                            <td>{user.role}</td><td>{user.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          <footer className="text-center text-secondary py-4 small">
            © 2026 AdminPanel. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
