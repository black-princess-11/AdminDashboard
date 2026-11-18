
import React from "react";
import { useOutletContext } from "react-router-dom";

function Users() {
    const { search } = useOutletContext();

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
        <div className="card dashboard-card">
            <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Users Management</h4>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.status}</td>
                                </tr>
                            ))}

                            {filteredUsers.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Users;
