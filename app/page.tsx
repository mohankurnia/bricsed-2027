import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const highlights = [
  {
    title: "Global speakers",
    detail: "Researchers and founders from 15+ countries",
  },
  {
    title: "Paper competition",
    detail: "Best paper award with international reviewers",
  },
  {
    title: "Hybrid format",
    detail: "Online streaming and in-person networking",
  },
];

const tracks = [
  "Artificial Intelligence",
  "Sustainable Technology",
  "Digital Health",
  "Human-Centered Design",
];

const agenda = [
  { time: "08:30", label: "Registration & networking" },
  { time: "10:00", label: "Opening keynote" },
  { time: "13:00", label: "Paper review session" },
  { time: "16:00", label: "Award announcement" },
];

export default function Home() {
  return (
    <main className="flex-1 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%)]">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:px-8 lg:py-24">
        <div className="rounded-3xl border border-border/70 bg-background/80 p-8 shadow-sm backdrop-blur sm:p-10 lg:p-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-5">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                International Conference 2026
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Build the future of technology with global researchers.
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                Join the International Conference & Paper Competition to share
                innovative ideas, showcase your research, and connect with
                experts across the world.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/submit"
                  className={cn(buttonVariants({ size: "lg" }), "inline-flex")}
                >
                  Submit your paper
                </Link>
                <Link
                  href="/papers"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "inline-flex",
                  )}
                >
                  View submissions
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground lg:min-w-70">
              <p className="font-semibold text-foreground">Important dates</p>
              <ul className="mt-3 space-y-2">
                <li>• Registration open: 1 August 2026</li>
                <li>• Paper deadline: 20 September 2026</li>
                <li>• Conference day: 15 October 2026</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-5 shadow-sm"
            >
              <h2 className="font-semibold text-foreground">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Conference themes</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {tracks.map((track) => (
                <span
                  key={track}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-sm"
                >
                  {track}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              The event welcomes academic and industrial contributions in AI,
              sustainability, health innovation, and human-centered computing.
              Selected papers will be reviewed by an international panel.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Agenda preview</h2>
            <ul className="mt-4 space-y-3">
              {agenda.map((item) => (
                <li
                  key={item.time}
                  className="flex items-center justify-between rounded-xl border border-border px-3 py-2 text-sm"
                >
                  <span className="font-medium text-foreground">
                    {item.label}
                  </span>
                  <span className="text-muted-foreground">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
