import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-32 bg-white dark:bg-background-dark">
  <div className="max-w-[1200px] mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.35em] mb-10 text-slate-500">
      01 // About
    </p>

    <Reveal>
      <p
        className="max-w-3xl
        text-2xl md:text-3xl
        leading-[1.35]
        font-semibold
        tracking-tight
        text-slate-900 dark:text-slate-100"
      >
        I’m Anirban Debnath — a product-focused engineer who enjoys turning
        ambiguous problems into scalable, production-ready systems.
      </p>
    </Reveal>

    <Reveal delay={0.1}>
      <p
        className="max-w-3xl mt-6
        text-lg md:text-xl
        leading-relaxed
        text-slate-600 dark:text-slate-400"
      >
        My engineering philosophy centers around clarity, performance, and
        long-term maintainability. I believe great software should scale
        gracefully without becoming harder to reason about.
      </p>
    </Reveal>

  </div>
</section>

    
  );
}
