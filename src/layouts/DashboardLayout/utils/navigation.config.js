import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutline";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const navigationConfig = [
  {
    section: "Main Menu",
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: DashboardOutlinedIcon,
        title: "Dashboard",
      },
    ],
  },
  {
    section: "Academics",
    items: [
      {
        label: "Student",
        path: "/student",
        icon: PeopleOutlinedIcon,
        title: "Student",
      },
      {
        label: "Classes",
        path: "/classes",
        icon: ClassOutlinedIcon,
        title: "Classes",
      },
      {
        label: "Attendance",
        path: "/attendance",
        icon: CheckCircleOutlinedIcon,
        title: "Attendance",
      },
    ],
  },
  {
    section: "Administration",
    items: [
      {
        label: "Fee Manager",
        path: "/fees",
        icon: AccountBalanceWalletOutlinedIcon,
        title: "Fee Manager",
      },
      {
        label: "Announcements",
        path: "/announcements",
        icon: CampaignOutlinedIcon,
        title: "Announcements",
      },
      {
        label: "Settings",
        path: "/settings",
        icon: SettingsOutlinedIcon,
        title: "Settings",
      },
    ],
  },
];
