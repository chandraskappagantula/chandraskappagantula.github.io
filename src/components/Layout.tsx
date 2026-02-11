import { Navbar } from "../components/Navbar"
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const hidenavbar = location.pathname.startsWith("/project");
  return (
    <>
      {!hidenavbar && <Navbar />}
      <main className="w-screen bg-neutral-900">
        
          <Outlet />

      </main>
    </>
  );
}
