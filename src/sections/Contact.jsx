import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineCheckCircle } from "react-icons/hi";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { profile } from "../data/profile";

const initialForm = { name: "", email: "", number: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.email.trim()) {
      next.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      next.email = "Enter a valid email";
    }
    if (!formData.number.trim()) {
      next.number = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.number)) {
      next.number = "Enter a valid 10-digit number";
    }
    if (!formData.message.trim()) next.message = "Message is required";
    return next;
  };

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      body.append("access_key", profile.formsAccessKey);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData(initialForm);
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fields = [
    { key: "name", label: "Name", type: "text", placeholder: "Your name" },
    { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { key: "number", label: "Phone", type: "tel", placeholder: "10-digit number" },
  ];

  return (
    <section id="contact" className="section-shell bg-slate-50/60 dark:bg-white/[0.015]">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a project in mind or just want to say hi? I'm always open to discussing development work or collaborations."
        />

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="right">
            <div className="space-y-5">
              {[
                { icon: HiOutlineMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                { icon: HiOutlinePhone, label: "Phone", value: profile.phoneDisplay, href: `tel:+${profile.whatsappNumber}` },
                { icon: HiOutlineLocationMarker, label: "Location", value: profile.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="glass-panel flex items-center gap-4 p-5 hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-ink-700/50 dark:text-paper-200/40">
                        {label}
                      </p>
                      <p className="text-sm sm:text-base font-medium text-ink-900 dark:text-white">
                        {value}
                      </p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href}>{content}</a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal direction="left">
            <form onSubmit={onSubmit} className="glass-panel p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {fields.slice(0, 2).map((field) => (
                  <div key={field.key}>
                    <label className="block mb-1.5 text-sm font-medium text-ink-800 dark:text-paper-100">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={formData[field.key]}
                      onChange={handleChange(field.key)}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] px-4 py-2.5 text-sm text-ink-900 dark:text-white outline-none focus:border-accent-cyan/60 transition-colors"
                    />
                    {errors[field.key] && (
                      <p className="mt-1 text-xs text-red-400">{errors[field.key]}</p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium text-ink-800 dark:text-paper-100">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.number}
                  onChange={handleChange("number")}
                  placeholder="10-digit number"
                  className="w-full rounded-xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] px-4 py-2.5 text-sm text-ink-900 dark:text-white outline-none focus:border-accent-cyan/60 transition-colors"
                />
                {errors.number && <p className="mt-1 text-xs text-red-400">{errors.number}</p>}
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium text-ink-800 dark:text-paper-100">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={handleChange("message")}
                  placeholder="Tell me about your project…"
                  className="w-full rounded-xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] px-4 py-2.5 text-sm text-ink-900 dark:text-white outline-none focus:border-accent-cyan/60 transition-colors resize-none"
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full sm:w-auto disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-medium text-ink-950 shadow-glow-lg"
          >
            <HiOutlineCheckCircle size={18} /> Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
