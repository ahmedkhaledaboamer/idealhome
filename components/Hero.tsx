"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocaleContext } from "@/context/LocaleProvider";
import MotionElement from "./motion/MotionElement";

export function Hero() {
  const t = useTranslations();
  const { dir } = useLocaleContext();

  return (
    <section className="relative h-[100dvh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="./assets/hero-section-loop-video_kjmmtv.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="max-w-7xl px-6 text-center">

          <MotionElement
            as="h1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-white
              font-bold
              leading-[1.05]
              text-2xl
              md:text-3xl
              lg:text-[60px]
            "
          >
            {t("hero.title1")}
          </MotionElement>

          <MotionElement
            as="h2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="
              text-cyan-400
              font-bold
              leading-[1.05]
              mt-2
              text-2xl
              md:text-3xl
              lg:text-[60px]
            "
          >
            {t("hero.title2")}
          </MotionElement>

          <MotionElement
            as="p"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="
              max-w-5xl
              mx-auto
              mt-8
              text-white/90
              text-md
               
            "
          >
            {t("hero.subtitle")}
          </MotionElement>

          <MotionElement
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <button
              className={`
                inline-flex
                items-center
                gap-3
                bg-white
                text-black
                px-10
                py-5
                rounded-2xl
                font-semibold
                text-md
                hover:scale-105
                transition-all
                ${dir === "rtl" ? "flex-row-reverse" : ""}
              `}
            >
              {t("hero.cta")}
              <ArrowRight
                size={22}
                className={dir === "rtl" ? "rotate-180" : ""}
              />
            </button>
          </MotionElement>

        </div>
      </div>
    </section>
  );
}