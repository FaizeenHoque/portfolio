"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="p-4 relative z-50">
      <nav className="bg-white border border-gray-200 shadow-lg rounded-full px-8 py-4 flex justify-between items-center max-w-6xl mx-auto relative z-50">
        <div className="text-2xl font-extrabold bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition duration-300">
          <Link href="#home">Faizeen.</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
          <Link href="#home" className="hover:text-blue-600 transition">Home</Link>
          <Link href="#about" className="hover:text-blue-600 transition">About</Link>
          <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none z-50 relative">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Overlay + Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border border-gray-200 shadow-lg rounded-2xl p-4 space-y-4 text-center font-medium text-gray-600 absolute top-full left-0 right-0 z-50"
            >
              <Link href="#home" onClick={() => setIsOpen(false)} className="block hover:text-blue-600 transition">Home</Link>
              <Link href="#about" onClick={() => setIsOpen(false)} className="block hover:text-blue-600 transition">About</Link>
              <Link href="#services" onClick={() => setIsOpen(false)} className="block hover:text-blue-600 transition">Services</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-600 transition">Contact</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export { Navbar };
