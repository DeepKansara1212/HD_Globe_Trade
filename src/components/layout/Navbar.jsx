"use client"

import { useState, useEffect, useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownRefs = useRef([])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const closeDropdown = () => setActiveDropdown(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRefs.current.some(ref => ref && ref.contains(event.target))) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Products",
      path: "/products",
      dropdown: [
        { name: "Featured Products", path: "/products/featured" },
        { name: "New Arrivals", path: "/products/new" },
        { name: "Best Sellers", path: "/products/best-sellers" },
      ],
    },
    { name: "Trust & Certifications", path: "/trust" },
    { name: "Contact", path: "/contact" },
  ]

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="w-10 h-10flex items-center justify-center ">

              <img src="./pics/logoMinor.svg" alt="" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-tight">Globe Trade</span>
              <span className="block text-xs text-blue-300 font-medium tracking-wider">Premium Exports</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="relative group dropdown"
                ref={el => dropdownRefs.current[index] = el}
                onMouseEnter={() => link.dropdown ? setActiveDropdown(index) : null}
                onMouseLeave={() => link.dropdown ? setActiveDropdown(null) : null}
              >
                {link.dropdown ? (
                  <div className="relative">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 rounded-md hover:bg-white/10 ${isActive ? "text-white bg-blue-600" : ""
                        }`
                      }
                      onClick={(e) => {
                        // Only prevent default if clicking the dropdown toggle area (not the text)
                        if (e.target.classList.contains('dropdown-toggle')) {
                          e.preventDefault();
                        }
                        closeDropdown();
                      }}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="ml-1 h-4 w-4 dropdown-toggle" />
                    </NavLink>
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-56 rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden z-20"
                        >
                          <div className="py-1">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-150"
                                onClick={() => {
                                  closeMenu();
                                  closeDropdown();
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isActive ? "text-white bg-blue-600" : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`
                    }
                    onClick={closeDropdown}
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 p-1 rounded-md"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-slate-800 border-t border-slate-700 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="w-full">
                    {link.dropdown ? (
                      <div className="w-full">
                        <div className="flex items-center">
                          <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                              `flex-grow py-3 px-4 rounded-l-md transition-colors duration-200 ${isActive
                                ? "bg-blue-600/20 text-blue-400 font-medium"
                                : "text-gray-300 hover:bg-slate-700 hover:text-white"
                              }`
                            }
                            onClick={() => {
                              closeMenu();
                              closeDropdown();
                            }}
                          >
                            <span className="font-medium">{link.name}</span>
                          </NavLink>
                          <button
                            className="p-3 text-gray-300 hover:bg-slate-700 rounded-r-md"
                            onClick={() => handleDropdownToggle(index)}
                          >
                            <ChevronDown
                              className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : ""
                                }`}
                            />
                          </button>
                        </div>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-1 border-l-2 border-slate-700 ml-4"
                            >
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="block py-2 px-4 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                                  onClick={closeMenu}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `block py-3 px-4 rounded-md transition-colors duration-200 ${isActive
                            ? "bg-blue-600/20 text-blue-400 font-medium"
                            : "text-gray-300 hover:bg-slate-700 hover:text-white"
                          }`
                        }
                        onClick={() => {
                          closeMenu();
                          closeDropdown();
                        }}
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </div>
                ))}
                <div className="pt-2 mt-2 border-t border-slate-700">
                  <Link
                    to="/contact"
                    className="block w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-md text-center shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Get In Touch
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar