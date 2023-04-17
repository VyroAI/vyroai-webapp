import {
  ArrowRightOnRectangleIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

interface navType {
  id: number;
  name: string;
  href: string;
  icon: any;
}

const navigation: navType[] = [
  { id: 0, name: "My Plan", href: "#", icon: UserIcon },
  { id: 1, name: "Settings", href: "#", icon: Cog6ToothIcon },
  {
    id: 2,
    name: "Logout",
    href: "#",
    icon: ArrowRightOnRectangleIcon,
  },
];

export default navigation;
