import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import Reveal from "../ui/Reveal";
import { useTheme } from "../../context/ThemeContext";
import { profile } from "../../data/profile";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaGithub, href: profile.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.social.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: profile.social.instagram, label: "Instagram" },
  { icon: FaFacebook, href: profile.social.facebook, label: "Facebook" },
];

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="relative border-t border-slate-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
      <div className="container-px py-16">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <a href="#home" className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
                Sanjaykumar<span className="text-accent-cyan">.</span>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-700/70 dark:text-paper-200/60">
                Full stack developer from {profile.location}, building fast, considered
                web experiences — from first pixel to production deploy.
              </p>
              <div className="mt-6 flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 dark:border-white/10 text-ink-800 dark:text-paper-100 hover:border-accent-cyan/60 hover:text-accent-cyan transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-white">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-700/70 dark:text-paper-200/60 hover:text-accent-cyan transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-white">
                Get in Touch
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-ink-700/70 dark:text-paper-200/60">
                <li>
                  <a href={`mailto:${profile.email}`} className="hover:text-accent-cyan transition-colors">
                    {profile.email}
                  </a>
                </li>
                <li>{profile.phoneDisplay}</li>
                <li>{profile.location}</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-900/10 dark:border-white/10 pt-8 text-sm text-ink-700/60 dark:text-paper-200/50">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-full border border-slate-900/10 dark:border-white/10 px-3 py-1.5 hover:border-accent-cyan/60 hover:text-accent-cyan transition-colors"
          >
            {theme === "dark" ? <BsSunFill size={12} /> : <BsMoonStarsFill size={12} />}
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
