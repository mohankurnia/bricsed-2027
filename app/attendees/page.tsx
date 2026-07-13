import Link from "next/link";
import { prisma } from "@/lib/db";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function AttendeesPage() {
  let attendees: Awaited<ReturnType<typeof prisma.attendee.findMany>> = [];

  try {
    attendees = await prisma.attendee.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch {
    attendees = [];
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Registered attendees</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            See who has joined the conference.
          </p>
        </div>
        <Link
          href="/register"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Register new attendee
        </Link>
      </div>

      <div className="mt-8 grid gap-4">
        {attendees.map((attendee) => (
          <article
            key={attendee.id}
            className="rounded-2xl border border-border bg-background p-5 shadow-sm"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{attendee.fullName}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {attendee.affiliation}
                </p>
              </div>
              <span className="rounded-full border border-border bg-muted px-3 py-1 text-sm">
                {attendee.ticketType}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>Email: {attendee.email}</span>
              <span>Registered: {attendee.createdAt.toLocaleDateString()}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
