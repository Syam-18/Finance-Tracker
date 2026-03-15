import {
  LayoutDashboard,
  // PlusCircle,
  // Settings,
  ChartNoAxesColumn,
  Coins,
  // LogOut,
  // Mail,
  // Shield,
  // Cpu,
  // FlaskConical,
} from "lucide-react";
import { Link } from "react-router";
// import { Button } from "../ui/button";
import ProfilePopover  from "../ProfilePopover";

const Sidebar = () => {
  return (
    <aside className="h-screen w-72 bg-[#111114] border-r border-[#1f1f24] flex flex-col justify-between p-4">
      {/* TOP PANEL */}
      <div className="bg-[#0d0d10] border border-[#22222a] rounded-xl p-4">
        {/* Logo */}
        <div className="pb-4 border-b border-[#22222a]">
          <Link
            to="/dashboard"
            className="text-lg font-bold tracking-widest text-gray-200"
          >
            WEALTHXP
          </Link>
        </div>

        {/* Section Label */}
        <div className="mt-5 flex items-center gap-2 text-xs text-slate-400 uppercase tracking-widest">
          <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
          Tools
        </div>

        {/* Navigation */}
        <nav className="mt-3 space-y-1">
          <SidebarItem
            icon={<LayoutDashboard size={16} />}
            label="Dashboard"
            path="dashboard"
            active
          />

          <SidebarItem
            icon={<Coins size={16} />}
            label="All Expenses"
            path="expenses"
          />

          <SidebarItem
            icon={<ChartNoAxesColumn size={16} />}
            label="Stats"
            path="stats"
          />

          {/* <SidebarItem icon={<Shield size={16} />} label="Security" />

          <SidebarItem icon={<Mail size={16} />} label="Communication" /> */}

          {/* <SidebarItem
            icon={<Settings size={16} />}
            label="Admin Settings"
            disabled
          /> */}
        </nav>
      </div>

      {/* USER PANEL */}
      {/* <div className="bg-[#0d0d10] border border-[#22222a] rounded-xl p-4 cursor-pointer">
        <div className="flex items-center gap-3">
          
          <div className="h-10 w-10 rounded-md bg-purple-600 flex items-center justify-center text-sm font-bold">
            S
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-200">Syam</p>
            <p className="text-xs text-slate-500">Sk8erBoi</p>
          </div>

          <button className="text-slate-500 hover:text-white">⋮</button>
        </div>
      </div> */}
      <ProfilePopover />
    </aside>
  );
};

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  path: string;
};

const SidebarItem = ({ icon, label, active, path }: SidebarItemProps) => {
  return (
    <Link
      to={`/${path}`}
      className={`
      w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition cursor-pointer
      ${
        active
          ? "bg-linear-to-r from-[#1f1f26] to-[#18181d] text-white"
          : "text-slate-400 hover:bg-[#18181d] hover:text-white"
      }
      `}
    >
      {icon}
      {label}
    </Link>
  );
};

export default Sidebar;
