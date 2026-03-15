import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppStore } from "../../store/useAppStore";

const categories: string[] = [
  "Housing",
  "Groceries",
  "Transport",
  "Utilities",
  "Dining",
  "Health",
  "Savings",
  "Shopping",
  "Entertainment",
  "Travel",
  "Education",
  "Insurance",
];

const OnboardingPage = () => {
  const budget = useAppStore((state) => state.budget)
  const setBudget = useAppStore((state) => state.setBudget)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const navigate = useNavigate();

  const orderedCategories = [
    ...selectedCategories,
    ...categories.filter((c) => !selectedCategories.includes(c)),
  ];

  const postValues = () => {
    const budgetNumber = Number(budget);

    if (!budgetNumber || budgetNumber <= 0) {
      alert("Please enter a valid monthly budget");
      return;
    }

    if (selectedCategories.length === 0) {
      alert("Please select at least one category");
      return;
    }

    setBudget(budget)
    console.log(selectedCategories);

    navigate("/dashboard");
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((current) => {
      if (current.includes(category)) {
        return current.filter((item) => item !== category);
      }
      return [...current, category];
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0f] text-white px-6">
      <section className="w-full max-w-2xl bg-[#121216] border border-[#22222a] rounded-xl p-8 space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-widest text-gray-200">
            WEALTHXP
          </h1>
          <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">
            Initial Setup
          </p>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-wider">
            <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
            Monthly Budget
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              ₹
            </span>

            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="0"
              className="w-full bg-[#0f0f13] border border-[#22222a] rounded-lg py-3 pl-8 pr-3 text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-wider">
            <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
            Categories
          </div>

          <div className="flex flex-wrap gap-2">
            {orderedCategories.map((category) => {
              const isSelected = selectedCategories.includes(category);

              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-4 py-2 rounded-md text-xs uppercase tracking-wider transition
                    ${
                      isSelected
                        ? "bg-[#1f1f26] text-white border border-[#33333d]"
                        : "bg-[#0f0f13] border border-[#22222a] text-slate-400 hover:bg-[#18181d] hover:text-white"
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Continue */}
        <button
          onClick={postValues}
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wider transition"
        >
          Continue
        </button>
      </section>
    </div>
  );
};

export default OnboardingPage;
