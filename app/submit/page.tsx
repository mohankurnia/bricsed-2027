import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

async function createPaper(formData: FormData) {
  "use server";

  const title = String(formData.get("title") ?? "").trim();
  const abstract = String(formData.get("abstract") ?? "").trim();
  const fileUrl = String(formData.get("fileUrl") ?? "").trim();
  const authorEmail = String(formData.get("authorEmail") ?? "").trim();
  const authorName = String(formData.get("authorName") ?? "").trim();

  if (!title || !abstract || !fileUrl || !authorEmail || !authorName) {
    redirect("/submit?error=All fields are required");
  }

  const event = await prisma.conferenceEvent.findFirst();

  if (!event) {
    await prisma.conferenceEvent.create({
      data: {
        title: "Global Tech Conference 2026",
        theme: "Innovation, Research, and Impact",
        dateStart: new Date("2026-10-15T08:00:00.000Z"),
        dateEnd: new Date("2026-10-16T18:00:00.000Z"),
        deadline: new Date("2026-09-20T23:59:59.000Z"),
      },
    });
  }

  const conferenceEvent = (await prisma.conferenceEvent.findFirst())!;

  let user = await prisma.user.findUnique({ where: { email: authorEmail } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        name: authorName,
        email: authorEmail,
        password: "changeme",
      },
    });
  }

  await prisma.paper.create({
    data: {
      title,
      abstract,
      fileUrl,
      authorId: user.id,
      eventId: conferenceEvent.id,
    },
  });

  redirect("/papers?success=Paper submitted successfully");
}

export default function SubmitPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Submit your paper</h1>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          Share your work with reviewers and join the competition.
        </p>

        <form action={createPaper} className="mt-8 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="authorName">
                Your name
              </label>
              <Input
                id="authorName"
                name="authorName"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="authorEmail">
                Email
              </label>
              <Input
                id="authorEmail"
                name="authorEmail"
                type="email"
                placeholder="jane@example.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="title">
              Paper title
            </label>
            <Input
              id="title"
              name="title"
              placeholder="Innovative approach to AI safety"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="abstract">
              Abstract
            </label>
            <textarea
              id="abstract"
              name="abstract"
              rows={6}
              className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder="Summarize your research and contribution"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="fileUrl">
              PDF link
            </label>
            <Input
              id="fileUrl"
              name="fileUrl"
              placeholder="https://example.com/paper.pdf"
              required
            />
          </div>

          <Button type="submit">Submit paper</Button>
        </form>
      </div>
    </main>
  );
}
