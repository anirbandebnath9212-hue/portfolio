import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "Restaurant Landing Page",
    description:
      "A modern luxury restaurant website built to deliver an elegant and immersive dining experience across desktop and mobile devices.",
    problem:
      "Creating a premium restaurant experience that communicates the brand, menu, atmosphere, and dining experience through a visually engaging interface.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Vercel",
    ],
    image: "/portfolio/restaurant-preview.png",
    featured: true,
    links: {
      github:
        "https://github.com/anirbandebnath9212-hue/restaurant-landing-page",
      live:
        "https://restaurant-landing-page-seven-theta.vercel.app/",
    },
  },

  {
    id: "02",
    title: "Food Ordering Application",
    description:
      "A food ordering application focused on building a smooth ordering experience with reusable React components and interactive UI.",
    problem:
      "Building a structured food ordering interface while keeping the application reusable, responsive, and easy to maintain.",
    tech: ["React", "JavaScript", "CSS"],
    image: null,
    featured: false,
    links: {
      github: "#",
      live: "#",
    },
  },

  {
    id: "03",
    title: "Medical Inventory System",
    description:
      "A medical inventory management system designed to organize products, inventory data, and day-to-day shop operations.",
    problem:
      "Managing medical inventory efficiently while keeping product information organized and accessible.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Database",
    ],
    image: null,
    featured: false,
    links: {
      github: "#",
      live: "#",
    },
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 25%"],
  });

  // Section label animation
  const labelX = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["30%", "0%"]
  );

  const labelOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 1]
  );

  // Featured project animation
  const featuredY = useTransform(
    scrollYProgress,
    [0, 0.45],
    [50, 0]
  );

  const featuredOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        py-20
        bg-white dark:bg-background-dark
        overflow-hidden
      "
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Label */}
        <motion.div
          style={{
            x: labelX,
            opacity: labelOpacity,
          }}
          className="
            flex
            items-center
            gap-3
            mb-8
          "
        >
          <span
            className="
              w-8
              h-px
              bg-primary
              shadow-[0_0_10px_rgba(37,99,235,0.5)]
            "
          />

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              font-medium
              text-primary
            "
          >
            03 // Selected Projects
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-4xl
            md:text-5xl
            font-bold
            mb-12
            text-slate-900
            dark:text-slate-100
          "
        >
          Things I’ve built.
        </motion.h2>

        {/* Featured Project */}
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <motion.div
              key={project.id}
              style={{
                y: featuredY,
                opacity: featuredOpacity,
              }}
              className="
                group
                mb-10
                overflow-hidden
                rounded-2xl
                border
                border-border-muted
                bg-white
                dark:bg-surface
                hover:border-primary
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  bg-slate-100
                  dark:bg-background-dark
                "
              >
                <img
                  src={project.image ?? ""}
                  alt={`${project.title} preview`}
                  className="
                    w-full
                    h-[280px]
                    md:h-[500px]
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-[1.02]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/10
                    transition-all
                    duration-500
                  "
                />

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    px-3
                    py-1.5
                    rounded-full
                    bg-black/70
                    backdrop-blur-md
                    text-white
                    text-xs
                    font-semibold
                    tracking-wide
                  "
                >
                  FEATURED PROJECT
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-10">

                <span
                  className="
                    text-xs
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  PROJECT_{project.id}
                </span>

                <h3
                  className="
                    mt-3
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-slate-900
                    dark:text-slate-100
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    max-w-3xl
                    mt-4
                    text-base
                    md:text-lg
                    leading-relaxed
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {project.description}
                </p>

                {/* Problem */}
                <div
                  className="
                    mt-7
                    pt-6
                    border-t
                    border-border-muted
                  "
                >
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      mb-2
                      text-slate-500
                    "
                  >
                    The Problem
                  </p>

                  <p
                    className="
                      max-w-3xl
                      text-sm
                      md:text-base
                      leading-relaxed
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {project.problem}
                  </p>
                </div>

                {/* Bottom */}
                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-6
                  "
                >
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          text-xs
                          font-medium
                          bg-slate-100
                          dark:bg-background-dark
                          text-slate-600
                          dark:text-slate-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5
                        py-2.5
                        rounded-lg
                        border
                        border-border-muted
                        text-sm
                        font-semibold
                        text-slate-800
                        dark:text-slate-100
                        hover:border-primary
                        hover:text-primary
                        transition
                      "
                    >
                      GitHub ↗
                    </a>

                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5
                        py-2.5
                        rounded-lg
                        bg-primary
                        text-white
                        text-sm
                        font-semibold
                        hover:opacity-90
                        transition
                      "
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  border
                  border-border-muted
                  rounded-2xl
                  p-8
                  bg-white
                  dark:bg-surface
                  hover:border-primary
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  flex
                  flex-col
                "
              >
                <span
                  className="
                    text-xs
                    mb-4
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  PROJECT_{project.id}
                </span>

                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-4
                    text-slate-900
                    dark:text-slate-100
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-sm
                    leading-relaxed
                    mb-6
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {project.description}
                </p>

                <div
                  className="
                    border-t
                    border-border-muted
                    pt-4
                    mb-6
                  "
                >
                  <p
                    className="
                      text-xs
                      uppercase
                      mb-2
                      text-slate-500
                    "
                  >
                    The Problem
                  </p>

                  <p
                    className="
                      text-sm
                      leading-relaxed
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {project.problem}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-xs
                        px-3
                        py-1.5
                        rounded-full
                        bg-slate-100
                        dark:bg-background-dark
                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="
                    mt-auto
                    flex
                    gap-6
                    text-sm
                    font-semibold
                  "
                >
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-slate-800
                      dark:text-slate-100
                      hover:text-primary
                      transition
                    "
                  >
                    View Code →
                  </a>

                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-slate-800
                      dark:text-slate-100
                      hover:text-primary
                      transition
                    "
                  >
                    Live Demo →
                  </a>
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}