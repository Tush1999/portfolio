import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import "../assets/stylesheets/header.css";

const FOOTER_ROWS = [
  {
    label: "Linkdin",
    route: "https://www.linkedin.com/in/tushar-bansal-697386169",
    icon: <FaLinkedinIn />
  },
  {
    label: "GitHub",
    route: "https://github.com/Tush1999",
    icon: <IoLogoGithub />
  },
  {
    label: "Mail",
    route: "mailto:tusharbansal104@gmail.com",
    icon: <CiMail />
  },
];

const Footer = () => {
  return <div className="header-wrapper footer">
    <div className="footer-container">{FOOTER_ROWS.map(({ label, route, icon}) => {
      return (
        <Link target="_blank" to={route} key={label}>
         <div>{label}</div>{icon}
        </Link>
      );
    })}</div>
  </div>
};

export default Footer;
