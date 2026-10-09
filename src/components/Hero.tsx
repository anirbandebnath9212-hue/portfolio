
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { createAvatar } from "@bible-strong/avatar-react";
import "@bible-strong/avatar-react/styles.css";

import avatarJson from "../assets/avatar.avatar.json";

const PortfolioAvatar = createAvatar(avatarJson);

export default function Hero() {
  const { scrollY } = useScroll();

  // Avatar-only cursor movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
  });

  const avatarX = useTransform(smoothMouseX, [-1, 1], [-12, 12]);
  const avatarY = useTransform(smoothMouseY, [-1, 1], [-6, 6]);
  const avatarTilt = useTransform(smoothMouseX, [-1, 1], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Original heading movement on scroll
  const line1X = useTransform(
    scrollY,
    [0, 500],
    ["0%", "-100%"]
  );

  const line2X = useTransform(
    scrollY,
    [0, 500],
    ["0%", "100%"]
  );

  const line3X = useTransform(
    scrollY,
    [0, 500],
    ["0%", "-100%"]
  );

  // Original content fade while scrolling
  const contentOpacity = useTransform(
    scrollY,
    [0, 350],
    [1, 0]
  );

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative flex min-h-screen items-center
        overflow-hidden
        bg-white dark:bg-background-dark
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.08),transparent_55%)]
          dark:bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.12),transparent_55%)]
        "
      />

      <div
        className="
          relative mx-auto w-full max-w-[1400px]
          px-6 pt-24 pb-10
        "
      >
        {/* Small label */}
        <motion.p
          style={{ opacity: contentOpacity }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            mb-7 text-center
            text-[10px] uppercase tracking-[0.35em]
            text-slate-500 dark:text-slate-400
            sm:text-xs
          "
        >
          Full-Stack Engineer
        </motion.p>

        {/* Animated heading */}
        <div
          className="
            text-center font-black
            leading-[0.95] tracking-tight
            text-slate-900 dark:text-slate-100
          "
        >
          {/* Heading line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              style={{ x: line1X }}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Full-Stack Engineer building
            </motion.h1>
          </div>

          {/* Heading line 2 */}
          <div className="mt-2 overflow-hidden md:mt-3">
            <motion.h1
              style={{ x: line2X }}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-4xl text-primary
                sm:text-5xl md:text-6xl lg:text-7xl
              "
            >
              scalable, production-ready
            </motion.h1>
          </div>

          {/* Heading line 3 */}
          <div className="mt-2 overflow-hidden md:mt-3">
            <motion.h1
              style={{ x: line3X }}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              systems.
            </motion.h1>
          </div>
        </div>

        {/* Description */}
        <motion.p
          style={{ opacity: contentOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="
            mx-auto mt-7 max-w-xl
            text-center text-sm leading-relaxed
            text-slate-600 dark:text-slate-400
            md:text-base
          "
        >
          B.Tech CSE student specializing in
          Flutter, React, and Node.js.
        </motion.p>

        {/* Avatar on left; buttons centered independently */}
        <motion.div
          style={{ opacity: contentOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.75,
            ease: "easeOut",
          }}
          className="
            relative mt-7 flex w-full
            items-center justify-center
          "
        >
          {/* Avatar follows cursor; original floating and hover effects preserved */}
          <motion.div
            style={{
              x: avatarX,
              y: avatarY,
              rotate: avatarTilt,
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              y: -4,
              scale: 1.04,
              filter:
                "drop-shadow(0 0 5px rgba(37, 99, 235, 0.25))",
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
            whileTap={{
              scale: 0.97,
              transition: { duration: 0.12 },
            }}
            className="
              absolute left-0
              flex cursor-pointer items-center
              justify-center rounded-full
            "
          >
            <PortfolioAvatar
              size={76}
              defaultAnimation="idle"
              ariaLabel="Animated portfolio avatar"
              className="
                drop-shadow-[0_0_4px_rgba(37,99,235,0.10)]
              "
            />
          </motion.div>

          {/* Centered buttons */}
          <div
            className="
              flex flex-wrap items-center
              justify-center gap-4
              pl-20 sm:pl-0
            "
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="
                inline-flex items-center gap-2
                rounded-full bg-primary
                px-6 py-3 text-sm font-semibold text-white
                shadow-lg shadow-blue-500/20
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-blue-500/30
              "
            >
              View Projects
              <span aria-hidden="true">→</span>
            </a>

            {/* Resume */}
            <a
              href="/portfolio/Anirban_Debnath_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-full border border-slate-300
                px-6 py-3 text-sm font-semibold
                text-slate-800 dark:border-slate-700
                dark:text-slate-100
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary hover:text-primary
              "
            >
              Read Resume
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: contentOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="
            mt-12 flex flex-col items-center gap-2
            text-slate-400 dark:text-slate-500
          "
        >
          <span
            className="
              text-[10px] uppercase tracking-[0.3em]
            "
          >
            Scroll to explore
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex h-8 w-5 justify-center rounded-full
              border border-slate-400 pt-1
              dark:border-slate-600
            "
          >
            <motion.div
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
