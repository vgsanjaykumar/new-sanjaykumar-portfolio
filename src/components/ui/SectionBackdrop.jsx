import React from "react";

/**
 * A shared ambient backdrop: a faint grid plus soft aurora glows.
 * Purely decorative — sits absolutely behind section content.
 */
const SectionBackdrop = ({ grid = true, aurora = false, className = "" }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
  >
    {grid && (
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
    )}
    {aurora && (
      <div className="absolute inset-0 bg-aurora opacity-70 dark:opacity-60" />
    )}
  </div>
);

export default SectionBackdrop;
