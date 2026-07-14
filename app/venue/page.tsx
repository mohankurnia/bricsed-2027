import Link from "next/link";
import { MapPin, Plane, Wifi, Car, Clock, Building2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const travelTips = [
  {
    icon: Plane,
    title: "Airport Shuttle",
    description:
      "Complimentary shuttle service every 20 minutes from Terminal 2.",
  },
  {
    icon: Car,
    title: "Transportation",
    description:
      "Taxi, rideshare, and hotel shuttle services are available all day.",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description:
      "High-speed wireless internet is available throughout the venue.",
  },
  {
    icon: Clock,
    title: "Arrival Time",
    description: "Please arrive at least 30 minutes before registration opens.",
  },
];

const venueHighlights = [
  "5,000+ attendee capacity",
  "12 breakout session rooms",
  "High-speed Wi-Fi coverage",
  "Dedicated networking lounge",
];

export default function VenuePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Venue & Travel</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Find everything you need to reach the conference venue and make your
            visit as smooth as possible.
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
        {/* Venue Information */}
        <section className="rounded-3xl border border-border bg-background p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Building2 className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Grand Meridian Hall</h2>
              <p className="text-sm text-muted-foreground">
                Jakarta Convention District
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-8 text-muted-foreground">
            The conference will take place at Grand Meridian Hall, a modern
            convention center designed for international events. The venue
            features spacious keynote halls, breakout rooms, exhibition areas,
            networking lounges, and reliable high-speed internet for every
            attendee.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {venueHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-muted/40 p-4"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-muted/30 p-4">
            <MapPin className="mt-1 h-5 w-5 text-primary" />

            <div>
              <p className="font-medium">Venue Address</p>

              <p className="mt-1 text-sm text-muted-foreground">
                Grand Meridian Hall
                <br />
                Central Business District
                <br />
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </section>

        {/* Travel Guide */}
        <section className="rounded-3xl border border-border bg-background p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Travel Guide</h2>

          <p className="mt-3 text-sm leading-8 text-muted-foreground">
            Whether you're arriving from another city or traveling
            internationally, we've prepared a few recommendations to help make
            your journey simple and comfortable.
          </p>

          <div className="mt-6 space-y-4">
            {travelTips.map((tip) => {
              const Icon = tip.icon;

              return (
                <div
                  key={tip.title}
                  className="flex gap-4 rounded-2xl border border-border bg-muted/40 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-medium">{tip.title}</h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {tip.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
