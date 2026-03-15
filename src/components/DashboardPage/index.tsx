import { useAppStore } from "../../store/useAppStore";

const expensesList = [
  { amount: "$9.93", title: "Spotify Premium", date: "Sep 14, 11:14 PM" },
  { amount: "$2.00", title: "Metro Ticket", date: "Sep 14, 1:06 AM" },
  { amount: "$15.00", title: "Zomato Order", date: "Sep 13, 8:20 PM" },
  { amount: "$120.00", title: "Electricity Bill", date: "Sep 12, 10:03 AM" },
  { amount: "$3.50", title: "Coffee - Starbucks", date: "Sep 11, 5:45 PM" },
];

const cardStyle = "bg-[hsl(0,0%,5%)] rounded-md p-6 ";

const Dashboard = () => {
  const streak = useAppStore((state) => state.streak)
  return (
    <div className="h-full w-full bg-[hsl(240,6%,7%)] text-white px-8 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT COLUMN */}
        <div className="col-span-3 space-y-6">
          {/* Current Level */}
          <div className={cardStyle}>
            <div className="flex items-center gap-2 text-xs uppercase text-slate-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Current Level
            </div>

            <div className="mt-5 text-3xl font-extrabold text-emerald-400">
              Budget Ninja
            </div>
          </div>

          {/* Wealth Score */}
          <div className={cardStyle}>
            <div className="flex items-center gap-2 text-xs uppercase text-slate-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Wealth Score
            </div>
              <div className="mt-5 text-5xl font-extrabold text-white">82</div>

              <p className="text-xs text-slate-500 mt-2 uppercase tracking-wider">
                Financial health rating
              </p>
          </div>

          {/* Streak */}
          <div className={cardStyle}>
            <div className="flex items-center gap-2 text-xs uppercase text-slate-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Streak
            </div>

            <div className="mt-5 text-4xl font-extrabold text-orange-400">
              {streak} Days 🔥
            </div>

            <p className="text-xs text-slate-500 mt-2 uppercase tracking-wider">
              Consistent spending control
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-9 space-y-6">
          {/* Budget Progress */}
          <div className={cardStyle}>
            <div className="flex items-center gap-2 text-xs uppercase text-slate-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Budget Progress
            </div>

            <div className="mt-6">
              <div className="w-full bg-[#1f1f25] rounded-full h-3 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[40%]" />
              </div>

              <p className="text-xs text-slate-500 mt-3 uppercase tracking-wider">
                $200 spent of $500
              </p>
            </div>
          </div>

          {/* Expenses Table */}
          <div className={cardStyle}>
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2 text-xs uppercase text-slate-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Expenses
              </div>

              <div className="flex gap-4 text-sm">
                <button className="text-slate-400 hover:text-white">
                  View all
                </button>
                <button className="text-blue-400 hover:text-blue-300">
                  Create
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-slate-500 border-b border-[#22222a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="py-3 px-2 text-left">Amount</th>
                    <th className="py-3 px-2 text-left">Title</th>
                    <th className="py-3 px-2 text-left">Date</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#22222a]">
                  {expensesList.map((item, index) => (
                    <tr key={index} className="hover:bg-[#1a1a1f] transition cursor-pointer">
                      <td className="py-4 px-2 font-semibold">
                        {item.amount}
                        <span className="text-slate-500 ml-1">USD</span>
                      </td>

                      <td className="py-4 px-2 text-slate-200">{item.title}</td>

                      <td className="py-4 px-2 text-slate-500">{item.date}</td>

                      <td className="py-4 px-2 text-slate-500 hover:text-white cursor-pointer">
                        ...
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
