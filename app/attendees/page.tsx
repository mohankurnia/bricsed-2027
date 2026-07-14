import Link from "next/link";
import { prisma } from "@/lib/db";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CalendarDays, GraduationCap, Mail, Ticket, Users } from "lucide-react";

export default async function AttendeesPage() {
  let attendees: Awaited<ReturnType<typeof prisma.attendee.findMany>> = [];

  try {
    attendees = await prisma.attendee.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch {
    attendees = [];
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      {/* Hero */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Registered attendees
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
            Meet researchers, students, innovators, and professionals joining
            this year's Global Tech Conference.
          </p>
        </div>

        <Link href="/register" className={cn(buttonVariants(), "rounded-xl")}>
          Register attendee
        </Link>
      </div>

      {/* Stats */}

      <Card className="mt-8 rounded-3xl">
        <CardContent className="flex flex-wrap items-center justify-between gap-6 p-6">
          <div>
            <p className="text-sm text-muted-foreground">Total registered</p>

            <h2 className="mt-1 text-4xl font-bold">{attendees.length}</h2>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-5 w-5" />
            <span className="text-sm">
              Participants from universities and industry worldwide
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Directory */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {attendees.map((attendee) => (
          <Card
            key={attendee.id}
            className="group rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardContent className="space-y-5 p-6">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                  {attendee.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <Badge variant="outline">{attendee.ticketType}</Badge>
              </div>

              <div>
                <h2 className="text-lg font-semibold">{attendee.fullName}</h2>

                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-4 w-4 shrink-0" />
                    {attendee.affiliation}
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0" />
                    {attendee.email}
                  </div>

                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    Registered {attendee.createdAt.toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Ticket className="h-4 w-4 text-primary" />
                  Conference Pass
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  {attendee.ticketType} admission with access to conference
                  sessions and networking events.
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {attendees.length === 0 && (
        <Card className="mt-10 rounded-3xl">
          <CardContent className="flex flex-col items-center justify-center py-20 text-center">
            <Users className="mb-4 h-12 w-12 text-muted-foreground" />

            <h2 className="text-xl font-semibold">No attendees yet</h2>

            <p className="mt-2 max-w-md text-sm leading-7 text-muted-foreground">
              Nobody has registered for the conference yet. Humanity continues
              its proud tradition of waiting until the deadline.
            </p>

            <Link
              href="/register"
              className={cn(buttonVariants(), "mt-6 rounded-xl")}
            >
              Register first attendee
            </Link>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
