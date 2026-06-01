"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
export function Gallery() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState("All");
  const categories = [
    {
      id: "All",
      label: t("gal.all"),
    },
    {
      id: "Kitchen",
      label: t("gal.kitchen"),
    },
    {
      id: "Door",
      label: t("gal.door"),
    },
    {
      id: "Closet",
      label: t("gal.closet"),
    },
    {
      id: "uPVC Windows",
      label: t("gal.windows"),
    },
  ];

  const projects = [
    {
      id: 1,
      category: "Kitchen",
      img: "/assets/7.webp",
      title: "Modern Kitchen",
      style: "Minimalist",
      layout: "min-h-[340px] md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      category: "Door",
      img: "/assets/2.webp",
      title: "Entry Door",
      style: "Contemporary",
      layout: "min-h-[260px]",
    },
    {
      id: 3,
      category: "Closet",
      img: "/assets/3.webp",
      title: "Walk-in Closet",
      style: "Luxury",
      layout: "min-h-[260px]",
    },
    {
      id: 4,
      category: "Kitchen",
      img: "/assets/8.webp",
      title: "Island Kitchen",
      style: "Coastal",
      layout: "min-h-[260px]",
    },
    {
      id: 5,
      category: "uPVC Windows",
      img: "/assets/4.webp",
      title: "Villa Windows",
      style: "Modern",
      layout: "min-h-[520px] md:row-span-2",
    },
    {
      id: 6,
      category: "Closet",
      img: "/assets/5.webp",
      title: "Wardrobe",
      style: "Bohemian",
      layout: "min-h-[260px] md:col-span-2",
    },
    {
      id: 7,
      category: "Door",
      img: "/assets/6.webp",
      title: "Entrance Door",
      style: "Premium",
      layout: "min-h-[260px]",
    },
  ];

  const filteredProjects = projects.filter(
    (p) => activeTab === "All" || p.category === activeTab,
  );

  return (
    <section className="relative w-full bg-brand-dark py-20 px-4 md:px-10 lg:px-20 border-y border-black shadow-lg">
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

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-heading font-semibold text-3xl md:text-[28px] text-white mb-10 text-center"
        >
          {t("gal.title")}
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2.5 rounded-xl text-base transition-all ${activeTab === cat.id ? "bg-white text-brand-dark font-medium" : "bg-transparent text-white border border-white hover:bg-white/10"}`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry-ish Grid */}
        <motion.div
          layout
          className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 auto-rows-[minmax(240px,auto)]"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                key={project.id}
                className={`relative rounded-[10px] overflow-hidden group cursor-pointer ${project.layout}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.img})`,
                  }}
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="bg-brand-dark/80 backdrop-blur-sm p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl text-white font-medium mb-1">
                      {project.title}
                    </h4>
                    <p className="text-brand-teal text-sm">{project.style}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-medium text-base transition-all"
        >
          {t("gal.cta")}
        </motion.button>
      </div>
    </section>
  );
}
