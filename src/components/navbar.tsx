import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navs = [
    { title: "الرئيسية", path: "#hero" },
    { title: "من نحن", path: "#about" },
    { title: "خدماتنا", path: "#services" },
    { title: "تواصل معنا", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollOrNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-18 flex items-center z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-white/65 shadow text-black" : "bg-transparent text-white"
      }`}
    >
      <header className="container mx-auto px-5 xl:px-0 flex items-center justify-between transition-colors duration-300">
        <Link to="/" className="w-58 h-auto flex items-center justify-center">
          <img
            src={"/meta/logo.png"}
            className="w-auto h-16 object-contain transition-all duration-300"
            alt="Logo"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navs.map((n) => (
            <a
              key={n.title + n.path}
              href={n.path}
              onClick={(e) => handleScrollOrNavigate(e, n.path)}
              className={`text-lg font-light transition-colors ${
                scrolled
                  ? "text-black hover:text-orange-500 hover:underline underline-offset-4"
                  : "text-white hover:text-orange-400 hover:underline underline-offset-4"
              }`}
            >
              {n.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="mailto:info@alhamdifood.com.ly"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-9 h-9 rounded-full border transition ${
              scrolled
                ? "border-black/20 text-black hover:bg-black/10"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <Mail className="w-4 h-4" />
          </a>
          {/* +218 91 222 2820 */}
          <a
            href="https://wa.me/218926050115"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-9 h-9 rounded-full border transition ${
              scrolled
                ? "border-black/20 text-black hover:bg-green-500"
                : "border-white/30 text-white hover:bg-green-500"
            }`}
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden p-2 rounded-md transition ${
              scrolled
                ? "hover:bg-black/5 text-black"
                : "hover:bg-white/10 text-white"
            }`}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          className={`absolute top-20 left-0 w-full md:hidden shadow-lg backdrop-blur-lg transition ${
            scrolled ? "bg-white/95 text-black" : "bg-black/90 text-white"
          }`}
        >
          <div className="flex flex-col items-center py-5 gap-4">
            {navs.map((n) => (
              <a
                key={n.title + n.path}
                href={n.path}
                onClick={(e) => handleScrollOrNavigate(e, n.path)}
                className={`text-lg transition-colors ${
                  scrolled ? "hover:text-orange-500" : "hover:text-amber-400"
                }`}
              >
                {n.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
