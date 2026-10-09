
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { createAvatar } from "@bible-strong/avatar-react";
import "@bible-strong/avatar-react/styles.css";
import avatarJson from "../assets/avatar.avatar.json";

const PortfolioAvatar = createAvatar(avatarJson);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  // Cursor movement for avatar only
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

  const mainTextX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["100%", "0%", "0%", "-100%"]
  );

  const secondTextX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["-100%", "0%", "0%", "100%"]
  );

  const mainOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0, 1, 1, 0]
  );

  const secondOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="scroll-mt-20 overflow-hidden bg-white py-20 dark:bg-background-dark"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 flex items-center gap-3"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="h-px bg-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]"
          />

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
            01 // About
          </p>
        </motion.div>

        {/* Avatar and main paragraph */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_auto] md:gap-10">
          {/* Avatar: above text on mobile, right side on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-first flex justify-center md:order-last md:justify-end"
          >
            <motion.div
              style={{
                x: avatarX,
                y: avatarY,
                rotate: avatarTilt,
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.05,
                filter:
                  "drop-shadow(0 0 12px rgba(37, 99, 235, 0.3))",
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              whileTap={{ scale: 0.97 }}
              className="relative flex cursor-pointer items-center justify-center rounded-full"
            >
              <PortfolioAvatar
                size={100}
                defaultAnimation="thinking"
                ariaLabel="Anirban's animated thinking avatar"
                className="drop-shadow-[0_0_8px_rgba(37,99,235,0.12)]"
              />
            </motion.div>
          </motion.div>

          {/* Main text: original scroll animation preserved */}
          <div className="order-last min-w-0 overflow-hidden md:order-first">
            <motion.p
              style={{
                x: mainTextX,
                opacity: mainOpacity,
              }}
              className="max-w-3xl text-2xl font-semibold leading-[1.35] tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl"
            >
              I’m Anirban Debnath — a product-focused engineer who enjoys
              turning ambiguous problems into scalable, production-ready
              systems.
            </motion.p>
          </div>
        </div>

        {/* Second paragraph: original scroll animation preserved */}
        <div className="mt-6 overflow-hidden">
          <motion.p
            style={{
              x: secondTextX,
              opacity: secondOpacity,
            }}
            className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl"
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
