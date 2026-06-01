"use client";

import { useLocaleContext } from "@/context/LocaleProvider";
import { motion } from "framer-motion";
import { ArrowLeft, Layers, PenTool, Settings, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import MotionElement from "./motion/MotionElement";
export function WhyDifficult() {
  const t = useTranslations();
  const { dir } = useLocaleContext();
  const problems = [
    t("diff.prob1"),
    t("diff.prob2"),
    t("diff.prob3"),
    t("diff.prob4"),
  ];

  const approaches = [
    {
      icon: Layers,
      title: t("diff.app1.title"),
      desc: t("diff.app1.desc"),
    },
    {
      icon: PenTool,
      title: t("diff.app2.title"),
      desc: t("diff.app2.desc"),
    },
    {
      icon: Wrench,
      title: t("diff.app3.title"),
      desc: t("diff.app3.desc"),
    },
    {
      icon: Settings,
      title: t("diff.app4.title"),
      desc: t("diff.app4.desc"),
    },
  ];

  return (
    <section className="w-full bg-brand-light py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto bg-brand-dark rounded-[20px] p-8 md:p-12 lg:p-16 border border-brand-dark">
        {/* Top Section */}
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
          className="mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight text-white mb-6 max-w-4xl">
            {t("diff.title")}
          </h2>
          <p className="text-lg text-brand-light mb-10 max-w-4xl">
            {t("diff.desc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {problems.map((problem, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center ${dir === "ltr" ? "rotate-180" : ""}`}
                >
                  <ArrowLeft className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading font-semibold text-xl md:text-2xl text-white">
                  {problem}
                </span>
              </div>
            ))}
          </div>
        </MotionElement>

        {/* Image Section */}
        <MotionElement
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-16 relative"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/assets/1.webp")',
            }}
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center hover:scale-110 transition-transform bg-black/20 backdrop-blur-sm">
              <div
                className={`w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${dir === "rtl" ? "border-r-[16px] border-r-white mr-2" : "border-l-[16px] border-l-white ml-2"}`}
              />
            </button>
          </div>
        </MotionElement>

        {/* The Approach Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          <MotionElement
            initial={{
              opacity: 0,
              x: dir === "rtl" ? 40 : -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:w-1/3"
          >
            <h3 className="font-heading font-semibold text-3xl md:text-[32px] text-white leading-tight whitespace-pre-line">
              {t("diff.app.title")}
            </h3>
          </MotionElement>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {approaches.map((item, i) => (
              <MotionElement
                key={i}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-4 border-t border-brand-muted-dark pt-6"
              >
                <item.icon className="w-8 h-8 text-brand-teal" />
                <h4 className="font-semibold text-lg text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-brand-light leading-relaxed text-justify">
                  {item.desc}
                </p>
              </MotionElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
