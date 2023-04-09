import React from "react";
import "../../../../styles/index.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Dashboard | VyroAI",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
