import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const ProfilePopover = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const user = {
    name: "Syam",
    email: "syam@email.com",
  };

  const handleAuth = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Your Sidebar User Panel */}
        <div className="bg-[#0d0d10] border border-[#22222a] rounded-xl p-4 cursor-pointer">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="h-10 w-10 rounded-md bg-purple-600 flex items-center justify-center text-sm font-bold">
              S
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-200">
                {loggedIn ? user.name : "Guest"}
              </p>
              <p className="text-xs text-slate-500">
                {loggedIn ? user.email : "Not logged in"}
              </p>
            </div>

            <button className="text-slate-500 hover:text-white">⋮</button>
          </div>
        </div>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-64 bg-[#121216] border border-[#22222a] text-white"
      >
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold">
              {loggedIn ? user.name : "Guest"}
            </p>
            <p className="text-xs text-slate-400">
              {loggedIn ? user.email : "Please login"}
            </p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleAuth}
              className="text-sm px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 transition"
            >
              {loggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfilePopover;
