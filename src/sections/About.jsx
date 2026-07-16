import React from "react";
import { HiOutlineLocationMarker, HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import { profile } from "../data/profile";

const highlights = [
  { icon: HiOutlineBriefcase, label: "4 hands-on internships across dev & design" },
  { icon: HiOutlineAcademicCap, label: "B.E. in Computer Science Engineering" },
  { icon: HiOutlineLocationMarker, label: `Based in ${profile.location}` },
];

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="container-px">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who cares about the details."
          description="The story behind the code — what I build, how I think, and what I bring to a team."
        />

        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr] items-center">
          <Reveal direction="right">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-brand-gradient opacity-25 blur-2xl" />
              <img
                src={profile.avatar}
                alt={profile.name}
                className="relative w-full aspect-[4/5] object-cover rounded-[2rem] shadow-glow-lg"
              />
              <div className="absolute -bottom-5 -left-5 glass-panel px-4 py-3 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-emerald" />
                </span>
                <span className="text-xs font-medium text-ink-800 dark:text-paper-100">
                  Available for work
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal direction="left">
              <p className="text-base sm:text-lg leading-relaxed text-ink-700/80 dark:text-paper-200/70">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <ul className="mt-8 space-y-4">
                {highlights.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm sm:text-base text-ink-800 dark:text-paper-100">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                      <Icon size={18} />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {profile.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl sm:text-4xl font-semibold gradient-text">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix || ""} />
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-ink-700/60 dark:text-paper-200/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
