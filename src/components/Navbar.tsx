
import { useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showLightWarning, setShowLightWarning] = useState(false);

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

  const handleThemeClick = () => {
    if (isDark) {
      setShowLightWarning(true);
    } else {
      toggleDarkMode();
    }
  };

  const confirmLightMode = () => {
    toggleDarkMode();
    setShowLightWarning(false);
  };

  return (
    <>
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
              onClick={handleThemeClick}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
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
              onClick={handleThemeClick}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="w-9 h-9 flex items-center justify-center rounded
                border border-border-muted
                text-slate-700 dark:text-slate-200"
            >
              {isDark ? "🌙" : "☀️"}
            </button>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
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

      {/* Fun light-mode warning */}
      {showLightWarning && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center
            bg-black/60 px-5 backdrop-blur-sm"
          onClick={() => setShowLightWarning(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="light-warning-title"
            className="w-full max-w-md overflow-hidden rounded-2xl
              border border-slate-700 bg-[#111827] p-6 text-white
              shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center
                rounded-full bg-amber-400/10 text-4xl">
                ☀️
              </div>
            </div>

            <p className="mb-2 text-center text-xs font-semibold
              uppercase tracking-[0.25em] text-blue-400">
              Developer's warning
            </p>

            <h2
              id="light-warning-title"
              className="mb-4 text-center text-2xl font-bold sm:text-3xl"
            >
              Whoa, you want the light side?
            </h2>

            <p className="mb-3 text-center leading-relaxed text-slate-300">
              The developer specifically doesn't want you to see the light
              version of this portfolio. 🌚
            </p>

            <p className="mb-7 text-center leading-relaxed text-slate-300">
              But hey, you're persistent. Are you sure you want to betray
              the dark side?
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={confirmLightMode}
                className="flex-1 rounded-xl bg-blue-600 px-5 py-3
                  font-semibold text-white transition
                  hover:bg-blue-500 active:scale-[0.98]"
              >
                Yes, show me! ☀️
              </button>

              <button
                onClick={() => setShowLightWarning(false)}
                className="flex-1 rounded-xl border border-slate-600
                  px-5 py-3 font-semibold text-slate-200 transition
                  hover:bg-slate-800 active:scale-[0.98]"
              >
                No, dark forever 🌙
              </button>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              You've been warned. Proceed at your own risk.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
