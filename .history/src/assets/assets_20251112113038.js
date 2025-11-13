import { Label } from "recharts";
import login_bg from "./login_bg.jpg";
import logo from "./logo.png";
import { List, LucideLayoutDashboard, Wallet } from "lucide-react";

export const assets = {
  login_bg,
  logo,
};


export const SIDE_BAR_DATA = [
  {
    id: "01",
    label: "Dashboard",
    icon: LucideLayoutDashboard,
    link: "/dashboard",
  },
  {
    id: "02",
    label: "Category",
    icon: List,
    link: "/category",
  },
  {
    id: "03",
    label: "Income",
    icon: Wallet,
    link: "/income",
  },
  {
    id: "04",
    label: "Expense",
    icon: C,
    link: "/expense",
  },
]