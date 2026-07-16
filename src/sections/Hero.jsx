import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import useMousePosition from "../hooks/useMousePosition";
import { profile } from "../data/profile";
import SectionBackdrop from "../components/ui/SectionBackdrop";

const TypedRole = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = profile.roles[roleIndex % profile.roles.length];
    const speed = deleting ? 40 : 75;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-accent-cyan">
      {text}
      <span className="inline-block w-[2px] h-[0.9em] bg-accent-cyan ml-1 animate-blink align-middle" />
    </span>
  );
};

const socials = [
  { icon: FaGithub, href: profile.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.social.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: profile.social.instagram, label: "Instagram" },
  { icon: FaFacebook, href: profile.social.facebook, label: "Facebook" },
];

const Hero = () => {
  const { x, y } = useMousePosition();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20"
    >
      <SectionBackdrop grid aurora />

      {/* Floating gradient shapes */}
      <div
        aria-hidden="true"
        style={{ transform: `translate(${x * -20}px, ${y * -20}px)` }}
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent-cyan/20 blur-3xl animate-float"
      />
      <div
        aria-hidden="true"
        style={{ transform: `translate(${x * 24}px, ${y * 24}px)` }}
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-violet/20 blur-3xl animate-float [animation-delay:1.5s]"
      />

      <div className="container-px relative w-full">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur px-4 py-1.5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
              </span>
              <span className="font-mono text-xs tracking-wide text-ink-800 dark:text-paper-200/80">
                {profile.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight text-ink-900 dark:text-white"
            >
              Hey, I'm {profile.firstName} —<br />
              I build for <TypedRole />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-base sm:text-lg text-ink-700/70 dark:text-paper-200/60"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href={profile.resumePdf} download className="btn-primary">
                Download Resume
              </a>
              <a href="#contact" className="btn-ghost">
                Let's Talk
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-5"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-ink-700/60 dark:text-paper-200/50 hover:text-accent-cyan hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={19} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: signature code-window element */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ transform: `translate(${x * 10}px, ${y * 10}px)` }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-brand-gradient opacity-20 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-ink-900/95 shadow-glow-lg overflow-hidden">
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-[11px] text-paper-200/50">
                  developer.js
                </span>
              </div>
              <div className="p-6 font-mono text-[13px] leading-7 text-paper-100/90">
                <p><span className="text-accent-violet">const</span> <span className="text-accent-cyan">developer</span> = {"{"}</p>
                <p className="pl-4"><span className="text-paper-200/70">name:</span> <span className="text-accent-emerald">"{profile.name}"</span>,</p>
                <p className="pl-4"><span className="text-paper-200/70">role:</span> <span className="text-accent-emerald">"Full Stack Developer"</span>,</p>
                <p className="pl-4"><span className="text-paper-200/70">stack:</span> [<span className="text-accent-emerald">"React"</span>, <span className="text-accent-emerald">"Node"</span>, <span className="text-accent-emerald">"MongoDB"</span>],</p>
                <p className="pl-4"><span className="text-paper-200/70">location:</span> <span className="text-accent-emerald">"Karaikudi, IN"</span>,</p>
                <p className="pl-4"><span className="text-paper-200/70">hireable:</span> <span className="text-accent-cyan">true</span>,</p>
                <p>{"}"}</p>
              </div>
              <img
                src={profile.avatar}
                alt={profile.name}
                className="absolute -bottom-8 -right-8 h-28 w-28 rounded-2xl object-cover border-4 border-ink-950 shadow-xl rotate-3"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-700/50 dark:text-paper-200/40"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <HiArrowDown size={16} />
      </motion.a>
    </section>
  );
};

export default Hero;
