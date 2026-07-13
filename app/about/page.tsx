import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const milestones = [
  {
    title: "Call for papers",
    detail: "Submission opens for researchers and practitioners.",
  },
  {
    title: "Review period",
    detail: "A rigorous peer review process by international experts.",
  },
  {
    title: "Conference day",
    detail: "Keynotes, workshops, networking, and award announcements.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">About the conference</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            A global gathering for ideas, innovation, and collaboration.
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
        <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Why attend</h2>
          <p className="mt-4 text-sm leading-8 text-muted-foreground">
            This conference brings together scholars, founders, policymakers,
            and technical teams to explore practical solutions for the most
            important challenges in technology today.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Research exchange",
              "Industry networking",
              "Global visibility",
            ].map((item) => (
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
          <h2 className="text-2xl font-semibold">Event timeline</h2>
          <div className="mt-5 space-y-4">
            {milestones.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-muted/40 p-4"
              >
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
