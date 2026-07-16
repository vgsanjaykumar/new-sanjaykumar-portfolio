import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, description, align = "center" }) => {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} mb-14 md:mb-20`}>
      {eyebrow && (
        <Reveal direction="up">
          <span className="eyebrow mb-4 inline-block">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.08}>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink-900 dark:text-white max-w-2xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16}>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-600 dark:text-paper-200/60">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
