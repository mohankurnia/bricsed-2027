import Link from "next/link";
import { notFound } from "next/navigation";

import { prisma } from "@/lib/db";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function PaperDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let paper;

  try {
    paper = await prisma.paper.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
        event: true,
      },
    });
  } catch {
    paper = null;
  }

  if (!paper) {
    notFound();
  }

  function statusClass(status: string) {
    switch (status) {
      case "ACCEPTED":
        return "border-emerald-200 bg-emerald-100 text-emerald-700";

      case "UNDER_REVIEW":
        return "border-blue-200 bg-blue-100 text-blue-700";

      case "REJECTED":
        return "border-rose-200 bg-rose-100 text-rose-700";

      default:
        return "border-amber-200 bg-amber-100 text-amber-700";
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      {/* Hero */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            <span
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold",
                statusClass(paper.status),
              )}
            >
              {paper.status.replaceAll("_", " ")}
            </span>

            <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs">
              {paper.event.title}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-tight">
            {paper.title}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            Submitted by{" "}
            <span className="font-medium">{paper.author.name}</span>
          </p>
        </div>

        <Link
          href="/papers"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Back to Papers
        </Link>
      </div>

      {/* Content */}

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Main */}

        <section className="space-y-8">
          <article className="rounded-3xl border border-border bg-background p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Abstract</h2>

            <p className="mt-6 text-sm leading-8 text-muted-foreground">
              {paper.abstract}
            </p>
          </article>

          <article className="rounded-3xl border border-border bg-background p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Research Information</h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-sm font-medium">Conference</p>

                <p className="mt-2 text-muted-foreground">
                  {paper.event.title}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-sm font-medium">Theme</p>

                <p className="mt-2 text-muted-foreground">
                  {paper.event.theme}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-sm font-medium">Submission Date</p>

                <p className="mt-2 text-muted-foreground">
                  {paper.createdAt.toLocaleDateString()}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-sm font-medium">Last Updated</p>

                <p className="mt-2 text-muted-foreground">
                  {paper.updatedAt.toLocaleDateString()}
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* Sidebar */}

        <aside className="space-y-6">
          <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Author</h2>

            <div className="mt-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                {paper.author.name
                  .split(" ")
                  .map((x) => x[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <h3 className="mt-4 font-semibold">{paper.author.name}</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {paper.author.email}
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Quick Actions</h2>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={paper.fileUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants(), "w-full")}
              >
                View PDF
              </a>

              <Link
                href="/papers"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "w-full",
                )}
              >
                Browse Papers
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Timeline</h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-border bg-muted/40 p-4">
                <p className="font-medium">Submitted</p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {paper.createdAt.toLocaleDateString()}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/40 p-4">
                <p className="font-medium">Review Deadline</p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {paper.event.deadline.toLocaleDateString()}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/40 p-4">
                <p className="font-medium">Conference</p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {paper.event.dateStart.toLocaleDateString()} -{" "}
                  {paper.event.dateEnd.toLocaleDateString()}
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border bg-primary p-6 text-primary-foreground">
            <h2 className="text-lg font-semibold">Review Status</h2>

            <p className="mt-3 text-sm leading-7 opacity-90">
              This submission is currently{" "}
              <strong>{paper.status.replaceAll("_", " ")}</strong>. Authors will
              receive email notifications whenever the review status changes.
            </p>
          </section>
        </aside>
      </div>
    </main>
  );
}
