import React from 'react';

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => scrollTo("home")}
        className="text-2xl p-4 hover:text-neutral-300 cursor-none font-medium"
      >
        Home
      </button>

      <button
        onClick={() => scrollTo("about")}
        className="text-2xl p-3 hover:text-neutral-300 cursor-none font-medium"
      >
        About
      </button>

      <button
        onClick={() => scrollTo("projects")}
        className="text-2xl p-3 hover:text-neutral-300 cursor-none font-medium"
      >
        Projects
      </button>
    </div>
  );
}

export default Navbar;
