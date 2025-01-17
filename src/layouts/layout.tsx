import { Outlet } from "react-router-dom";
import { Header } from "@/features/header";
import { Footer } from "@/features/footer";

export default function Layout() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
