import { certifications, education, experience } from "@/data/portfolio-data";
import { Award, Briefcase, GraduationCap } from "lucide-react";

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

function StatCard({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-card rounded-xl p-5 border border-border shadow-elevated flex flex-col gap-1">
      <span className="text-xs text-muted-foreground font-body">{title}</span>
      <span className="text-2xl font-display font-bold text-accent">
        {value}
      </span>
      <span className="text-xs text-muted-foreground font-body">{sub}</span>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading label="Who I Am" title="About Me" />

        {/* Bio + Stats grid */}
        <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-5">
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              I&apos;m a BCA graduate with a DCA &amp; ADCA diploma,
              specialising in data analytics. I hold 1 year of professional
              experience as a{" "}
              <strong className="text-foreground">Data Analyst</strong> and
              Recording Line Executive at{" "}
              <strong className="text-foreground">MD Associate</strong>, where I
              built Power BI dashboards, optimised SQL queries, and automated
              reporting workflows.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              My toolkit spans Power BI (DAX, M Query), SQL, Python (Pandas,
              Matplotlib), Excel, and GitHub. I also hold certifications in
              ChatGPT &amp; Generative AI and Data Analysis with Python.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Power BI", "SQL", "Python", "Excel", "DAX", "GitHub"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-display font-semibold bg-accent/15 text-accent border border-accent/30"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard title="Experience" value="1 Year" sub="MD Associate" />
            <StatCard title="Degree" value="BCA" sub="+ DCA / ADCA" />
            <StatCard
              title="Certifications"
              value="2"
              sub="AI + Data Analysis"
            />
            <StatCard title="Projects" value="3+" sub="Live Dashboards" />
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h3 className="font-display font-semibold text-lg text-foreground mb-5 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" />
              Education
            </h3>
            <ul className="flex flex-col gap-4">
              {education.map((edu) => (
                <li
                  key={edu.degree}
                  className="bg-card rounded-xl border border-border p-4 shadow-elevated"
                >
                  <p className="font-body text-sm text-foreground font-medium leading-snug">
                    {edu.degree}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    {edu.institution} · {edu.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="md:col-span-1">
            <h3 className="font-display font-semibold text-lg text-foreground mb-5 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent" />
              Experience
            </h3>
            {experience.map((exp) => (
              <div
                key={exp.role}
                className="bg-card rounded-xl border border-accent/30 p-5 shadow-elevated relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-xl" />
                <p className="font-display font-bold text-sm text-foreground leading-snug">
                  {exp.role}
                </p>
                <p className="font-body text-xs text-accent font-semibold mt-0.5">
                  {exp.company}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">
                  {exp.duration}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-3 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="md:col-span-1">
            <h3 className="font-display font-semibold text-lg text-foreground mb-5 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Certifications
            </h3>
            <ul className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="bg-card rounded-xl border border-border p-4 shadow-elevated"
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                    <div>
                      <p className="font-body text-sm text-foreground font-medium leading-snug">
                        {cert.title}
                      </p>
                      <p className="font-body text-xs text-muted-foreground mt-1">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
