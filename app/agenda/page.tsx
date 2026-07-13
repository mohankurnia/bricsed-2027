import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const agendaItems = [
  {
    time: "08:30",
    title: "Registration and Networking",
    detail: "Welcome coffee, badge pickup, and community meetups.",
    track: "Community",
  },
  {
    time: "10:00",
    title: "Opening Keynote",
    detail: "Global perspectives on responsible AI and inclusive innovation.",
    track: "Keynote",
  },
  {
    time: "13:00",
    title: "Paper Review Session",
    detail: "Selected submissions reviewed by international experts.",
    track: "Research",
  },
  {
    time: "16:00",
    title: "Awards and Closing",
    detail: "Announcement of winners and closing remarks.",
    track: "Closing",
  },
];

const highlights = [
  "Live Q&A with keynote speakers",
  "Poster and demo showcase",
  "Networking lunch and reception",
];

export default function AgendaPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Conference agenda</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            A quick look at the key activities planned for the event.
          </p>
        </div>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to home
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Program highlights</h2>
          <ul className="mt-4 space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border bg-muted/40 px-3 py-3 text-sm text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4">
          {agendaItems.map((item) => (
            <article
              key={item.time}
              className="rounded-2xl border border-border bg-background p-5 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {item.time}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold">{item.title}</h2>
                </div>
                <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {item.track}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
