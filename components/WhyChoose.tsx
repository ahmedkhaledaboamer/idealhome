"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import MotionElement from "./motion/MotionElement";
export function WhyChoose() {
  const t = useTranslations();
  const checks = [
    t("choose.check1"),
    t("choose.check2"),
    t("choose.check3"),
    t("choose.check4"),
  ];

  return (
    <section className="w-full bg-brand-light py-20 px-4 md:px-10 lg:px-20">
      <MotionElement
        itemType="div"
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
        className="max-w-[1400px] mx-auto bg-brand-teal  rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left Image */}
        <div className="w-full md:w-1/2 rounded-[30px] overflow-hidden ">
          <img
            src="./assets/why.png"
            alt="Villa Interior"
            className="w-full max-h-[600px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight text-white">
            {t("choose.title")}
          </h2>

          <div className="flex flex-col gap-4">
            {checks.map((item, i) => (
              <MotionElement
                key={i}
                itemType="div"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1 + 0.3,
                }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                <span className="text-base text-white leading-relaxed">
                  {item}
                </span>
              </MotionElement>
            ))}
          </div>

          <button className="self-start bg-white hover:bg-gray-100 text-brand-teal px-8 py-4 rounded-xl font-medium text-base transition-all">
            {t("choose.cta")}
          </button>
        </div>
      </MotionElement>
    </section>
  );
}
