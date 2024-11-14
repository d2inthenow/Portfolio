import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://instagram.com/tdd.2412",
    icon: <AiOutlineInstagram />,
  },
  { id: 2, link: "https://facebook.com/tdd.2412", icon: <FaFacebook /> },
  { id: 3, link: "https://zalo.me/0368205272", icon: <FaPhone /> },
  { id: 4, link: "https://github.com/d2inthenow", icon: <AiFillGithub /> },
];
