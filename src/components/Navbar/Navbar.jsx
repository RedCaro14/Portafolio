import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
<<<<<<< HEAD
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-3">
        <div className="text-blue-600 text-2xl font-bold">ⓒ</div>
        <div className="text-pink-600 font-bold text-xl flex items-center space-x-2">
          <span>Carolina Rojas</span>
          <span className="text-gray-600 text-base">
            <Typewriter
              words={["Artista", "Desarrolladora", "Diseñadora"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
=======
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Stack", href: "/stack" },
    { name: "Contact", href: "/contact" },
    // { name: "Comprar", href: "https://web.whatsapp.com/", isButton: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleMenuClick = () => {
    scrollToTop(); // Scroll to top
    setMobileMenuOpen(false); // Close the menu
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={handleMenuClick}
          >
            <div className="flex items-center transform transition-transform duration-200 hover:scale-105">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
              <h1 className="text-lg sm:text-xl font-bold ml-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Julian's Portfolio
              </h1>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors transform hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={handleMenuClick}
                className={({ isActive }) => `
                  relative font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 
                  transition-colors duration-200
                  ${isActive ? 'text-indigo-600 dark:text-indigo-400' : ''}
                `}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400" />
                )}
              </NavLink>
            ))}
            
            
          {/* github button */}
          <a href="https://github.com/kalugy" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-5 h-5 dark:text-white text-gray-700" />
          </a>
          
          {/*ES y EN button */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
>>>>>>> d8844a6c394483333598168d92b4cb35f6a302a6
        </div>
      </div>

      {/* Botones de navegación corregidos */}
      <div className="flex items-center space-x-8 text-gray-400 font-medium text-base">
        <Link to="/" className="border-b-2 border-pink-500 text-pink-500">Inicio</Link>
        <Link to="/portfolio" className="hover:text-pink-500 transition">Portafolio</Link>
        <Link to="/profile" className="hover:text-pink-500 transition">Perfil</Link>
        <a href="https://github.com/RedCaro14" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl hover:text-pink-500 transition" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

