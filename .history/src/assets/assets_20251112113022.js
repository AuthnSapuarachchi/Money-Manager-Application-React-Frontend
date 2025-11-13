import { Label } from "recharts";
import login_bg from "./login_bg.jpg";
import logo from "./logo.png";
import { List, LucideLayoutDashboard } from "lucide-react";

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
    icon: Wa,
    link: "/income",
  }
]