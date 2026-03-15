// import { Bell } from "lucide-react";
import { useAppStore } from "../../store/useAppStore";
import NotificationPopover from "../NotificationPopover";

// type TopBarProps = {
//   currentXP?: number;
//   maxXP?: number;
// };

const TopBar = () => {
  const xp = useAppStore((state) => state.xp)
  const percentage = (xp  / 100) * 100;
  return (
    <header className="h-16 bg-[#0b0b0f] border-b border-[#22222a] flex items-center justify-end px-6">
      <div className="flex items-center gap-6">
        {/* XP PANEL */}
        <div className="bg-[#121216] border border-[#22222a] rounded-lg px-4 py-2 flex flex-col">
          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-wider">
              <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
              XP
            </div>

            <span className="text-sm font-semibold text-gray-200">
              {xp} / 100
            </span>
          </div>

          <div className="w-36 b
          g-[#1f1f25] rounded-full h-1.5 mt-1 overflow-hidden border-[hsl(0,0%,25%)] border">
            <div
              className="bg-emerald-500 h-full transition-all duration-500"
              style={{ width: `${percentage + 5}%` }}
            />
          </div>
        </div>

        {/* NOTIFICATIONS */}
        {/* <button className="relative cursor-pointer bg-[#121216] border border-[#22222a] rounded-lg p-2 text-slate-400 hover:text-white hover:bg-[#18181d] transition">
          <Bell size={18} />

          
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button> */}
        <NotificationPopover/>
      </div>
    </header>
  );
};

export default TopBar;
