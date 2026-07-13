import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const speakers = [
  {
    name: "Dr. Amina Rahman",
    role: "AI Research Lead",
    topic: "Designing Responsible AI Systems",
    session: "Keynote • Building trustworthy AI for public impact",
  },
  {
    name: "Prof. Daniel Kim",
    role: "Sustainability Scientist",
    topic: "Climate Tech and Human-Centered Innovation",
    session: "Panel • Turning climate research into scalable solutions",
  },
  {
    name: "Sarah Chen",
    role: "Product Strategist",
    topic: "From Research to Global Product Launch",
    session: "Workshop • Bridging academia and industry",
  },
];

export default function SpeakersPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Featured speakers</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Meet the leaders who will inspire conference sessions and shape the
            discussion around innovation.
          </p>
        </div>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to home
        </Link>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
        The speaker lineup includes academic experts, startup founders, and
        industry leaders from across the globe.
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {speakers.map((speaker) => (
          <article
            key={speaker.name}
            className="rounded-2xl border border-border bg-background p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
              {speaker.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </div>
            <h2 className="mt-4 text-xl font-semibold">{speaker.name}</h2>
            <p className="mt-2 text-sm font-medium text-primary">
              {speaker.role}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {speaker.topic}
            </p>
            <p className="mt-3 rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm text-foreground">
              {speaker.session}
            </p>
            <Link
              href={`/speakers/${speaker.slug}`}
              className="mt-4 inline-flex text-sm font-medium text-primary"
            >
              View profile
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
