import React from "react";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { experience } from "../data/experience";

const accentMap = {
  cyan: "bg-accent-cyan",
  violet: "bg-accent-violet",
  blue: "bg-accent-blue",
  emerald: "bg-accent-emerald",
};

const Experience = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="container-px">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've applied what I've learned."
          description="Internships and hands-on roles that shaped how I build and collaborate."
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative pl-10 sm:pl-12">
            <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-cyan/60 via-slate-900/10 dark:via-white/10 to-transparent" />

            {experience.map((item, i) => (
              <Reveal key={item.role} direction="left" delay={i * 0.08} className="relative mb-12 last:mb-0">
                <span
                  className={`absolute -left-10 sm:-left-12 top-1.5 h-4 w-4 rounded-full ring-4 ring-white dark:ring-ink-950 ${accentMap[item.accent]}`}
                />
                <div className="glass-panel p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-wrap items-center gap-3 justify-between mb-3">
                    <span className="font-mono text-xs tracking-wide text-accent-cyan">{item.duration}</span>
                    <img
                      src={item.logo}
                      alt=""
                      className="h-8 w-8 rounded-full object-contain bg-white/60 dark:bg-white/10 p-1"
                    />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm text-accent-cyan/80 dark:text-accent-cyan/90 mt-0.5 mb-3">
                    {item.company}
                  </p>
                  <p className="text-sm leading-relaxed text-ink-700/70 dark:text-paper-200/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
