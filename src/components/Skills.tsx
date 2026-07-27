import {
  Layers,
  Server,
  Database,
  Cloud,
  Compass,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Layers,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Flutter"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs", "Go", "FastAPI"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["Docker", "CI/CD", "AWS", "Vercel", "Nginx"],
  },
  {
    title: "Tools",
    icon: Compass,
    items: ["Git & GitHub", "Postman", "Jest", "VS Code", "Linux"],
  },
];


export default function Skills() {
  return (
    <section
  id="skills"
  className="scroll-mt-20 py-32 bg-white dark:bg-background-dark"
>

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section title */}
        <p
          className="text-xs uppercase tracking-[0.3em] mb-10
          text-slate-500 dark:text-slate-500"
        >
          02 // Core Stack
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">


       {skills.map(({ title, icon: Icon, items }) => (
            <div
                key={title}
                className="p-6 rounded-lg border border-border-muted
                bg-white dark:bg-surface"
            >

              {/* Category title */}
              {/* Icon */}
            <Icon className="w-5 h-5 mb-4 text-slate-400" />

            {/* Category title */}
            <h3
            className="text-sm font-bold mb-4
            text-slate-900 dark:text-slate-100"
            >
            {title}
            </h3>


              {/* Skills list */}
              <ul
                className="space-y-2 text-sm
                text-slate-600 dark:text-slate-400"
              >
               {items.map((item) => (
                <li
                    key={item}
                    className="flex items-start gap-3"
                >
                    {/* Blue dot */}
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" />

                    {/* Text */}
                    <span>{item}</span>
                </li>
                ))}

              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
