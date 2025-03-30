import React from "react";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notification,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="bg-gray-300 p-4 flex items-center gap-5">
        <div>{users}</div>
        <div>{revenue}</div>
        <div>{notification}</div>
      </div>
    </div>
  );
}
