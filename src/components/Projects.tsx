const projects = [
  /*
  {
    id: "03",
    title: "Distributed Task Queue",
    description:
      "A high-throughput background job processing system designed to handle concurrent workloads reliably with guaranteed task delivery.",
    problem:
      "Scaling asynchronous background tasks without blocking the main application or losing jobs during failures.",
    tech: ["TypeScript", "Go", "Redis", "PostgreSQL"],
    links: {
      github: "#",
      live: "#",
    },
  },
  */

  {
    id: "01",
    title: "E2E Encrypted Messaging Platform",
    description:
      "A real-time messaging application with end-to-end encryption, focusing on privacy, low latency, and cross-device synchronization.",
    problem:
      "Ensuring message confidentiality while maintaining real-time performance across distributed clients.",
    tech: ["Flutter", "Rust", "WebSockets", "Signal Protocol"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: "02",
    title: "Scalable E-Commerce Backend",
    description:
      "A modular backend system supporting product catalogs, carts, and orders with a focus on performance and clean architecture.",
    problem:
      "Designing a backend that remains maintainable and performant as traffic and feature complexity grow.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
    links: {
      github: "#",
      live: "#",
    },
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-white dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section title */}
        <p className="text-xs uppercase tracking-[0.3em] mb-10
          text-slate-500 dark:text-slate-500">
          03 // Selected Projects
        </p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-border-muted rounded-lg p-8
                bg-white dark:bg-surface
                hover:border-primary transition flex flex-col"
            >
              {/* Project ID */}
              <span className="text-xs mb-4
                text-slate-500 dark:text-slate-400">
                PROJECT_{project.id}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4
                text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-6
                text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              {/* Problem */}
              <div className="border-t border-border-muted pt-4 mb-6">
                <p className="text-xs uppercase mb-2
                  text-slate-500 dark:text-slate-500">
                  The Problem
                </p>
                <p className="text-sm italic
                  text-slate-600 dark:text-slate-400">
                  “{project.problem}”
                </p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-1 rounded
                      bg-slate-100 dark:bg-background-dark
                      text-slate-600 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex gap-6 text-sm font-semibold">
                <a
                  href={project.links.github}
                  className="text-slate-800 dark:text-slate-100
                    hover:text-primary transition"
                >
                  View Code →
                </a>
                <a
                  href={project.links.live}
                  className="text-slate-800 dark:text-slate-100
                    hover:text-primary transition"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
