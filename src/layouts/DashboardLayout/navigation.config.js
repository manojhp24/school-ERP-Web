import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutline";

export const navigationConfig = [
  {
    section: "MAIN",
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: DashboardOutlinedIcon,
        title: "Dashboard",
      },
      {
        label: "Student",
        path: "/student",
        icon: PeopleOutlinedIcon,
        title: "Student",
      },
    ],
  },
];
