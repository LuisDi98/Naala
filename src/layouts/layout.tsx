import { Outlet } from "react-router-dom";
import { Header } from "@/features/header";

export default function Layout() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
