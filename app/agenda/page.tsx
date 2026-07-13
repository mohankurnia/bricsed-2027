import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const agendaItems = [
  {
    time: "08:30",
    title: "Registration and Networking",
    detail: "Welcome coffee, badge pickup, and community meetups.",
  },
  {
    time: "10:00",
    title: "Opening Keynote",
    detail: "Global perspectives on responsible AI and inclusive innovation.",
  },
  {
    time: "13:00",
    title: "Paper Review Session",
    detail: "Selected submissions reviewed by international experts.",
  },
  {
    time: "16:00",
    title: "Awards and Closing",
    detail: "Announcement of winners and closing remarks.",
  },
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

      <div className="mt-8 grid gap-4">
        {agendaItems.map((item) => (
          <article
            key={item.time}
            className="rounded-2xl border border-border bg-background p-5 shadow-sm"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">
                  {item.time}
                </p>
                <h2 className="mt-1 text-xl font-semibold">{item.title}</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                {item.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
