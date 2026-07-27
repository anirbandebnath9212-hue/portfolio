import { useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 z-50 w-full
        border-b border-border-muted
        bg-white/80 dark:bg-background-dark/80
        backdrop-blur-md
        transition-transform duration-300 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-primary font-bold text-xl">AD.</span>
          <span
            className="hidden md:block text-xs tracking-widest
            text-slate-600 dark:text-slate-400"
          >
            FULL-STACK ENGINEER
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {["projects", "about", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium
                text-slate-700 dark:text-slate-200
                hover:text-primary transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 flex items-center justify-center rounded
              border border-border-muted
              text-slate-700 dark:text-slate-200
              hover:bg-slate-100 dark:hover:bg-surface transition"
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          {/* Resume */}
          <a
            href="/portfolio/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold rounded border
              text-slate-800 dark:text-slate-100
              border-border-muted
              hover:bg-slate-100 dark:hover:bg-surface
              transition"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 flex items-center justify-center rounded
              border border-border-muted
              text-slate-700 dark:text-slate-200"
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 flex items-center justify-center rounded
              border border-border-muted
              text-slate-700 dark:text-slate-200"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden border-t border-border-muted
          bg-white dark:bg-background-dark"
        >
          <nav className="px-6 py-6 flex flex-col gap-4">
            {["projects", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium
                  text-slate-700 dark:text-slate-200
                  hover:text-primary transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            {/* Mobile Resume */}
            <a
              href="/portfolio/Anirban_Debnath_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 text-sm font-semibold rounded border
                text-center
                text-slate-800 dark:text-slate-100
                border-border-muted
                hover:bg-slate-100 dark:hover:bg-surface
                transition"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}