import React from "react";
import { useNavigate } from "react-router-dom";

function RecentUsers({ users }) {
    const navigate = useNavigate();

    return (
        <div className="col-12 col-xxl-8">
            <div className="card dashboard-card">
                <div className="card-body p-0">
                    <div className="p-4 d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-0">Recent Users</h5>
                        <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => navigate("/users")}
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
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="ps-4">
                                            <div className="fw-semibold">{user.name}</div>
                                            <small className="text-secondary">{user.email}</small>
                                        </td>
                                        <td>{user.role}</td>
                                        <td>{user.status}</td>
                                        <td className="pe-4">#{String(user.id).padStart(3, "0")}</td>
                                    </tr>
                                ))}
                                {users.length === 0 && (
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
    );
}

export default RecentUsers;