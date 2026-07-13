import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sponsors = [
  { name: "Northstar Labs", type: "Platinum Sponsor" },
  { name: "Aether Health", type: "Gold Sponsor" },
  { name: "Nova Cloud", type: "Community Partner" },
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
          </article>
        ))}
      </div>
    </main>
  );
}
