
import React from "react";

function OrderSummary() {
    const orders = [
        { label: "Completed", value: 68, color: "success" },
        { label: "Pending", value: 20, color: "warning" },
        { label: "Cancelled", value: 12, color: "danger" },
    ];

    return (
        <div className="col-12 col-xl-5">
            <div className="card dashboard-card h-100">
                <div className="card-body p-4">
                    <h5 className="fw-bold mb-4">Order Summary</h5>

                    {orders.map((item) => (
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
    );
}

export default OrderSummary;
