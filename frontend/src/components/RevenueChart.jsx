
import React from "react";

function RevenueChart() {
    const chartData = [45, 65, 50, 80, 60, 90, 72];
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
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
                        {chartData.map((height, index) => (
                            <div className="chart-item" key={index}>
                                <div
                                    className="chart-bar"
                                    style={{ height: `${height}%` }}
                                    title={`${height} units`}
                                />
                                <small>{days[index]}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RevenueChart;
