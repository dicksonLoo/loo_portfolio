import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "motion/react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, easing: "ease-out" }}
          onClick={scrollToTop}
          className="p-3 bg-purple-800 text-white rounded-full shadow-lg border-5 border-purple-400 hover:bg-purple-500"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp size={25} />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTop;
