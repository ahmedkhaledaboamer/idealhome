"use client";

import { useLocaleContext } from "@/context/LocaleProvider";
import { useTranslations } from "next-intl";
import MotionElement from "./motion/MotionElement";
export function FloatingAgent() {
  const t = useTranslations();
  const { dir } = useLocaleContext();
  return (
    <div
      className={`fixed bottom-8 z-50 flex items-end gap-4 ${dir === "rtl" ? "left-8 flex-row-reverse" : "right-8"}`}
    >
      {/* Tooltip */}
      <MotionElement
        initial={{
          opacity: 0,
          y: 10,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 1,
          duration: 0.5,
        }}
       >
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 ${dir === "rtl" ? "-left-1" : "-right-1"}`}
        />
      </MotionElement>

      {/* Avatar Button */}
      <a href="#contact" className="relative group block">
        {/* Pulse Ring */}
        <div className="absolute inset-0 bg-brand-teal/40 rounded-full animate-ping" />

        {/* Avatar Image */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-brand-teal overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300 bg-brand-dark">
          <img
            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=2000&auto=format&fit=crop"
            alt="Customer Service"
            className="w-full h-full object-cover"
          />
        </div>
      </a>
    </div>
  );
}
