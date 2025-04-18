import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CONTACT } from "../constant.js";

const Navbar = () => {
  return (
    <nav className="m-8 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center gap-4">
        {/* <img src="/vite.svg" alt="Vite Logo" className="h-8" /> */}
        <h1 className="text-2xl font-bold">Hi, I'm Loo</h1>
      </div>

      <div className="flex items-center justify-center gap-4 text-2xl">
        <a href={`${CONTACT.linkedIn}`} target="_blank"><FaLinkedin /></a>
        <a href={`${CONTACT.github}`} target="_blank"><FaGithub /></a>
        <a href={`${CONTACT.instagram}`} target="_blank"><FaInstagram /></a>
        <a href={`${CONTACT.whatsapp}`} target="_blank"><FaWhatsapp /></a>
        
      </div>
    </nav>
  );
};

export default Navbar;
