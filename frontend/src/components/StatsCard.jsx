
import React from "react";

function StatsCard({ stats }) {
    return (
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
    );
}

export default StatsCard;
