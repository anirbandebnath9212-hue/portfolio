import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  // Main paragraph
  // RIGHT → CENTER → LEFT
  const mainTextX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["100%", "0%", "0%", "-100%"]
  );

  // Second paragraph
  // LEFT → CENTER → RIGHT
  const secondTextX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["-100%", "0%", "0%", "100%"]
  );

  // Main paragraph opacity
  const mainOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0, 1, 1, 0]
  );

  // Second paragraph opacity
  const secondOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        scroll-mt-20
        py-20
        bg-white dark:bg-background-dark
        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-6
        "
      >

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: false,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            items-center
            gap-3
            mb-8
          "
        >
          {/* Blue Accent Line */}
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{
              once: false,
              amount: 0.5,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              h-px
              bg-primary
              shadow-[0_0_10px_rgba(37,99,235,0.5)]
            "
          />

          {/* Label */}
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              font-medium
              text-primary
            "
          >
            01 // About
          </p>
        </motion.div>

        {/* Main Paragraph */}
        <div className="overflow-hidden">
          <motion.p
            style={{
              x: mainTextX,
              opacity: mainOpacity,
            }}
            className="
              max-w-3xl
              text-2xl
              md:text-3xl
              leading-[1.35]
              font-semibold
              tracking-tight
              text-slate-900
              dark:text-slate-100
            "
          >
            I’m Anirban Debnath — a product-focused engineer who enjoys
            turning ambiguous problems into scalable, production-ready
            systems.
          </motion.p>
        </div>

        {/* Second Paragraph */}
        <div className="overflow-hidden">
          <motion.p
            style={{
              x: secondTextX,
              opacity: secondOpacity,
            }}
            className="
              max-w-3xl
              mt-6
              text-lg
              md:text-xl
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            My engineering philosophy centers around clarity, performance,
            and long-term maintainability. I believe great software should
            scale gracefully without becoming harder to reason about.
          </motion.p>
        </div>

      </div>
    </section>
  );
}