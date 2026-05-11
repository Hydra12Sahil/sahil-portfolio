import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

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

export function Contact() {
  const { actor } = useActor(createActor);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mutation = useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (actor && "submitContact" in actor) {
        await (
          actor as unknown as {
            submitContact: (n: string, e: string, m: string) => Promise<void>;
          }
        ).submitContact(data.name, data.email, data.message);
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, email, message });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <SectionHeading label="Let's Connect" title="Contact Me" />

        {/* Social links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:sahil@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border text-sm font-body text-muted-foreground hover:text-foreground hover:border-accent/50 transition-smooth"
            data-ocid="contact.email_link"
          >
            <Mail className="w-4 h-4 text-accent" />
            Email Me
          </a>
          <a
            href="https://github.com/sahil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border text-sm font-body text-muted-foreground hover:text-foreground hover:border-accent/50 transition-smooth"
            data-ocid="contact.github_link"
          >
            <Github className="w-4 h-4 text-accent" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sahil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border text-sm font-body text-muted-foreground hover:text-foreground hover:border-accent/50 transition-smooth"
            data-ocid="contact.linkedin_link"
          >
            <Linkedin className="w-4 h-4 text-accent" />
            LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-body text-muted-foreground">
            or send a message
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Form / Success */}
        <div className="mt-2">
          {mutation.isSuccess ? (
            <div
              className="bg-accent/10 border border-accent/30 rounded-xl p-8 text-center"
              data-ocid="contact.success_state"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Send className="w-5 h-5 text-accent" />
              </div>
              <p className="font-display font-bold text-xl text-accent mb-2">
                Message Sent!
              </p>
              <p className="text-muted-foreground font-body text-sm">
                Thanks for reaching out. I&apos;ll get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => mutation.reset()}
                className="mt-5 text-xs text-muted-foreground hover:text-foreground transition-colors font-body"
                data-ocid="contact.send_another_button"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              data-ocid="contact.form"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide"
                    htmlFor="contact-name"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-card border border-input rounded-lg px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-smooth"
                    data-ocid="contact.name_input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide"
                    htmlFor="contact-email"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="bg-card border border-input rounded-lg px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-smooth"
                    data-ocid="contact.email_input"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide"
                  htmlFor="contact-message"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or opportunity..."
                  className="bg-card border border-input rounded-lg px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-smooth resize-none"
                  data-ocid="contact.message_textarea"
                />
              </div>
              {mutation.isError && (
                <p
                  className="text-destructive text-xs font-body"
                  data-ocid="contact.error_state"
                >
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-accent hover:bg-accent/90 transition-smooth disabled:opacity-60"
                data-ocid="contact.submit_button"
              >
                {mutation.isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
