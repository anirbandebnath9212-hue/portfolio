import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

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
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 25%"],
  });

  // Section label: RIGHT → CENTER
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

  // Cards: LEFT → CENTER
  const cardsX = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["-15%", "0%"]
  );

  const cardsOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="
        py-20
        bg-white dark:bg-background-dark
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
            02 // Core Stack
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          style={{
            x: cardsX,
            opacity: cardsOpacity,
          }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-4
          "
        >
          {skills.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="
                group
                border
                border-border-muted
                rounded-xl
                p-5
                bg-white
                dark:bg-surface
                hover:border-primary
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <Icon
                className="
                  w-5
                  h-5
                  mb-4
                  text-slate-400
                  group-hover:text-primary
                  transition-colors
                  duration-300
                "
              />

              <h3
                className="
                  text-sm
                  font-semibold
                  mb-4
                  text-slate-900
                  dark:text-slate-100
                "
              >
                {title}
              </h3>

              <ul
                className="
                  space-y-2.5
                  text-sm
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {items.map((item) => (
                  <li
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <span
                      className="
                        mt-1.5
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-blue-500
                      "
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}