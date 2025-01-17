import { Outlet } from "react-router-dom";
import { Header } from "@/features/header";
import { Footer } from "../features/footer";

export default function Lßayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
