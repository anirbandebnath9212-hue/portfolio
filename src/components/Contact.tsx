import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 30%"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5],
    [40, 0]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, 1]
  );

  const labelX = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["30%", "0%"]
  );

  const labelOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="
        py-24
        bg-white
        dark:bg-background-dark
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
            mb-10
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
            04 // Contact
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="max-w-3xl"
        >
          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-slate-100
            "
          >
            Let’s build something
            <span className="text-primary"> meaningful.</span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            I’m always interested in discussing new projects,
            ideas, and opportunities where I can build useful
            and scalable products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="mailto:your-email@example.com"
              className="
                px-6
                py-3
                rounded-lg
                bg-primary
                text-white
                text-sm
                font-semibold
                hover:opacity-90
                hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]
                transition-all
                duration-300
              "
            >
              Get in Touch →
            </a>

            <a
              href="https://github.com/anirbandebnath9212-hue"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6
                py-3
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

          </div>
        </motion.div>

      </div>
    </section>
  );
}