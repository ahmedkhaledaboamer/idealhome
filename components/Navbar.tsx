"use client";

import { useLocaleContext } from "@/context/LocaleProvider";
import { Globe, Menu, Phone, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const t = useTranslations();
  const { locale, toggleLocale } = useLocaleContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Prevent background scroll when mobile menu is open
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <nav className="fixed top-6 inset-x-4 md:inset-x-10 lg:inset-x-20 z-50">
      <div className="w-full max-w-screen-xl mx-auto bg-brand-black/80 backdrop-blur-md border border-brand-dark rounded-2xl px-4 md:px-6 py-3 md:py-4 grid grid-cols-3 items-center gap-4">
        {/* Left - Language on mobile, links on desktop */}
        <div className="flex items-center gap-2 col-start-1">
          <button
            onClick={toggleLocale}
            className="flex lg:hidden items-center justify-center text-white/80 hover:text-white p-2 rounded-full border border-white/20 hover:border-white/40 transition-all"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
          </button>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#services"
              className="text-white hover:text-brand-teal transition-colors text-sm font-medium"
            >
              {t("nav.service")}
            </a>
            <a
              href="#projects"
              className="text-white hover:text-brand-teal transition-colors text-sm font-medium"
            >
              {t("nav.projects")}
            </a>
            <a
              href="#about"
              className="text-white hover:text-brand-teal transition-colors text-sm font-medium"
            >
              {t("nav.about")}
            </a>
            <a
              href="#contact"
              className="text-white hover:text-brand-teal transition-colors text-sm font-medium"
            >
              {t("nav.contact")}
            </a>
          </div>
        </div>

        {/* Center - Logo */}
        <div className="flex items-center gap-2 justify-center col-start-2">
          <Image
            src="/assets/ideal-factory-icon.png"
            alt="Logo"
            width={30}
            height={30}
            className="w-8 h-8"
          />
          <span className="font-heading font-medium tracking-tight text-sm md:text-md leading-4 text-brand-teal text-center">
            Ideal&nbsp;Factory
          </span>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-3 justify-end col-start-3">
            <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all"
          >
            <Phone className="w-4 h-4" />
            {t("nav.cta")}
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="lg:hidden absolute inset-x-0 top-full mt-3 z-40 flex justify-center">
            <div className="w-[calc(100%-2rem)] bg-brand-black/95 backdrop-blur-md border border-brand-dark rounded-2xl p-4 flex flex-col items-center text-center gap-4">
              <a
                href="#services"
                className="w-full text-white hover:text-brand-teal transition-colors text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {t("nav.service")}
              </a>
              <a
                href="#projects"
                className="w-full text-white hover:text-brand-teal transition-colors text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {t("nav.projects")}
              </a>
              <a
                href="#about"
                className="w-full text-white hover:text-brand-teal transition-colors text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {t("nav.about")}
              </a>
              <a
                href="#contact"
                className="w-full text-white hover:text-brand-teal transition-colors text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {t("nav.contact")}
              </a>

              <div className="pt-2 border-t border-white/10 flex flex-col items-center gap-3 w-full">
                <button
                  onClick={() => {
                    toggleLocale();
                    setOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 text-white/90 hover:text-white px-3 py-2 rounded-full border border-white/10 transition-all text-sm font-medium"
                >
                  <Globe className="w-4 h-4" />
                  {locale === "en" ? "العربية" : "English"}
                </button>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-2 rounded-full font-medium text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {t("nav.cta")}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
