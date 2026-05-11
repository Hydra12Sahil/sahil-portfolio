import { skills } from "@/data/portfolio-data";
import { BarChart2, Code2, Database, Globe } from "lucide-react";

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <span className="text-accent text-xs font-display font-semibold uppercase tracking-widest">
        {label}
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
        {title}
      </h2>
      <div className="w-12 h-1 rounded-full bg-accent mt-1" />
    </div>
  );
}

const CATEGORY_META: Record<
  string,
  { label: string; icon: React.ReactNode; color: string }
> = {
  data: {
    label: "Data & Analytics",
    icon: <BarChart2 className="w-4 h-4" />,
    color: "text-chart-1",
  },
  programming: {
    label: "Programming",
    icon: <Code2 className="w-4 h-4" />,
    color: "text-chart-2",
  },
  tools: {
    label: "DevOps & Tools",
    icon: <Database className="w-4 h-4" />,
    color: "text-chart-3",
  },
  web: {
    label: "Web Technologies",
    icon: <Globe className="w-4 h-4" />,
    color: "text-chart-4",
  },
};

type SkillCategory = "data" | "programming" | "tools" | "web";

const CATEGORY_ORDER: SkillCategory[] = ["data", "programming", "tools", "web"];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading label="Technical Proficiency" title="Skills" />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORY_ORDER.map((cat) => {
            const meta = CATEGORY_META[cat];
            const catSkills = skills.filter((s) => s.category === cat);
            if (catSkills.length === 0) return null;

            return (
              <div
                key={cat}
                className="bg-card rounded-xl border border-border p-5 shadow-elevated flex flex-col gap-4"
                data-ocid={`skills.category.${cat}`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2">
                  <span className={`${meta.color} opacity-80`}>
                    {meta.icon}
                  </span>
                  <span className="font-display font-semibold text-sm text-foreground">
                    {meta.label}
                  </span>
                </div>

                {/* Skill bars */}
                <ul className="flex flex-col gap-3">
                  {catSkills.map((skill, i) => (
                    <li key={skill.name} data-ocid={`skills.item.${i + 1}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-body text-xs text-foreground">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-accent font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-accent skill-bar"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${i * 0.12 + 0.2}s`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Summary row */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "Strong Skills",
              value: "Power BI, SQL, Excel, Python",
              sub: "80–92% proficiency",
            },
            {
              label: "Intermediate Skills",
              value: "DAX, GitHub, Data Analysis",
              sub: "75–88% proficiency",
            },
            {
              label: "Working Knowledge",
              value: "HTML, CSS, JavaScript",
              sub: "50–65% proficiency",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-muted/40 rounded-xl border border-border px-5 py-4 flex flex-col gap-1"
            >
              <span className="text-xs text-accent font-display font-semibold uppercase tracking-wide">
                {item.label}
              </span>
              <span className="font-body text-sm text-foreground font-medium">
                {item.value}
              </span>
              <span className="font-body text-xs text-muted-foreground">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
