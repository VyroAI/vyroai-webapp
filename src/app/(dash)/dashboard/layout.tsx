import React from "react";
import "../../../../styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard | VyroAI",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  if (!cookieStore.has("authorization")) {
    redirect("/login");
  }

  return <section>{children}</section>;
}
