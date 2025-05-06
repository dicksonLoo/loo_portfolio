import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CONTACT } from "../constant.js";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="m-8 mb-20 flex items-center justify-between py-6">
      {/* Intro */}
      <div className="flex flex-shrink-0 items-center gap-4">
        {/* <img src="/vite.svg" alt="Vite Logo" className="h-8" /> */}
        <h1 className="text-2xl font-bold">Hi, I'm Loo</h1>
      </div>

      {/* Nav Title */}
      <div className="hidden md:flex items-center justify-center gap-8">
        <button
          onClick={() => scrollToSection("about")}
          className="text-lg font-medium hover:text-purple-500 hover:underline hover:scale-105 transition-colors"
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection("technologies")}
          className="text-lg font-medium hover:text-purple-500 hover:underline hover:scale-105 transition-colors"
        >
          Technologies
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="text-lg font-medium hover:text-purple-500 hover:underline hover:scale-105 transition-colors"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-lg font-medium hover:text-purple-500 hover:underline hover:scale-105 transition-colors"
        >
          Projects
        </button>
      </div>

      {/* Social Media Link */}
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a
          href={`${CONTACT.linkedIn}`}
          target="_blank"
          className="hover:scale-120"
        >
          <FaLinkedin />
        </a>
        <a
          href={`${CONTACT.github}`}
          target="_blank"
          className="hover:scale-120"
        >
          <FaGithub />
        </a>
        <a
          href={`${CONTACT.instagram}`}
          target="_blank"
          className="hover:scale-120"
        >
          <FaInstagram />
        </a>
        <a
          href={`${CONTACT.whatsapp}`}
          target="_blank"
          className="hover:scale-120"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
