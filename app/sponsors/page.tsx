import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sponsors = [
  {
    slug: "northstar-labs",
    name: "Northstar Labs",
    type: "Platinum Sponsor",
    focus: "Responsible AI infrastructure for regulated industries.",
  },
  {
    slug: "aether-health",
    name: "Aether Health",
    type: "Gold Sponsor",
    focus: "Connected care systems that improve clinical outcomes.",
  },
  {
    slug: "nova-cloud",
    name: "Nova Cloud",
    type: "Community Partner",
    focus: "Cloud-native developer education and open research support.",
  },
];

export default function SponsorsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Conference sponsors</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Thank you to the partners supporting the event.
          </p>
        </div>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to home
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {sponsors.map((sponsor) => (
          <article
            key={sponsor.name}
            className="rounded-2xl border border-border bg-background p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{sponsor.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{sponsor.type}</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {sponsor.focus}
            </p>
            <Link
              href={`/sponsors/${sponsor.slug}`}
              className="mt-4 inline-flex text-sm font-medium text-primary"
            >
              View partnership details
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
