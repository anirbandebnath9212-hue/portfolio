export default function Footer() {
  return (
    <footer
      className="border-t border-border-muted
      bg-white dark:bg-background-dark"
    >
      <div
        className="max-w-[1200px] mx-auto px-6 py-12
        flex flex-col md:flex-row justify-between gap-6"
      >
        <div>
          <p
            className="text-sm font-semibold
            text-slate-900 dark:text-slate-100"
          >
            Anirban Debnath
          </p>
          <p
            className="text-xs mt-1
            text-slate-500 dark:text-slate-500"
          >
            Full-Stack Engineer · Product Builder
          </p>
        </div>

        <div
          className="flex gap-8 text-xs uppercase tracking-widest
          text-slate-500 dark:text-slate-500"
        >
          <a
            href="https://github.com/anirbandebnath9212-hue"
            className="hover:text-primary transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            className="hover:text-primary transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:anirbandebnath9212@gmail.com"
            className="hover:text-primary transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
