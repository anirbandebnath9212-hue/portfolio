import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "Food Delivery App",
    description:
      "A full-stack food delivery platform built with React, Node.js, Express, and MongoDB, featuring restaurant browsing, food ordering, cart management, authentication, checkout, and order tracking.",
    problem:
      "Building a complete food ordering experience that connects customers, restaurants, food items, carts, and orders into one full-stack application.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Vercel",
    ],
    image: "/portfolio/food-delivery-preview.png",
    links: {
      github:
        "https://github.com/anirbandebnath9212-hue/food-delivery-app",
      live:
        "https://food-delivery-app-topaz-eight.vercel.app/",
    },
  },

  {
    id: "02",
    title: "Real-Time Chat Application",
    description:
      "A full-stack real-time messaging platform built with React, Node.js, Express, MongoDB, and Socket.IO, featuring secure authentication, real-time communication, media sharing, and a responsive modern chat interface.",
    problem:
      "Building a complete messaging system combining authentication, real-time communication, media uploads, and responsive UI into one full-stack application.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Cloudinary",
    ],
    image: "/portfolio/chat-preview.png",
    links: {
      github:
        "https://github.com/anirbandebnath9212-hue/real-time-chat-app",
      live: "#",
    },
  },

  {
    id: "03",
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
    links: {
      github:
        "https://github.com/anirbandebnath9212-hue/restaurant-landing-page",
      live:
        "https://restaurant-landing-page-seven-theta.vercel.app/",
    },
  },
];

function ProjectCard({
  project,
  index,
  scrollYProgress,
}: {
  project: (typeof projects)[number];
  index: number;
  scrollYProgress: any;
}) {
  const [imageOpen, setImageOpen] = useState(false);

  const total = projects.length;

  const start = index / total;
  const enter = start + 0.1;
  const settle = start + 0.3;

  // Project enters slowly from below
  const y = useTransform(
    scrollYProgress,
    [start, enter, settle],
    ["55vh", "18vh", "0vh"]
  );

  // Smooth fade
  const opacity = useTransform(
    scrollYProgress,
    [start, enter],
    [0, 1]
  );

  // Small scale effect
  const scale = useTransform(
    scrollYProgress,
    [start, settle],
    [0.97, 1]
  );

  /*
    Only the currently active project can receive clicks.

    This prevents invisible cards behind the current card
    from catching clicks on buttons/images.
  */
  const pointerEvents = useTransform(
    scrollYProgress,
    (progress:number) => {
      const isVisible =
        progress >= start &&
        progress < Math.min(1, start + 0.3);

      return isVisible ? "auto" : "none";
    }
  );

  // Close image with Escape key
  useEffect(() => {
    if (!imageOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setImageOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageOpen]);

  // Prevent page scrolling while image is open
  useEffect(() => {
    if (imageOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [imageOpen]);

  return (
    <>
      {/* PROJECT CARD */}
      <motion.div
        style={{
          y,
          opacity,
          scale,
          zIndex: index + 1,
          pointerEvents,
        }}
        className="
          absolute
          top-[12vh]
          left-0
          right-0
          mx-auto
          w-full
          max-w-[1100px]
          px-6
        "
      >
        <div
          className="
            group
            overflow-hidden
            rounded-2xl
            border
            border-border-muted
            bg-white
            dark:bg-surface
            shadow-[0_25px_90px_rgba(0,0,0,0.20)]
          "
        >
          {/* PROJECT IMAGE */}
          {project.image ? (
            <div
              className="
                relative
                overflow-hidden
                bg-slate-100
                dark:bg-background-dark
                cursor-zoom-in
              "
              onClick={() => setImageOpen(true)}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="
                  block
                  w-full
                  h-[190px]
                  sm:h-[220px]
                  md:h-[250px]
                  object-cover
                  object-top
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
              />

              {/* HOVER MESSAGE */}
              <div
                className="
                  absolute
                  bottom-4
                  right-4
                  px-3
                  py-1.5
                  rounded-full
                  bg-black/60
                  backdrop-blur-md
                  text-white
                  text-[10px]
                  font-medium
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              >
                Click to view
              </div>

              {/* IMAGE OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/0
                  group-hover:bg-black/10
                  transition-all
                  duration-500
                  pointer-events-none
                "
              />
            </div>
          ) : (
            <div
              className="
                h-[100px]
                bg-slate-100
                dark:bg-background-dark
                flex
                items-center
                justify-center
              "
            >
              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-slate-400
                "
              >
                Project Preview
              </span>
            </div>
          )}

          {/* CONTENT */}
          <div className="p-5 md:p-6">
            {/* PROJECT NUMBER */}
            <span
              className="
                text-xs
                text-slate-500
                dark:text-slate-400
              "
            >
              PROJECT_{project.id}
            </span>

            {/* TITLE */}
            <h3
              className="
                mt-2
                text-2xl
                md:text-3xl
                font-bold
                tracking-tight
                text-slate-900
                dark:text-slate-100
              "
            >
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                max-w-3xl
                mt-2
                text-sm
                md:text-base
                leading-relaxed
                text-slate-600
                dark:text-slate-400
              "
            >
              {project.description}
            </p>

            {/* PROBLEM */}
            <div
              className="
                mt-4
                pt-4
                border-t
                border-border-muted
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  mb-1.5
                  text-slate-500
                "
              >
                The Problem
              </p>

              <p
                className="
                  max-w-3xl
                  text-xs
                  md:text-sm
                  leading-relaxed
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {project.problem}
              </p>
            </div>

            {/* TECHNOLOGIES + BUTTONS */}
            <div
              className="
                mt-5
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-4
              "
            >
              {/* TECHNOLOGIES */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-2.5
                      py-1
                      rounded-full
                      text-[10px]
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

              {/* LINKS */}
              <div className="flex gap-3 shrink-0">
                {project.links.github !== "#" && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4
                      py-2
                      rounded-lg
                      border
                      border-border-muted
                      text-xs
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
                )}

                {project.links.live !== "#" && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4
                      py-2
                      rounded-lg
                      bg-primary
                      text-white
                      text-xs
                      font-semibold
                      hover:opacity-90
                      transition
                    "
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FULLSCREEN IMAGE VIEWER */}
      <AnimatePresence>
        {imageOpen && project.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-black/85
              backdrop-blur-md
              p-4
              sm:p-6
              cursor-zoom-out
            "
            onClick={() => setImageOpen(false)}
          >
            <motion.img
              src={project.image}
              alt={`${project.title} full preview`}
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[96vw]
                max-h-[90vh]
                sm:max-w-[94vw]
                sm:max-h-[92vh]
                object-contain
                rounded-lg
                shadow-[0_30px_100px_rgba(0,0,0,0.5)]
                cursor-zoom-out
              "
            />

            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                px-4
                py-2
                rounded-full
                bg-white/10
                backdrop-blur-md
                text-white
                text-xs
                tracking-wide
                border
                border-white/10
                pointer-events-none
              "
            >
              Click image or press Esc to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const labelOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.95, 1],
    [1, 1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        h-[420vh]
        bg-white
        dark:bg-background-dark
      "
    >
      {/* STICKY PROJECT AREA */}
      <div
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
        "
      >
        {/* SECTION HEADER */}
        <motion.div
          style={{
            opacity: labelOpacity,
          }}
          className="
            absolute
            top-7
            left-0
            right-0
            z-50
            max-w-[1200px]
            mx-auto
            px-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              mb-2
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
          </div>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-slate-100
            "
          >
            Things I’ve built.
          </h2>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="relative w-full h-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* PROGRESS DOTS */}
        <div
          className="
            absolute
            bottom-5
            left-1/2
            -translate-x-1/2
            z-50
            flex
            items-center
            gap-2
          "
        >
          <span
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-primary
            "
          />

          <span
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-primary
              opacity-50
            "
          />

          <span
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-primary
              opacity-50
            "
          />
        </div>
      </div>
    </section>
  );
}