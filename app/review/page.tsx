import Link from "next/link";

import { prisma } from "@/lib/db";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UpdatePaperStatus } from "./update-status";

export default async function ReviewPage() {
  let papers: Array<{
    id: string;
    title: string;
    abstract: string;
    status: string;
    author: {
      name: string;
      email: string;
    };
  }> = [];

  try {
    const data = await prisma.paper.findMany({
      include: {
        author: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    papers = data.map((paper) => ({
      id: paper.id,
      title: paper.title,
      abstract: paper.abstract,
      status: paper.status,
      author: {
        name: paper.author.name,
        email: paper.author.email,
      },
    }));
  } catch {
    papers = [];
  }

  const pending = papers.filter((paper) => paper.status === "PENDING").length;

  const reviewing = papers.filter(
    (paper) => paper.status === "UNDER_REVIEW",
  ).length;

  const accepted = papers.filter((paper) => paper.status === "ACCEPTED").length;

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
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Reviewer Dashboard</h1>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
            Monitor submitted papers, review their progress, and manage the
            peer-review process.
          </p>
        </div>

        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to home
        </Link>
      </div>

      {/* Summary */}

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Papers</p>

          <h2 className="mt-2 text-3xl font-bold">{papers.length}</h2>
        </div>

        <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">Pending</p>

          <h2 className="mt-2 text-3xl font-bold text-amber-600">{pending}</h2>
        </div>

        <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">Under Review</p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">{reviewing}</h2>
        </div>

        <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">Accepted</p>

          <h2 className="mt-2 text-3xl font-bold text-emerald-600">
            {accepted}
          </h2>
        </div>
      </div>

      {/* Papers */}

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {papers.map((paper) => (
          <article
            key={paper.id}
            className="rounded-3xl border border-border bg-background p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold leading-tight">
                  {paper.title}
                </h2>

                <p className="mt-4 line-clamp-4 text-sm leading-7 text-muted-foreground">
                  {paper.abstract}
                </p>
              </div>

              <span
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-semibold flex-none",
                  statusClass(paper.status),
                )}
              >
                {paper.status.replaceAll("_", " ")}
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-4">
              <p className="font-medium">{paper.author.name}</p>

              <p className="mt-1 text-sm text-muted-foreground">
                {paper.author.email}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Link
                href={`/papers/${paper.id}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                View submission →
              </Link>
              <UpdatePaperStatus id={paper.id} status={paper.status} />
            </div>
          </article>
        ))}
      </div>

      {papers.length === 0 && (
        <div className="mt-16 rounded-3xl border border-dashed border-border p-12 text-center">
          <h2 className="text-xl font-semibold">No submissions yet</h2>

          <p className="mt-3 text-muted-foreground">
            Submitted papers will appear here once authors complete their
            submission.
          </p>
        </div>
      )}
    </main>
  );
}
