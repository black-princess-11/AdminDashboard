
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AdminLayout() {
    const [search, setSearch] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="d-flex admin-layout">
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <main className="main-area flex-grow-1">
                <Navbar
                    search={search}
                    setSearch={setSearch}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <div className="dashboard-content">
                    <Outlet context={{ search }} />
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default AdminLayout;
