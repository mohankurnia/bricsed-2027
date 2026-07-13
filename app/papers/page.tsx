import Link from "next/link";
import { prisma } from "@/lib/db";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function PapersPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; error?: string }>;
}) {
  const params = await searchParams;
  let papers: Awaited<ReturnType<typeof prisma.paper.findMany>> = [];

  try {
    papers = await prisma.paper.findMany({
      include: { author: true, event: true },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    papers = [];
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Paper submissions</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Review recent submissions and track their status.
          </p>
        </div>
        <Link
          href="/submit"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Add new submission
        </Link>
      </div>

      {params.success ? (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
          {params.success}
        </div>
      ) : null}

      {params.error ? (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {params.error}
        </div>
      ) : null}

      <div className="mt-8 grid gap-4">
        {papers.map((paper) => (
          <article
            key={paper.id}
            className="rounded-2xl border border-border bg-background p-5 shadow-sm"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{paper.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {paper.abstract}
                </p>
              </div>
              <span className="rounded-full border border-border bg-muted px-3 py-1 text-sm">
                {paper.status}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>Author: {paper.author.name}</span>
              <span>Event: {paper.event.title}</span>
              <span>Submitted: {paper.createdAt.toLocaleDateString()}</span>
            </div>
            <Link
              href={`/papers/${paper.id}`}
              className="mt-4 inline-flex text-sm font-medium text-primary"
            >
              View details
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
