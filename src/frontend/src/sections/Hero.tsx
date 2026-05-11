import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/generated/hero-bg.dim_1600x900.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay + grid pattern */}
      <div className="absolute inset-0 bg-background/80" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.68 0.22 155) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-6 py-24">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-body"
          data-ocid="hero.status_badge"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Available for new opportunities
        </div>

        {/* Greeting + Title */}
        <div className="flex flex-col gap-3 animate-slide-up">
          <p className="text-muted-foreground font-body text-lg md:text-xl">
            Hi, I&apos;m{" "}
            <strong className="text-accent font-display font-bold">
              Sahil
            </strong>
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
            Data Analyst
            <span className="text-accent"> &amp; Developer</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-medium">
              Power BI &nbsp;|&nbsp; SQL &nbsp;|&nbsp; Python
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground font-body leading-relaxed animate-fade-in">
          BCA graduate with a DCA &amp; ADCA diploma and{" "}
          <span className="text-foreground font-medium">
            1 year of industry experience
          </span>{" "}
          at MD Associate. Turning raw data into business insight with Power BI,
          SQL, Python and Excel.
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap justify-center gap-2 animate-fade-in">
          {["Power BI", "SQL", "Python", "Excel", "GitHub"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-display font-semibold bg-muted/60 text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="px-7 py-3 rounded-lg bg-accent text-accent-foreground font-display font-semibold text-base shadow-accent hover:bg-accent/90 transition-smooth"
            data-ocid="hero.view_portfolio_button"
          >
            View My Projects
          </button>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="px-7 py-3 rounded-lg bg-muted/60 text-foreground font-display font-semibold text-base border border-border hover:bg-muted/80 transition-smooth"
            data-ocid="hero.contact_button"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={() => scrollTo("about")}
          className="mt-8 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors animate-fade-in"
          aria-label="Scroll down"
          data-ocid="hero.scroll_indicator"
        >
          <span className="text-xs font-body tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
