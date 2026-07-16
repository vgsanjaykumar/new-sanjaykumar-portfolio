import React from "react";
import { HiOutlineCode, HiOutlineTemplate, HiOutlineLightningBolt, HiOutlinePuzzle } from "react-icons/hi";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { services } from "../data/services";

const icons = {
  code: HiOutlineCode,
  layout: HiOutlineTemplate,
  gauge: HiOutlineLightningBolt,
  plug: HiOutlinePuzzle,
};

const Services = () => {
  return (
    <section id="services" className="section-shell bg-slate-50/60 dark:bg-white/[0.015]">
      <div className="container-px">
        <SectionHeading
          eyebrow="Services"
          title="How I can help."
          description="Focused, full-stack support from first wireframe to shipped product."
        />

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <div className="glass-panel h-full p-6 hover:-translate-y-1.5 hover:shadow-glow transition-all duration-300">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-ink-950 mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-ink-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-700/65 dark:text-paper-200/55">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
