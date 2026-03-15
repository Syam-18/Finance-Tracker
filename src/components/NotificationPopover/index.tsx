import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const notifications = [
  "New expense added",
  "Budget almost exceeded",
  "Weekly report ready",
];

const NotificationPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative cursor-pointer bg-[#121216] border border-[#22222a] rounded-lg p-2 text-slate-400 hover:text-white hover:bg-[#18181d] transition">
          <Bell size={18} />

          {/* red dot */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="w-72 bg-[#121216] border border-[#22222a] text-white"
      >
        <div>
          {notifications.length === 0 ? (
            <p className="text-sm text-slate-400">No notifications</p>
          ) : (
            notifications.map((note, i) => (
              <div
                key={i}
                className="text-sm p-2 pl-1 rounded-md hover:bg-[#18181d] transition"
              >
                {note}
              </div>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
