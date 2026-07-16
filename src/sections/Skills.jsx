import React from "react";
import { motion } from "framer-motion";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { skillGroups } from "../data/skills";

const SkillBar = ({ name, level, index }) => (
  <div>
    <div className="flex items-center justify-between text-sm mb-1.5">
      <span className="text-ink-800 dark:text-paper-100">{name}</span>
      <span className="font-mono text-xs text-ink-700/50 dark:text-paper-200/40">{level}%</span>
    </div>
    <div className="h-1.5 w-full rounded-full bg-slate-900/8 dark:bg-white/8 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full bg-brand-gradient"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-shell bg-slate-50/60 dark:bg-white/[0.015]">
      <div className="container-px">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind every build."
          description="From interface to infrastructure — the technologies and tools I reach for most."
        />

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.07}>
              <div className="glass-panel h-full p-6 hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white mb-5">
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item, i) => (
                    <SkillBar key={item.name} {...item} index={i} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
