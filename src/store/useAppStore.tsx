import { create } from "zustand";

type User = {
  username: string;
  email: string;
};

export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: string;
};

type AppState = {
  user: User | null;
  budget: string;
  expenses: Expense[];
  xp: number;
  streak: number;

  setUser: (user: User) => void;
  setBudget: (budget: string) => void;
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
  setXP: (xp: number) => void;
  setStreak: (streak: number) => void;
};

export const useAppStore = create<AppState>((set) => ({
  user: null,
  budget: '',
  expenses: [],
  xp: 0,
  streak: 1,

  setUser: (user) => set({ user }),

  setBudget: (budget) => set({ budget }),

  addExpense: (expense) =>
    set((state) => ({
      expenses: [...state.expenses, expense],
    })),

  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((e) => e.id !== id),
    })),

  setXP: (xp) => set({ xp }),

  setStreak: (streak) => set({ streak }),
}));