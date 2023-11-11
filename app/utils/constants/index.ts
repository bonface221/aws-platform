import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export const topNavPersonalData = [
  {
    id: 1,
    icon: BsTelephoneFill,
    text: "+254712345678",
  },
  {
    id: 2,
    icon: IoMdMail,
    text: "company@gmail.com",
  },
  {
    id: 3,
    icon: MdLocationPin,
    text: "Nairobi, Kenya",
  },
];

export const socialData = [
  {
    id: 1,
    icon: FaFacebook,
    text: "Facebook",
  },
  {
    id: 2,
    icon: RiTwitterXFill,
    text: "Twitter",
  },
  {
    id: 3,
    icon: AiFillLinkedin,
    text: "LinkedIn",
  },
  {
    id: 4,
    icon: AiFillInstagram,
    text: "Instagram",
  },
];

export const navItems = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "About",
    link: "/about",
  },
  {
    id: 3,
    text: "Events",
    link: "/events",
  },
  {
    id: 4,
    text: "Campaign",
    link: "/campaign",
  },
  {
    id: 5,
    text: "Contact",
    link: "/contact",
  },
];
