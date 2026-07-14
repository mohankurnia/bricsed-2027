import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const speakers = [
  {
    slug: "dr-amina-rahman",
    name: "Dr. Amina Rahman",
    role: "AI Research Lead",
    topic: "Designing Responsible AI Systems",
    session: "Keynote • Building trustworthy AI for public impact",
  },
  {
    slug: "prof-daniel-kim",
    name: "Prof. Daniel Kim",
    role: "Sustainability Scientist",
    topic: "Climate Tech and Human-Centered Innovation",
    session: "Panel • Turning climate research into scalable solutions",
  },
  {
    slug: "sarah-chen",
    name: "Sarah Chen",
    role: "Product Strategist",
    topic: "From Research to Global Product Launch",
    session: "Workshop • Bridging academia and industry",
  },
];

const highlights = [
  "International experts",
  "Industry leaders",
  "Interactive workshops",
  "Research keynote sessions",
];

export default function SpeakersPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      {/* Hero */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Featured speakers</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Meet internationally recognized researchers, innovators, and
            industry leaders sharing their insights throughout the conference.
          </p>
        </div>

        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to home
        </Link>
      </div>

      {/* Top Section */}

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Learn from world-class experts
          </h2>

          <p className="mt-4 text-sm leading-8 text-muted-foreground">
            Our speakers include leading researchers, technology executives,
            startup founders, and policymakers who are shaping the future of
            artificial intelligence, sustainability, healthcare, and digital
            innovation.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-muted px-3 py-1 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Conference overview</h2>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-border bg-muted/40 p-4">
              <p className="font-semibold">3 Keynote Sessions</p>

              <p className="mt-1 text-sm text-muted-foreground">
                Inspiring talks from internationally recognized experts.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-muted/40 p-4">
              <p className="font-semibold">8 Technical Workshops</p>

              <p className="mt-1 text-sm text-muted-foreground">
                Hands-on sessions focused on practical applications.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-muted/40 p-4">
              <p className="font-semibold">Panel Discussions</p>

              <p className="mt-1 text-sm text-muted-foreground">
                Conversations connecting academia, industry, and government.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker List */}

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Speaker lineup</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {speakers.map((speaker) => (
            <article
              key={speaker.slug}
              className="rounded-3xl border border-border bg-background p-6 shadow-sm transition-colors hover:bg-muted/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                  {speaker.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div>
                  <h3 className="font-semibold">{speaker.name}</h3>

                  <p className="text-sm text-primary">{speaker.role}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-4">
                <p className="font-medium">{speaker.topic}</p>

                <p className="mt-2 text-sm text-muted-foreground">
                  {speaker.session}
                </p>
              </div>

              <Link
                href={`/speakers/${speaker.slug}`}
                className="mt-5 inline-flex text-sm font-medium text-primary"
              >
                View profile →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}

      <div className="mt-8 rounded-3xl border border-border bg-background p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Interested in speaking?</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              We're always looking for researchers, practitioners, and
              innovators with valuable insights to share.
            </p>
          </div>

          <Link href="/contact" className={cn(buttonVariants(), "inline-flex")}>
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
