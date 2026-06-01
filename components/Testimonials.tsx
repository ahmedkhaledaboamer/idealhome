"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import MotionElement from "./motion/MotionElement";
import { useLocaleContext } from "@/context/LocaleProvider";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "/assets/user/khaled.jpeg",
    text: "Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridiculus Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridicu",
  },
  {
    name: "Alex Roke",
    image: "/assets/user/ahmed.jpeg",
    text: "Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridiculus Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridicu",
  }  ,
  {
    name: "Emily Davis",
    image: "/assets/user/mo.jpeg",
    text: "Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridiculus Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridicu",
  },
  {
    name: "samy Davis",
    image: "/assets/user/me.jpeg",
    text: "Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridiculus Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridicu",
  },

];

export function Testimonials() {
  const t = useTranslations();
  const { dir } = useLocaleContext();
  const swiperRef = useRef<SwiperType | null>(null);

  // ── Track slide position to know which arrow is "active" ──────────────────
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd]             = useState(false);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  // Arrow border/icon colour helper
  const activeClass   = "border-brand-teal text-brand-teal";
  const inactiveClass = "border-brand-muted text-brand-muted";

  // For RTL the logical "prev" direction is visually reversed
  const prevActive = dir === "rtl" ? !isEnd      : !isBeginning;
  const nextActive = dir === "rtl" ? !isBeginning : !isEnd;

  return (
    <section className="w-full bg-brand-dark py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">

        {/* Left Content */}
        <MotionElement
          itemType="div"
          initial={{ opacity: 0, x: dir === "rtl" ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/3 flex flex-col gap-6"
        >
          <span className="text-2xl text-brand-teal">{t("test.label")}</span>
          <h2 className="font-semibold text-3xl md:text-[32px] leading-tight text-white mb-4">
            {t("test.title")}
          </h2>

          <div className="flex gap-4">
            {/* Prev */}
            <button
              onClick={handlePrev}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors hover:bg-white/5 ${
                prevActive ? activeClass : inactiveClass
              }`}
            >
              <ChevronLeft
                className={`w-6 h-6 ${dir === "rtl" ? "rotate-180" : ""}`}
              />
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors hover:bg-white/5 ${
                nextActive ? activeClass : inactiveClass
              }`}
            >
              <ChevronRight
                className={`w-6 h-6 ${dir === "rtl" ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </MotionElement>

        {/* Right Cards — Swiper */}
        <div className="w-full lg:w-2/3 overflow-hidden">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // Sync initial state
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            // ── Always 2 slides visible; drop to 1 on mobile ────────────────
            slidesPerView={2}
            spaceBetween={24}
            dir={dir}
            breakpoints={{
              0:   { slidesPerView: 1 },   // mobile  → 1
              768: { slidesPerView: 2 },   // tablet+ → 2
            }}
            // ── Keep arrow state in sync ─────────────────────────────────────
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="overflow-hidden"
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i} className="w-full">
                <MotionElement
                  itemType="div"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-brand-dark border border-brand-dark rounded-xl p-6 md:p-8 shadow-[0_0_12px_rgba(77,74,74,0.3)] flex flex-col gap-6"
                >
                  <Quote
                    className={`w-10 h-10 text-brand-teal ${dir === "rtl" ? "scale-x-[-1]" : ""}`}
                  />
                  <p className="text-base text-brand-muted leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-brand-muted-dark flex-shrink-0">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      ) : (
                        <div className="w-full h-full bg-brand-muted-dark" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg text-brand-teal">{testimonial.name}</span>
                      <span className="text-sm text-white">{t("test.role")}</span>
                    </div>
                  </div>
                </MotionElement>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}