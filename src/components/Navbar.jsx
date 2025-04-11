import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="m-8 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center gap-4">
        {/* <img src="/vite.svg" alt="Vite Logo" className="h-8" /> */}
        <h1 className="text-2xl font-bold">Loo</h1>
      </div>

      <div className="flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
