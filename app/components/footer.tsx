import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--lightmode-secondary)] py-4 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <p className="text-[#2a2a2a] text-xs sm:text-sm md:text-base">
          © {currentYear} Faizeen Hoque
        </p>
        <p className="text-[#2a2a2a] text-xs sm:text-sm md:text-base">
          built with pixels and coffee
        </p>
      </div>
    </footer>
  );
};

export default Footer;
