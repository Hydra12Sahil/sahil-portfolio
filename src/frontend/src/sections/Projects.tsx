import { projects } from "@/data/portfolio-data";
import { ExternalLink, Github } from "lucide-react";

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

const PROJECT_COLORS = [
  "from-chart-1/30 to-chart-1/5",
  "from-chart-2/30 to-chart-2/5",
  "from-chart-3/30 to-chart-3/5",
];

const PROJECT_BORDER_ACCENT = [
  "border-t-chart-1",
  "border-t-chart-2",
  "border-t-chart-3",
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading label="Featured Work" title="Projects" />

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`bg-card rounded-xl border border-border border-t-2 ${PROJECT_BORDER_ACCENT[i % 3]} flex flex-col overflow-hidden group hover:shadow-accent hover:border-accent/40 transition-smooth hover:-translate-y-1`}
              data-ocid={`projects.item.${i + 1}`}
            >
              {/* Colored gradient banner */}
              <div
                className={`h-24 bg-gradient-to-br ${PROJECT_COLORS[i % 3]} flex items-center justify-center`}
              >
                <div className="w-12 h-12 rounded-xl bg-card/60 border border-border flex items-center justify-center">
                  <span className="font-display font-bold text-xl text-accent">
                    {project.id}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="font-display font-bold text-base text-foreground group-hover:text-accent transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-display font-medium bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  {project.liveUrl && project.liveUrl !== "#projects" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-accent hover:text-accent/80 transition-colors"
                      data-ocid={`projects.live_link.${i + 1}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-muted-foreground">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Dashboard
                    </span>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-muted-foreground hover:text-foreground transition-colors ml-auto"
                    data-ocid={`projects.github_link.${i + 1}`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
