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

  let event = await prisma.conferenceEvent.findFirst();

  if (!event) {
    event = await prisma.conferenceEvent.create({
      data: {
        title: "Global Tech Conference 2026",
        theme: "Innovation, Research, and Impact",
        dateStart: new Date("2026-10-15"),
        dateEnd: new Date("2026-10-17"),
        deadline: new Date("2026-09-20"),
      },
    });
  }

  let user = await prisma.user.findUnique({
    where: {
      email: authorEmail,
    },
  });

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
      eventId: event.id,
    },
  });

  redirect("/papers?success=Paper submitted successfully");
}

const guidelines = [
  "Original and unpublished research only.",
  "Submit your manuscript in PDF format.",
  "Maximum 10 pages including references.",
  "All papers undergo double-blind peer review.",
];

const dates = [
  {
    title: "Submission Deadline",
    value: "20 September 2026",
  },
  {
    title: "Notification",
    value: "5 October 2026",
  },
  {
    title: "Camera Ready",
    value: "10 October 2026",
  },
];

export default function SubmitPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Submit your research paper</h1>

        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          Share your latest research with academics and industry leaders from
          around the world. Every submission is reviewed by experienced
          reviewers before acceptance.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[360px_1fr]">
        {/* Sidebar */}

        <div className="space-y-6">
          <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Submission Guidelines</h2>

            <div className="mt-5 space-y-3">
              {guidelines.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Important Dates</h2>

            <div className="mt-5 space-y-4">
              {dates.map((date) => (
                <div
                  key={date.title}
                  className="rounded-2xl border border-border bg-muted/40 p-4"
                >
                  <p className="font-medium">{date.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {date.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-primary p-6 text-primary-foreground">
            <h2 className="text-lg font-semibold">Review Process</h2>

            <p className="mt-3 text-sm leading-7 opacity-90">
              Every paper will be evaluated based on originality, technical
              quality, significance, and presentation before acceptance.
            </p>
          </section>
        </div>

        {/* Form */}

        <section className="rounded-3xl border border-border bg-background p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Paper Information</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Complete the information below to submit your paper.
          </p>

          <form action={createPaper} className="mt-8 space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="authorName" className="text-sm font-medium">
                  Author Name
                </label>

                <Input
                  id="authorName"
                  name="authorName"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="authorEmail" className="text-sm font-medium">
                  Email Address
                </label>

                <Input
                  id="authorEmail"
                  name="authorEmail"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Paper Title
              </label>

              <Input
                id="title"
                name="title"
                placeholder="Artificial Intelligence for Sustainable Smart Cities"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="abstract" className="text-sm font-medium">
                Abstract
              </label>

              <textarea
                id="abstract"
                name="abstract"
                rows={8}
                required
                placeholder="Provide a concise summary of your research, methodology, and contributions..."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="fileUrl" className="text-sm font-medium">
                PDF URL
              </label>

              <Input
                id="fileUrl"
                name="fileUrl"
                placeholder="https://example.com/paper.pdf"
                required
              />

              <p className="text-xs text-muted-foreground">
                Upload your PDF to cloud storage (Google Drive, S3, Dropbox,
                etc.) and paste the public link.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-muted/40 p-5">
              <h3 className="font-semibold">Before submitting</h3>

              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Verify all author information.</li>
                <li>• Ensure the PDF link is publicly accessible.</li>
                <li>• Check formatting requirements.</li>
                <li>• Review the abstract for grammar and clarity.</li>
              </ul>
            </div>

            <Button className="w-full md:w-auto" type="submit">
              Submit Paper
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}
