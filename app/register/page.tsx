import { redirect } from "next/navigation";
import { CalendarDays, Globe, Users, BadgeCheck } from "lucide-react";

import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

async function registerAttendee(formData: FormData) {
  "use server";

  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const affiliation = String(formData.get("affiliation") ?? "").trim();
  const ticketType = String(formData.get("ticketType") ?? "").trim();

  if (!fullName || !email || !affiliation || !ticketType) {
    redirect("/register?error=Please complete all fields");
  }

  await prisma.attendee.create({
    data: {
      fullName,
      email,
      affiliation,
      ticketType,
    },
  });

  redirect("/register?success=Registration completed successfully");
}

const benefits = [
  {
    icon: Globe,
    title: "Global Networking",
    description:
      "Meet researchers, professionals, and innovators from around the world.",
  },
  {
    icon: Users,
    title: "Expert Sessions",
    description:
      "Access keynote talks, technical workshops, and panel discussions.",
  },
  {
    icon: BadgeCheck,
    title: "Certificate",
    description:
      "Receive an official certificate of participation after the event.",
  },
];

export default async function RegisterPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = searchParams ? await searchParams : {};

  const success =
    typeof params.success === "string" ? params.success : undefined;

  const error = typeof params.error === "string" ? params.error : undefined;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 px-6 py-16 lg:px-8">
      <div className="grid w-full gap-8 lg:grid-cols-[1fr_480px]">
        {/* Left */}

        <section className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold">
              Register for the conference
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Join researchers, industry leaders, and innovators for three days
              of inspiring keynotes, technical sessions, networking, and
              collaborative discussions.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Conference Highlights</h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border bg-muted/40 p-5">
                <p className="text-3xl font-bold">3</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Conference Days
                </p>
              </div>

              <div className="rounded-2xl border bg-muted/40 p-5">
                <p className="text-3xl font-bold">40+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  International Speakers
                </p>
              </div>

              <div className="rounded-2xl border bg-muted/40 p-5">
                <p className="text-3xl font-bold">800+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Participants
                </p>
              </div>

              <div className="rounded-2xl border bg-muted/40 p-5">
                <p className="text-3xl font-bold">15</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Technical Sessions
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Why attend?</h2>

            <div className="mt-6 space-y-5">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>

                      <p className="mt-1 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Right */}

        <aside className="rounded-3xl border border-border bg-background p-8 shadow-sm h-fit">
          <h2 className="text-2xl font-semibold">Registration Form</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Complete the form below to reserve your seat.
          </p>

          {success && (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
              {success}
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form action={registerAttendee} className="mt-8 space-y-5">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full Name
              </label>

              <Input
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="affiliation" className="text-sm font-medium">
                Affiliation
              </label>

              <Input
                id="affiliation"
                name="affiliation"
                placeholder="University or Company"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="ticketType" className="text-sm font-medium">
                Ticket Type
              </label>

              <select
                id="ticketType"
                name="ticketType"
                required
                className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Choose ticket</option>
                <option value="Standard">Standard</option>
                <option value="Student">Student</option>
                <option value="VIP">VIP</option>
              </select>
            </div>

            <Button type="submit" className="w-full">
              Complete Registration
            </Button>
          </form>
        </aside>
      </div>
    </main>
  );
}
