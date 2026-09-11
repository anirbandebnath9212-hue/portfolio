import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Heading movement based on scroll
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

  // Fade supporting content while scrolling
  const contentOpacity = useTransform(
    scrollY,
    [0, 350],
    [1, 0]
  );

  return (
    <section
      className="relative min-h-screen
      overflow-hidden
      bg-white dark:bg-background-dark
      flex items-center"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0
        pointer-events-none
        bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.08),transparent_55%)]
        dark:bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.12),transparent_55%)]"
      />

      <div
        className="relative w-full max-w-[1400px]
        mx-auto px-6
        pt-20 pb-4"
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
          className="text-center
          text-[10px] sm:text-xs
          uppercase
          tracking-[0.35em]
          text-slate-500
          dark:text-slate-400
          mb-7"
        >
          Full-Stack Engineer
        </motion.p>


        {/* ================= HEADING ================= */}

        <div
          className="text-center
          font-black
          tracking-tight
          leading-[0.95]
          text-slate-900
          dark:text-slate-100"
        >

          {/* LINE 1 */}
          <div className="overflow-hidden">
            <motion.h1
              style={{ x: line1X }}
              initial={{
                opacity: 0,
                x: "-100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl"
            >
              Full-Stack Engineer building
            </motion.h1>
          </div>


          {/* LINE 2 */}
          <div
            className="overflow-hidden
            mt-2 md:mt-3"
          >
            <motion.h1
              style={{ x: line2X }}
              initial={{
                opacity: 0,
                x: "100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              text-primary"
            >
              scalable, production-ready
            </motion.h1>
          </div>


          {/* LINE 3 */}
          <div
            className="overflow-hidden
            mt-2 md:mt-3"
          >
            <motion.h1
              style={{ x: line3X }}
              initial={{
                opacity: 0,
                x: "-100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl"
            >
              systems.
            </motion.h1>
          </div>

        </div>


        {/* Description */}
        <motion.p
          style={{ opacity: contentOpacity }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="max-w-xl
          mx-auto
          mt-7
          text-center
          text-sm
          md:text-base
          leading-relaxed
          text-slate-600
          dark:text-slate-400"
        >
          B.Tech CSE student specializing in Flutter,
          React, and Node.js.
        </motion.p>


        {/* Buttons */}
        <motion.div
          style={{ opacity: contentOpacity }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.75,
            ease: "easeOut",
          }}
          className="flex
          justify-center
          gap-3
          mt-6"
        >

          {/* View Projects */}
          <a
            href="#projects"
            className="px-6
            py-3
            rounded-lg
            bg-primary
            text-white
            text-sm
            font-semibold
            hover:opacity-90
            hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]
            transition-all
            duration-300"
          >
            View Projects →
          </a>


          {/* Resume */}
          <a
            href="/portfolio/Anirban_Debnath_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6
            py-3
            rounded-lg
            border
            border-border-muted
            text-slate-800
            dark:text-slate-100
            text-sm
            font-semibold
            hover:bg-slate-100
            dark:hover:bg-surface
            transition-all
            duration-300"
          >
            Read Resume →
          </a>

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
          className="mt-8
          flex flex-col
          items-center
          gap-2
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-slate-500"
        >
          <span>Scroll to explore</span>

          <span
            className="w-px
            h-7
            bg-gradient-to-b
            from-slate-500
            to-transparent"
          />
        </motion.div>

      </div>
    </section>
  );
}