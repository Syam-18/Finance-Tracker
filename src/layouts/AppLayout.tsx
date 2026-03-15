import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
