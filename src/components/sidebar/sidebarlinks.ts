import {
  FaDiscord,
  FaSquareInstagram,
  FaTelegram,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { SidebarLinks } from "@/types/Links";

const links: SidebarLinks[] = [
  {
    name: "Whatsapp",
    iconName: FaSquareWhatsapp,
    to: "https://whatsapp.com",
  },
  { name: "Telegram", iconName: FaTelegram, to: "https://telegram.com" },
  {
    name: "Instagram",
    iconName: FaSquareInstagram,
    to: "https://instagram.com",
  },
  { name: "Discord", iconName: FaDiscord, to: "https://discord.com" },
];

export default links;
