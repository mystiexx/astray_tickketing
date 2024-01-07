import { BsCalendar3Event } from "react-icons/bs";
import { LuPackage } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export const footerRoutes = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "terms & condiiton",
    path: "/terms",
  },
];

export const navRoutes = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Events",
    path: "/events",
  },
];

export const categories = [
  {
    name: "pool party",
    value: "pool party ",
  },
  {
    name: "birthday party",
    value: "birthday party ",
  },
  {
    name: "concert",
    value: "concert ",
  },
  {
    name: "meet and greet",
    value: "meet and greet",
  },
  {
    name: "house party",
    value: "house party ",
  },
  {
    name: "themed party",
    value: "themed party ",
  },
  {
    name: "workshop/seminar",
    value: "workshop/seminar",
  },
  {
    name: "club party",
    value: "club party ",
  },
  {
    name: "listening party",
    value: "listening party ",
  },
  {
    name: "beach party",
    value: "beach party ",
  },
];

export const SideBarRoutes = [
  {
    name: "dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    name: "manage events",
    path: "/manage/events",
    icon: <BsCalendar3Event />,
  },
  {
    name: "orders",
    path: "/orders",
    icon: <LuPackage size={14} />,
  },
  {
    name: "profile",
    path: "/profile",
    icon: <CgProfile />,
  },
];
