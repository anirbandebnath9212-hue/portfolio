import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-white dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto px-6">

        <Reveal>
          <h1 className="text-5xl md:text-7xl font-black mb-6
            text-slate-900 dark:text-slate-100">
            Full-Stack Engineer building{" "}
            <span className="text-primary">scalable</span>, production-ready systems.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-xl text-lg mb-10
            text-slate-600 dark:text-slate-400">
            B.Tech CSE student specializing in Flutter, React, and Node.js.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-lg font-semibold
              bg-primary text-white">
              View Projects
            </button>
            <button className="px-8 py-4 rounded-lg border
              text-slate-800 dark:text-slate-100">
              Read Resume
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
