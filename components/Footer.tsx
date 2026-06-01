"use client";

import { Globe, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import MotionElement from "./motion/MotionElement";
import Image from "next/image";
export function Footer() {
  const t = useTranslations();
  return (
    <footer
  className="relative w-full pt-20 pb-10 px-4 md:px-10 lg:px-20 overflow-hidden"
  style={{
    backgroundImage: 'url("/assets/7.webp")',
    backgroundSize: "cover",
    backgroundPosition: "center top",
    translate: "none",
    rotate: "none",
    scale: "none",
    transform: "translate(0px, 0px)",
    filter: "blur(0px)",
    opacity: 1,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Content */}
  <div className="relative z-10">
    <MotionElement
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="max-w-[1200px] mx-auto"
    >
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Col 1: Logo & Desc */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
             
            {/* Logo Area */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/ideal-factory-icon.png"
            alt="Logo"
            width={30}
            height={30}
            className="w-8 h-8"
          />
          <span className="font-heading font-medium  tracking-tight text-md leading-4 text-brand-teal">
            Ideal <br />
            Factory
          </span>
        </div>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            {t("footer.desc")}
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl text-brand-teal mb-2">
            {t("footer.links")}
          </h4>
          {[
            t("nav.about"),
            t("nav.service"),
            t("test.label"),
            t("nav.projects"),
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="text-white hover:text-brand-teal transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Col 3: Explore */}
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl text-brand-teal mb-2">
            {t("footer.explore")}
          </h4>
          {[
            t("sol.grid.closets.title"),
            t("sol.grid.kitchens.title"),
            t("sol.grid.doors.title"),
            t("sol.grid.windows.title"),
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="text-white hover:text-brand-teal transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Col 4: Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="text-2xl text-brand-teal mb-2">
            {t("footer.contact")}
          </h4>

          <div className="flex items-center gap-4">
            <Globe className="w-5 h-5 text-brand-teal" />
            <a
              href="#"
              className="text-lg text-white hover:text-brand-teal transition-colors"
              dir="ltr"
            >
              www.idealhome.ae
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-brand-teal" />
            <a
              href="mailto:info@idealhome.com"
              className="text-lg text-white hover:text-brand-teal transition-colors"
              dir="ltr"
            >
              info@idealhome.com
            </a>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-brand-teal mt-1" />
            <div className="flex flex-col gap-1" dir="ltr">
              <a
                href="tel:+97100000000"
                className="text-lg text-white hover:text-brand-teal transition-colors"
              >
                +971-000-00-000
              </a>
              <a
                href="tel:+971503122300"
                className="text-lg text-white hover:text-brand-teal transition-colors"
              >
                971 (0)50 312 2300
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-teal/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-lg text-white">{t("footer.copy")}</p>
        <div className="flex gap-8">
          <a
            href="#"
            className="text-lg text-white/60 hover:text-white transition-colors"
          >
            {t("footer.terms")}
          </a>
          <a
            href="#"
            className="text-lg text-white/60 hover:text-white transition-colors"
          >
            {t("footer.privacy")}
          </a>
        </div>
      </div>
    </MotionElement>
  </div>
</footer>
  );
}
