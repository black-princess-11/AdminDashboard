
import React from "react";

function RecentActivity() {
    const activities = [
        { icon: "bi-person-plus", color: "success", title: "New user registered", time: "2 hours ago" },
        { icon: "bi-cart-check", color: "primary", title: "New order received", time: "4 hours ago" },
        { icon: "bi-file-earmark-text", color: "warning", title: "Report generated", time: "Yesterday" },
        { icon: "bi-gear", color: "danger", title: "Settings updated", time: "Yesterday" },
    ];

    return (
        <div className="col-12 col-xxl-4">
            <div className="card dashboard-card h-100">
                <div className="card-body p-4">
                    <h5 className="fw-bold mb-4">Recent Activity</h5>

                    {activities.map((activity) => (
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
    );
}

export default RecentActivity;
