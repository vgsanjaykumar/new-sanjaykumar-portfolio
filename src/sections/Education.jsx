import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { education } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="section-shell bg-slate-50/60 dark:bg-white/[0.015]">
      <div className="container-px">
        <SectionHeading eyebrow="Education" title="Academic background." />

        <div className="mx-auto max-w-4xl relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-900/10 dark:bg-white/10 md:-translate-x-1/2" />

          {education.map((edu, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal
                key={edu.title}
                direction={isLeft ? "right" : "left"}
                delay={i * 0.08}
                className={`relative mb-10 pl-14 md:pl-0 md:flex md:items-center ${
                  isLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                <span className="absolute left-[9px] md:left-1/2 top-6 h-3 w-3 rounded-full bg-accent-cyan md:-translate-x-1/2 ring-4 ring-white dark:ring-ink-950" />
                <div className={`md:w-1/2 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <div className="glass-panel p-5 hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                    <div className={`flex items-center gap-2 mb-1 ${isLeft ? "md:justify-end" : ""}`}>
                      <HiOutlineAcademicCap className="text-accent-cyan" size={18} />
                      <h3 className="font-display font-semibold text-ink-900 dark:text-white">
                        {edu.title}
                      </h3>
                    </div>
                    <p className="text-sm text-ink-700/60 dark:text-paper-200/50">{edu.institute}</p>
                    <p className="text-sm mt-2 text-ink-800 dark:text-paper-100">
                      {edu.period} &middot; <span className="font-medium text-accent-cyan">{edu.score}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
