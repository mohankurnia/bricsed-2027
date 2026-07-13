import { redirect } from "next/navigation";
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

export default function RegisterPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Register for the conference</h1>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          Reserve your seat and join the international event.
        </p>

        <form action={registerAttendee} className="mt-8 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="fullName">
                Full name
              </label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="affiliation">
              Affiliation
            </label>
            <Input
              id="affiliation"
              name="affiliation"
              placeholder="University or company"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="ticketType">
              Ticket type
            </label>
            <select
              id="ticketType"
              name="ticketType"
              className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              required
            >
              <option value="">Select one</option>
              <option value="Standard">Standard</option>
              <option value="Student">Student</option>
              <option value="VIP">VIP</option>
            </select>
          </div>

          <Button type="submit">Register now</Button>
        </form>
      </div>
    </main>
  );
}
