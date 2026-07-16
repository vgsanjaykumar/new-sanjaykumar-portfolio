import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineSearch, HiOutlineX, HiOutlineExternalLink } from "react-icons/hi";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { projects, projectCategories } from "../data/projects";

const ProjectCard = ({ project, onOpen, index }) => (
  <Reveal delay={(index % 6) * 0.06} className="h-full">
    <motion.div
      layoutId={`project-${project.title}`}
      onClick={() => onOpen(project)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur shadow-card flex flex-col"
      data-cursor-hover
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-xs font-medium text-white flex items-center gap-1.5">
            View details <HiOutlineExternalLink size={14} />
          </span>
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-ink-950/70 backdrop-blur px-3 py-1 text-[11px] font-mono text-paper-100">
          {project.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-ink-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-ink-700/60 dark:text-paper-200/55 line-clamp-2">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-accent-cyan/10 text-accent-cyan px-2.5 py-1 text-[11px] font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </Reveal>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-ink-950/70 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          layoutId={`project-${project.title}`}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white dark:bg-ink-900 border border-slate-900/10 dark:border-white/10 shadow-glow-lg"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 h-9 w-9 flex items-center justify-center rounded-full bg-ink-950/70 text-white hover:bg-accent-cyan hover:text-ink-950 transition-colors"
          >
            <HiOutlineX size={18} />
          </button>
          <img src={project.img} alt={project.title} className="w-full aspect-video object-cover" />
          <div className="p-6 sm:p-8">
            <span className="eyebrow">{project.category}</span>
            <h3 className="font-display text-2xl font-semibold text-ink-900 dark:text-white mt-2">
              {project.title}
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-700/70 dark:text-paper-200/60">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full bg-accent-cyan/10 text-accent-cyan px-3 py-1 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-7"
            >
              View Live Project <HiOutlineExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section id="projects" className="section-shell">
      <div className="container-px">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've shipped."
          description="A mix of client business sites, product experiments, and full-stack apps."
        />

        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <div className="flex flex-wrap gap-2">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      category === cat
                        ? "bg-brand-gradient text-ink-950"
                        : "border border-slate-900/10 dark:border-white/10 text-ink-700/70 dark:text-paper-200/60 hover:text-accent-cyan hover:border-accent-cyan/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative sm:ml-auto w-full sm:w-64">
                <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-700/40 dark:text-paper-200/40" size={16} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects…"
                  className="w-full rounded-full border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] py-2 pl-9 pr-4 text-sm text-ink-900 dark:text-white placeholder:text-ink-700/40 dark:placeholder:text-paper-200/40 outline-none focus:border-accent-cyan/60 transition-colors"
                />
              </div>
            </div>
          </Reveal>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} onOpen={setActive} />
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-ink-700/50 dark:text-paper-200/40 py-16">
              No projects match your search.
            </p>
          )}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Projects;
