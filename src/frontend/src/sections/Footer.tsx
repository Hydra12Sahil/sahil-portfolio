import { BarChart2, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top row */}
        <div className="grid sm:grid-cols-3 gap-8 pb-10 border-b border-border">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-accent" />
              <span className="font-display font-bold text-lg text-foreground">
                Sahil
              </span>
            </div>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Data Analyst &amp; Developer — turning raw data into actionable
              business insights.
            </p>
            <p className="text-xs font-display font-semibold text-accent italic">
              &ldquo;Turning Data into Insights&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-sm text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-body text-muted-foreground hover:text-accent transition-colors w-fit"
                  data-ocid={`footer.nav.${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-sm text-foreground">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:sahil@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-accent transition-colors"
                data-ocid="footer.email_link"
              >
                <Mail className="w-4 h-4" />
                sahil@gmail.com
              </a>
              <a
                href="https://github.com/sahil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-accent transition-colors"
                data-ocid="footer.github_link"
              >
                <Github className="w-4 h-4" />
                github.com/sahil
              </a>
              <a
                href="https://linkedin.com/in/sahil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-accent transition-colors"
                data-ocid="footer.linkedin_link"
              >
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/sahil
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Sahil. Data Analyst &amp; Developer.
          </p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
