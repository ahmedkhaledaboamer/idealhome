"use client";
import { OUR_SOLUTIONS } from "@/constants/our-solutions";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export const OurSolutionSection = () => {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundBgRef = useRef<HTMLDivElement>(null);
  const strokeTextRef = useRef<SVGSVGElement>(null);
  const gradientOverlayRef = useRef<SVGSVGElement>(null);
  const maskGroupRef = useRef<SVGGElement>(null);
  const textGroupRef = useRef<SVGGElement>(null);
  const solutionsTextRef = useRef<HTMLDivElement>(null);
  const darkGradientBgRef = useRef<HTMLDivElement>(null);
  const headerIconRef = useRef<HTMLDivElement>(null);
  const headerTitleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current = [];
  }, []);

  const setCardRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      const t = sectionRef.current;
      if (!t) return;

      const baseScale = 0.65;
      const introScale = 1.2;
      const exitScale = 5.2;
      const e = "720 450";

      gsap.set(backgroundRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
      });
      gsap.set(foregroundBgRef.current, { opacity: 1 });
      gsap.set(strokeTextRef.current, { opacity: 1, scale: 1 });
      gsap.set(gradientOverlayRef.current, { opacity: 0 });
      gsap.set(maskGroupRef.current, {
        opacity: 1,
        scale: baseScale,
        svgOrigin: e,
      });
      gsap.set(textGroupRef.current, {
        opacity: 0,
        scale: baseScale,
        svgOrigin: e,
      });
      gsap.set(solutionsTextRef.current, { opacity: 0, y: 28 });
      gsap.set(darkGradientBgRef.current, { opacity: 0 });
      gsap.set(headerIconRef.current, { opacity: 0, y: -8 });
      gsap.set(headerTitleRef.current, { opacity: 0, y: 44 });
      cardsRef.current.forEach((card) => {
        if (card) gsap.set(card, { opacity: 0, y: 80, scale: 0.93 });
      });

      const n = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: t,
          start: "top top",
          end: "+=340%",
          pin: true,
          scrub: 0.55,
          anticipatePin: 1,
        },
      });

      // Phase 0+1 linked: Stroke text disappears instantly while SVG scales in
      n.to(
        strokeTextRef.current,
        { opacity: 0, duration: 0.15, ease: "power2.out" },
        0,
      )
        // Fade out foreground background as stroke text disappears
        .to(
          foregroundBgRef.current,
          { opacity: 0, duration: 0.5, ease: "power2.out" },
          0,
        )
        // Fade in gradient overlay as stroke text disappears
        .to(
          gradientOverlayRef.current,
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          0,
        )
        // SVG mask scales in (linked with Phase 0)
        .to(
          [maskGroupRef.current, textGroupRef.current],
          {
            scale: introScale,
            svgOrigin: e,
            duration: 2,
            ease: "power2.out",
          },
          0,
        )
        .to(
          textGroupRef.current,
          { opacity: 1, duration: 0.45, ease: "power2.out" },
          0,
        )
        // Phase 2: SVG mask scales out
        .to(
          [maskGroupRef.current, textGroupRef.current],
          {
            scale: exitScale,
            svgOrigin: e,
            duration: 2.9,
            ease: "power2.inOut",
          },
          1.55,
        )
        .to(
          [maskGroupRef.current, textGroupRef.current],
          { opacity: 0, duration: 1.2, ease: "power1.out" },
          3.65,
        )
        .to(
          gradientOverlayRef.current,
          { opacity: 0, duration: 1.2, ease: "power1.out" },
          3.85,
        )
        // Phase 3: Solutions text appears
        .to(
          solutionsTextRef.current,
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          4.45,
        )
        .to(
          solutionsTextRef.current,
          { opacity: 0, y: -24, duration: 0.6, ease: "power2.in" },
          5.65,
        )
        // Phase 4: Dark gradient + blur
        .to(
          darkGradientBgRef.current,
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          6.05,
        )
        .to(
          backgroundRef.current,
          {
            filter: "blur(8px)",
            scale: 1.03,
            duration: 0.8,
            ease: "power2.out",
          },
          6.05,
        )
        // Phase 5: Header icon + title
        .to(
          headerIconRef.current,
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
          6.15,
        )
        .to(
          headerTitleRef.current,
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          6.2,
        )
        .to(
          headerIconRef.current,
          { opacity: 0, y: -12, duration: 0.45, ease: "power2.in" },
          6.62,
        )
        // Phase 6: Cards animate in
        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.72,
            stagger: 0.11,
            ease: "power2.out",
          },
          6.72,
        );
    },
    { scope: sectionRef },
  );

  const stroke1 = t("ourSolutions.stroke1");
  const stroke2 = t("ourSolutions.stroke2");
  const stroke3 = t("ourSolutions.stroke3");

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative min-h-screen w-full overflow-x-clip"
      style={{ backgroundColor: "rgb(10, 10, 10)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={backgroundRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("/assets/parallax-effect-background-image.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
            filter: "blur(0px)",
            opacity: 1,
          }}
        ></div>

        {/* Foreground background for stroke text phase */}
        <div
          ref={foregroundBgRef}
          className="absolute inset-0 z-[3]"
          style={{
            backgroundImage: 'url("/assets/parallax-foreground.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />

        {/* Transparent stroke intro text (SVG) */}
        <svg
          ref={strokeTextRef}
          className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-dvh w-full select-none"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <text
            x="720"
            y="296"
            fill="transparent"
            stroke="rgba(255,255,255,0.92)"
            strokeWidth="3"
            paintOrder="stroke"
            fontFamily='"Bebas Neue", Impact, sans-serif'
            fontSize="clamp(96px, 16vw, 168px)"
            fontWeight="400"
            letterSpacing="0.02em"
            textAnchor="middle"
          >
            {stroke1}
          </text>
          <text
            x="720"
            y="450"
            fill="transparent"
            stroke="rgba(255,255,255,0.92)"
            strokeWidth="3"
            paintOrder="stroke"
            fontFamily='"Bebas Neue", Impact, sans-serif'
            fontSize="clamp(96px, 16vw, 168px)"
            fontWeight="400"
            letterSpacing="0.02em"
            textAnchor="middle"
          >
            {stroke2}
          </text>
          <text
            x="720"
            y="604"
            fill="transparent"
            stroke="rgba(255,255,255,0.92)"
            strokeWidth="3"
            paintOrder="stroke"
            fontFamily='"Bebas Neue", Impact, sans-serif'
            fontSize="clamp(96px, 16vw, 168px)"
            fontWeight="400"
            letterSpacing="0.02em"
            textAnchor="middle"
          >
            {stroke3}
          </text>
        </svg>

        <svg
          ref={gradientOverlayRef}
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-dvh w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          style={{ opacity: 0 }}
        >
          <defs>
            <mask
              id="_R_2av5t9ivb_"
              maskUnits="userSpaceOnUse"
              maskContentUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="900"
            >
              <rect x="0" y="0" width="1440" height="900" fill="white"></rect>
              <g
                ref={maskGroupRef}
                data-svg-origin="719.9999645402986 449.9999803534086"
                transform="matrix(0.54,0,0,0.54,331.2,207)"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transformOrigin: "0px 0px",
                  opacity: 0,
                }}
              >
                <text
                  x="720"
                  y="296"
                  fill="black"
                  fontFamily='"Bebas Neue", Impact, sans-serif'
                  fontSize="clamp(96px, 16vw, 168px)"
                  fontWeight="400"
                  letterSpacing="0.02em"
                  textAnchor="middle"
                >
                  {stroke1}
                </text>
                <text
                  x="720"
                  y="450"
                  fill="black"
                  fontFamily='"Bebas Neue", Impact, sans-serif'
                  fontSize="clamp(96px, 16vw, 168px)"
                  fontWeight="400"
                  letterSpacing="0.02em"
                  textAnchor="middle"
                >
                  {stroke2}
                </text>
                <text
                  x="720"
                  y="604"
                  fill="black"
                  fontFamily='"Bebas Neue", Impact, sans-serif'
                  fontSize="clamp(96px, 16vw, 168px)"
                  fontWeight="400"
                  letterSpacing="0.02em"
                  textAnchor="middle"
                >
                  {stroke3}
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/assets/parallax-foreground.webp"
            x="0"
            y="0"
            width="1440"
            height="900"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#_R_2av5t9ivb_)"
          ></image>
        </svg>
        <svg
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-dvh w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g
            ref={textGroupRef}
            data-svg-origin="719.9999645402986 449.9999803534086"
            transform="matrix(0.54,0,0,0.54,331.2,207)"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px",
              opacity: 1,
            }}
          >
            <text
              x="720"
              y="296"
              fill="transparent"
              stroke="rgba(255,255,255,0.92)"
              strokeWidth="3"
              paintOrder="stroke"
              fontFamily='"Bebas Neue", Impact, sans-serif'
              fontSize="clamp(96px, 16vw, 168px) "
              fontWeight="400"
              letterSpacing="0.02em"
              textAnchor="middle"
            >
              {stroke1}
            </text>
            <text
              x="720"
              y="450"
              fill="transparent"
              stroke="rgba(255,255,255,0.92)"
              strokeWidth="3"
              paintOrder="stroke"
              fontFamily='"Bebas Neue", Impact, sans-serif'
              fontSize="clamp(96px, 16vw, 168px) "
              fontWeight="400"
              letterSpacing="0.02em"
              textAnchor="middle"
            >
              {stroke2}
            </text>
            <text
              x="720"
              y="604"
              fill="transparent"
              stroke="rgba(255,255,255,0.92)"
              strokeWidth="3"
              paintOrder="stroke"
              fontFamily='"Bebas Neue", Impact, sans-serif'
              fontSize="clamp(96px, 16vw, 168px) "
              fontWeight="400"
              letterSpacing="0.02em"
              textAnchor="middle"
            >
              {stroke3}
            </text>
          </g>
        </svg>
        <div
          ref={solutionsTextRef}
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6 text-center"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 28px)",
            opacity: 0,
          }}
        >
          <div
            className="flex flex-col items-center justify-center"
            style={{ gap: 22 }}
          >
            <img
              alt="Ideal Factory Icon"
              loading="lazy"
              width="96"
              height="108"
              decoding="async"
              data-nimg="1"
              className="object-contain"
              style={{
                color: "transparent",
                height: "clamp(52px, 6.5vh, 84px)",
                width: "auto",
                filter: "drop-shadow(rgba(0, 0, 0, 0.22) 0px 10px 24px)",
              }}
              srcSet="
              /assets/Fideal-factory-icon.png?w=96&q=75&dpl=dpl_D5DsokQmJMHZbz8ry1o5cwhpd6kL1x,
              /assets/Fideal-factory-icon.png?w=256&q=75&dpl=dpl_D5DsokQmJMHZbz8ry1o5cwhpd6kL2x"
              src="/assets/Fideal-factory-icon.png?w=256&q=75&dpl=dpl_D5DsokQmJMHZbz8ry1o5cwhpd6kL"
            />
            <h2
              style={{
                fontFamily: "Lexend, Inter, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4.6vw, 3rem)",
                lineHeight: 1.2,
                color: "rgb(255, 255, 255)",
                margin: 0,
                textShadow: "rgba(0, 0, 0, 0.3) 0px 10px 28px",
              }}
            >
              {t("ourSolutions.introTitle")}
            </h2>
            <p
              style={{
                fontFamily: "Lexend, Inter, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(1rem, 2.4vw, 1.6rem)",
                lineHeight: 1.3,
                color: "rgb(255, 255, 255)",
                maxWidth: "min(78vw, 720px)",
                margin: 0,
                textShadow: "rgba(0, 0, 0, 0.3) 0px 10px 28px",
              }}
            >
              {t("ourSolutions.introDescLine1")}
              <br />
              <span style={{ color: "var(--primary)" }}>
                {t("ourSolutions.introDescHighlight")}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        ref={darkGradientBgRef}
        className="relative z-40 w-full min-h-screen"
        style={{ opacity: 0 }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.35) 0%,
            rgba(0, 0, 0, 0.2) 40%,
            rgba(0, 0, 0, 0.5) 100%
          )`,
          }}
        ></div>
        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,3.2vw,2.875rem)] pt-14 pb-8">
          <div className="mx-auto mb-8 max-w-[1114px] text-center">
            <div
              ref={headerIconRef}
              className="mb-5 flex justify-center"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, -8px)",
                opacity: 0,
              }}
            >
              <img
                alt="Ideal Factory Icon"
                aria-hidden="true"
                loading="lazy"
                width="96"
                height="108"
                decoding="async"
                data-nimg="1"
                className="object-contain"
                style={{
                  color: "transparent",
                  height: "clamp(48px, 6vh, 72px)",
                  width: "auto",
                }}
                srcSet="
                /assets/Fideal-factory-icon.png?w=96&q=75&dpl=dpl_D5DsokQmJMHZbz8ry1o5cwhpd6kL  1x,
                /assets/Fideal-factory-icon.png?w=256&q=75&dpl=dpl_D5DsokQmJMHZbz8ry1o5cwhpd6kL 2x
              "
                src="/assets/Fideal-factory-icon.png?w=256&q=75&dpl=dpl_D5DsokQmJMHZbz8ry1o5cwhpd6kL"
              />
            </div>
            <div
              ref={headerTitleRef}
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 44px)",
                opacity: 0,
              }}
            >
              <h2
                style={{
                  fontFamily: "'Lexend', Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.9rem, 4vw, 3rem)",
                  lineHeight: 1.2,
                  color: "#ffffff",
                  maxWidth: "min(100vw, 820px)",
                  margin: "0 auto",
                }}
              >
                {t("ourSolutions.headerTitle")}
              </h2>
              <p
                style={{
                  fontFamily: "'Lexend', Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(1rem, 2.3vw, 1.8rem)",
                  lineHeight: 1.3,
                  color: "#ffffff",
                  marginTop: "0.75rem",
                  maxWidth: "min(100vw, 820px)",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {t("ourSolutions.headerDescLine1")}
                <br />
                <span style={{ color: "var(--primary)" }}>
                  {t("ourSolutions.headerDescHighlight")}
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {OUR_SOLUTIONS.map((solution) => (
              <ProductCard
                key={solution.href}
                title={t(solution.titleKey)}
                description={t(solution.descriptionKey)}
                imageUrl={solution.image}
                icon={solution.icon}
                ref={setCardRef}
              />
            ))}
          </div> 
          <div className="mt-8 flex justify-center">
            <a
              className="inline-flex items-center gap-3 justify-center rounded-full bg-brand-teal px-6 py-3 text-base font-medium text-white shadow-md hover:bg-brand-teal/90 transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
              href="/projects"
            >
              <span className="px-2">{t("ourSolutions.cta")}</span>
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};
