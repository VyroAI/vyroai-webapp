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
  params,
}: {
  children: React.ReactNode;
  params: {
    token: string;
  };
}) {
  const cookieStore = cookies();
  if (!cookieStore.has("authorization")) {
    redirect("/login");
  }

  params.token = cookieStore.get("authorization")?.value as string;

  return <section>{children}</section>;
}
