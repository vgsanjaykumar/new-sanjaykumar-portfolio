import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineEye, HiOutlineDownload, HiOutlineX } from "react-icons/hi";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { profile } from "../data/profile";

const Resume = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="resume" className="section-shell">
      <div className="container-px">
        <SectionHeading eyebrow="Resume" title="See the full picture." />

        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="glass-panel flex flex-col md:flex-row items-center gap-10 p-8 sm:p-10">
              <div className="relative shrink-0">
                <div className="absolute -inset-3 rounded-2xl bg-brand-gradient opacity-20 blur-xl" />
                <img
                  src={profile.resumePreview}
                  alt="Resume preview"
                  className="relative w-40 sm:w-48 rounded-xl shadow-glow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
                  {profile.name}
                </h3>
                <p className="mt-2 text-sm text-ink-700/65 dark:text-paper-200/55 max-w-sm">
                  Preview my resume in the browser, or grab a copy to keep — up to date
                  with my latest experience and skills.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <button onClick={() => setOpen(true)} className="btn-primary">
                    <HiOutlineEye size={18} /> Preview
                  </button>
                  <a href={profile.resumePdf} download="Sanjaykumar_Resume.pdf" className="btn-ghost">
                    <HiOutlineDownload size={18} /> Download
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[90] bg-ink-950/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden bg-white dark:bg-ink-900 shadow-glow-lg"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close preview"
                className="absolute top-4 right-4 z-10 h-9 w-9 flex items-center justify-center rounded-full bg-ink-950/70 text-white hover:bg-accent-cyan hover:text-ink-950 transition-colors"
              >
                <HiOutlineX size={18} />
              </button>
              <iframe src={profile.resumePdf} title="Resume Preview" className="w-full h-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;
