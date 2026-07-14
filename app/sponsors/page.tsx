import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sponsors = [
  {
    slug: "northstar-labs",
    name: "Northstar Labs",
    type: "Platinum Sponsor",
    focus:
      "Responsible AI infrastructure for regulated industries and enterprise AI solutions.",
  },
  {
    slug: "aether-health",
    name: "Aether Health",
    type: "Gold Sponsor",
    focus:
      "Connected healthcare technologies that improve patient care and clinical outcomes.",
  },
  {
    slug: "nova-cloud",
    name: "Nova Cloud",
    type: "Community Partner",
    focus:
      "Supporting cloud-native education, research, and open-source innovation worldwide.",
  },
];

const benefits = [
  "Global brand exposure",
  "Networking opportunities",
  "Research collaboration",
  "Product showcase",
];

export default function SponsorsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Conference sponsors</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Meet the organizations supporting innovation, collaboration, and the
            future of technology.
          </p>
        </div>

        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to home
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}

        <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Supporting innovation together
          </h2>

          <p className="mt-4 text-sm leading-8 text-muted-foreground">
            Our sponsors play an important role in bringing together
            researchers, engineers, startups, and industry leaders. Their
            support helps create opportunities for knowledge sharing,
            collaboration, and meaningful innovation.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {benefits.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-muted px-3 py-1 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Sponsor categories</h2>

          <div className="mt-5 space-y-4">
            {sponsors.map((sponsor) => (
              <Link
                key={sponsor.slug}
                href={`/sponsors/${sponsor.slug}`}
                className="block rounded-2xl border border-border bg-muted/40 p-4 transition-colors hover:bg-muted"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{sponsor.name}</h3>

                  <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs">
                    {sponsor.type}
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  {sponsor.focus}
                </p>

                <span className="mt-4 inline-flex text-sm font-medium text-primary">
                  View partnership details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}

      <div className="mt-8 rounded-3xl border border-border bg-background p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Become a conference sponsor
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Join our network of organizations supporting technology,
              education, and global collaboration.
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
