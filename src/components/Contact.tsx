export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-white dark:bg-background-dark"
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section label */}
        <p
          className="text-xs uppercase tracking-[0.3em] mb-10
          text-slate-500 dark:text-slate-500"
        >
          04 // Contact
        </p>

        <div className="max-w-2xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6
            text-slate-900 dark:text-slate-100"
          >
            Let’s build something meaningful
          </h2>

          <p
            className="text-lg mb-10 leading-relaxed
            text-slate-600 dark:text-slate-400"
          >
            I’m open to internships, full-time roles, and meaningful
            collaborations. If you’re building something interesting
            or want to discuss engineering problems, feel free to reach out.
          </p>

          <div className="flex flex-wrap gap-6 text-sm font-semibold">
            <a
              href="mailto:anirbandebnath9212@gmail.com"
              className="text-slate-800 dark:text-slate-100
              hover:text-primary transition"
            >
              Email →
            </a>

            <a
              href="https://github.com/anirbandebnath9212-hue"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 dark:text-slate-100
              hover:text-primary transition"
            >
              GitHub →
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 dark:text-slate-100
              hover:text-primary transition"
            >
              LinkedIn →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
