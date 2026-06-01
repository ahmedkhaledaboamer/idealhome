"use client";

import { useTranslations } from "next-intl";
import MotionElement from "./motion/MotionElement";
import { submitContactForm } from "@/app/actions/contact";

export function Contact() {
  const t = useTranslations();

  return (
    <section className="relative w-full overflow-hidden bg-[#0E0E0E]  py-24 px-4 md:px-10 lg:px-20">
      {/* Blueprint Background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06] text-white [mask-image:radial-gradient(circle_at_center,white,transparent_85%)]"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="site-blueprint-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        <rect width="800" height="600" fill="url(#site-blueprint-grid)" />

        <rect
          x="120"
          y="120"
          width="240"
          height="180"
          stroke="currentColor"
          strokeWidth="1"
        />

        <rect
          x="160"
          y="160"
          width="80"
          height="100"
          stroke="currentColor"
          strokeWidth="1"
        />

        <rect
          x="260"
          y="160"
          width="60"
          height="60"
          stroke="currentColor"
          strokeWidth="1"
        />

        <circle
          cx="500"
          cy="350"
          r="80"
          stroke="currentColor"
          strokeWidth="1"
        />

        <circle
          cx="500"
          cy="350"
          r="40"
          stroke="currentColor"
          strokeWidth="1"
        />

        <line
          x1="420"
          y1="350"
          x2="580"
          y2="350"
          stroke="currentColor"
          strokeWidth="1"
        />

        <line
          x1="500"
          y1="270"
          x2="500"
          y2="430"
          stroke="currentColor"
          strokeWidth="1"
        />

        <rect
          x="600"
          y="120"
          width="120"
          height="200"
          stroke="currentColor"
          strokeWidth="1"
        />

        <line
          x1="600"
          y1="180"
          x2="720"
          y2="180"
          stroke="currentColor"
          strokeWidth="1"
        />

        <line
          x1="600"
          y1="240"
          x2="720"
          y2="240"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left Content */}
        <MotionElement
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full lg:w-5/12 flex flex-col gap-8"
        >
          <div className="bg-brand-teal rounded-xl px-6 py-2 self-start">
            <span className="text-lg text-white">
              {t("contact.badge")}
            </span>
          </div>

          <h2 className="font-semibold text-3xl md:text-[32px] leading-tight text-white">
            {t("contact.title1")}
          </h2>

          <p className="text-lg text-white/90 leading-relaxed">
            {t("contact.desc")}
          </p>
        </MotionElement>

        {/* Right Form */}
        <MotionElement
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full lg:w-7/12 flex flex-col gap-8"
        >
          <h3 className="font-semibold text-3xl md:text-[32px] text-white">
            {t("contact.title2")}
          </h3>

          <form action={submitContactForm} className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                name="name"
                placeholder={t("contact.name")}
                required
                className="w-full rounded-md bg-white px-4 py-3 text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />

              <input
                type="email"
                name="email"
                placeholder={t("contact.email")}
                required
                className="w-full rounded-md bg-white px-4 py-3 text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder={t("contact.phone")}
              className="w-full rounded-md bg-white px-4 py-3 text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />

            <textarea
              name="message"
              placeholder={t("contact.msg")}
              rows={4}
              required
              className="w-full resize-none rounded-md bg-white px-4 py-3 text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />

            <button
              type="submit"
              className="mt-2 self-start rounded-xl bg-brand-teal px-10 py-3.5 text-base text-white transition-all hover:bg-brand-teal/90"
            >
              {t("contact.submit")}
            </button>
          </form>
        </MotionElement>
      </div>
    </section>
  );
}