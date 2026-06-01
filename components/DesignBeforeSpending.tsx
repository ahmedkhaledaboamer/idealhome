"use client";

import { useLocaleContext } from "@/context/LocaleProvider";
import {
  ArrowRight,
  CheckCircle2,
  PencilRuler,
  UploadCloud,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import MotionElement from "./motion/MotionElement";

export function DesignBeforeSpending() {
  const t = useTranslations();
  const { dir } = useLocaleContext();
  const cards = [
    {
      icon: UploadCloud,
      label: t("design.step1"),
    },
    {
      icon: PencilRuler,
      label: t("design.step2"),
    },
    {
      icon: Users,
      label: t("design.step3"),
    },
  ];

  return (
    <section className="w-full bg-brand-light py-20 px-4 md:px-10 lg:px-20">
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
        className="relative overflow-hidden max-w-[1400px] mx-auto rounded-[40px] p-8 md:p-16 shadow-2xl border border-brand-dark"
        style={{
          backgroundImage: 'url("/assets/1.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
  
        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="font-heading font-semibold text-4xl md:text-[32px] leading-tight text-white">
                {t("design.title")} <br />  <span className="text-brand-teal"> {t("design.subtitle")}</span>
              </h2>
             
              <p className="text-lg md:text-xl text-brand-light">
                {t("design.desc")}
              </p>
  
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal" />
                  <span className="text-base md:text-lg text-white">
                    {t("design.check1")}
                  </span>
                </div>
  
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal" />
                  <span className="text-base md:text-lg text-white">
                    {t("design.check2")}
                  </span>
                </div>
  
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal" />
                  <span className="text-base md:text-lg text-white">
                    {t("design.check3")}
                  </span>
                </div>
              </div>
  
              <button className="mt-6 self-start bg-brand-teal hover:bg-brand-teal/90 text-white px-10 py-4 rounded-xl font-medium text-lg flex items-center gap-4 transition-all">
                {t("design.cta")}
                <ArrowRight
                  className={`w-6 h-6 ${
                    dir === "rtl" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
  
            {/* Right Cards */}
            <div className="flex flex-col sm:flex-row gap-6">
              {cards.map((card, i) => (
                <MotionElement
                  key={i}
                  whileHover={{
                    y: -5,
                  }}
                  className="w-[180px] md:w-[220px] h-[220px] md:h-[260px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-[20px] flex flex-col items-center justify-center gap-6 p-4"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-teal flex items-center justify-center">
                    <card.icon className="w-10 h-10 text-white" />
                  </div>

                  <span className="text-lg md:text-xl text-white text-center whitespace-pre-line font-medium">
                    {card.label}
                  </span>
                </MotionElement>
              ))}
            </div>
          </div>
        </div>
      </MotionElement>
    </section>
  );
}
