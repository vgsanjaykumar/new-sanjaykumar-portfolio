import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { profile } from "../data/profile";

const initialForm = { name: "", number: "", email: "", message: "" };

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Name is required";
    if (!/^\d{10}$/.test(formData.number)) err.number = "Enter a valid 10-digit number";
    if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = "Enter a valid email";
    if (!formData.message.trim()) err.message = "Message is required";
    return err;
  };

  const send = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const { name, number, email, message } = formData;
    const url = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
      `Name: ${name}\nPhone: ${number}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.open(url, "_blank");
    setSuccess("Message ready! WhatsApp will open shortly.");
    setTimeout(() => {
      setSuccess("");
      setFormData(initialForm);
      setOpen(false);
    }, 2200);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-40 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow-lg"
      >
        <FaWhatsapp size={24} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[90] bg-ink-950/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl glass-panel !bg-white dark:!bg-ink-900 p-6"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 text-ink-700/60 dark:text-paper-200/50 hover:text-accent-cyan"
              >
                <HiOutlineX size={18} />
              </button>

              <h3 className="font-display text-xl font-semibold text-center text-ink-900 dark:text-white mb-6">
                Chat via WhatsApp
              </h3>

              <div className="space-y-4">
                {[
                  { label: "Name", name: "name", type: "text" },
                  { label: "Mobile Number", name: "number", type: "tel" },
                  { label: "Email", name: "email", type: "email" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="text-sm text-ink-800 dark:text-paper-100">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full mt-1 rounded-xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.05] px-3.5 py-2.5 text-sm text-ink-900 dark:text-white outline-none focus:border-accent-cyan/60 transition-colors"
                    />
                    {errors[field.name] && (
                      <p className="text-xs text-red-400 mt-1">{errors[field.name]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="text-sm text-ink-800 dark:text-paper-100">Message</label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full mt-1 rounded-xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.05] px-3.5 py-2.5 text-sm text-ink-900 dark:text-white outline-none focus:border-accent-cyan/60 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  onClick={send}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1fb959] text-white px-4 py-2.5 font-medium transition-colors"
                >
                  <FaWhatsapp size={18} /> Send to WhatsApp
                </button>

                {success && (
                  <p className="text-center text-sm text-accent-cyan">{success}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;
