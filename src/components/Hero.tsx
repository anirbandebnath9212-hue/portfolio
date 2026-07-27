import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-white dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto px-6">

        <Reveal>
          <h1
            className="text-5xl md:text-7xl font-black mb-6
            text-slate-900 dark:text-slate-100"
          >
            Full-Stack Engineer building{" "}
            <span className="text-primary">scalable</span>, production-ready
            systems.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="max-w-xl text-lg mb-10
            text-slate-600 dark:text-slate-400"
          >
            B.Tech CSE student specializing in Flutter, React, and Node.js.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex gap-4">

            {/* View Projects */}
            <button
              className="px-8 py-4 rounded-lg font-semibold
              bg-primary text-white hover:opacity-90 transition"
            >
              View Projects
            </button>

            {/* Read Resume */}
            <a
              href="/portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border
              text-slate-800 dark:text-slate-100
              hover:bg-slate-100 dark:hover:bg-surface
              transition"
            >
              Read Resume
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}