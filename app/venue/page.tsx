import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const travelTips = [
  "Airport shuttle runs every 20 minutes from Terminal 2",
  "Hotel shuttles are available for registered attendees",
  "Wi-Fi is available throughout the venue and exhibition hall",
];

export default function VenuePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Venue & Travel</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Everything you need to know about the conference location and nearby
            travel information.
          </p>
        </div>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to home
        </Link>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Conference venue</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            The event will be held at the Grand Meridian Hall, a modern venue
            with exhibition space, breakout rooms, and high-speed connectivity.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Travel notes</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            The venue is accessible by airport shuttle, public transit, and
            rideshare services. Recommended arrival time is 30 minutes before
            registration opens.
          </p>
        </article>
      </div>

      <div className="mt-4 rounded-3xl border border-border bg-background p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Practical tips</h2>
        <ul className="mt-4 space-y-3">
          {travelTips.map((tip) => (
            <li
              key={tip}
              className="rounded-2xl border border-border bg-muted/40 px-3 py-3 text-sm text-muted-foreground"
            >
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
