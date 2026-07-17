import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
import { profile } from "../../data/profile";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container-px">
          <div
            className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-5 py-2.5 transition-all duration-300 ${
              scrolled
                ? "border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-ink-950/60 backdrop-blur-xl shadow-card"
                : "border border-transparent bg-transparent"
            }`}
          >
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-accent-cyan/40 group-hover:ring-accent-cyan transition"
              />
              <span className="font-display font-semibold text-sm sm:text-base text-ink-900 dark:text-white hidden xs:inline">
                Sanjaykumar<span className="text-accent-cyan"> V</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    active === link.href
                      ? "text-ink-950 dark:text-white"
                      : "text-ink-700/70 dark:text-paper-200/60 hover:text-ink-950 dark:hover:text-white"
                  }`}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-slate-900/5 dark:bg-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="h-9 w-9 flex items-center justify-center rounded-full border border-slate-900/10 dark:border-white/10 text-ink-800 dark:text-paper-100 hover:border-accent-cyan/60 hover:text-accent-cyan transition-colors"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex"
                  >
                    {theme === "dark" ? <BsSunFill size={14} /> : <BsMoonStarsFill size={14} />}
                  </motion.span>
                </AnimatePresence>
              </button>

              <a
                href={profile.resumePdf}
                download
                className="hidden sm:inline-flex btn-primary !px-5 !py-2 text-xs sm:text-sm"
              >
                Resume
              </a>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="lg:hidden h-9 w-9 flex items-center justify-center rounded-full border border-slate-900/10 dark:border-white/10 text-ink-900 dark:text-white"
              >
                <HiMenu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70]  dark:bg-ink-950/97 backdrop-blur-2xl flex flex-col"
          >
            <div className="container-px flex items-center justify-between py-5">
              <span className="font-display font-semibold text-lg text-ink-900 dark:text-white">
                {profile.name}
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="h-9 w-9 flex items-center justify-center rounded-full border border-slate-900/10 dark:border-white/10 text-ink-900 dark:text-white"
              >
                <HiX size={18} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-3xl font-semibold text-ink-900 dark:text-white hover:text-accent-cyan transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={profile.resumePdf}
                download
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-4"
              >
                Download Resume
              </a>
            </nav>

            <div className="pb-10 flex justify-center gap-6 text-2xl text-ink-800 dark:text-paper-100">
              <a href={profile.social.github} target="_blank" rel="noreferrer" className="hover:text-accent-cyan">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z"/></svg>
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-cyan">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
