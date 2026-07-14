import Link from "next/link";
import { CalendarDays, FileText, Search, User, BookOpen } from "lucide-react";

import { prisma } from "@/lib/db";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function getStatusStyle(status: string) {
  switch (status) {
    case "ACCEPTED":
      return "border-emerald-200 bg-emerald-100 text-emerald-700";

    case "UNDER_REVIEW":
      return "border-amber-200 bg-amber-100 text-amber-700";

    case "REJECTED":
      return "border-red-200 bg-red-100 text-red-700";

    default:
      return "border-border bg-muted text-muted-foreground";
  }
}

export default async function PapersPage({
  searchParams,
}: {
  searchParams: Promise<{
    success?: string;
    error?: string;
  }>;
}) {
  const params = await searchParams;

  let papers: Array<{
    id: string;
    title: string;
    abstract: string;
    status: string;
    createdAt: Date;
    author: {
      name: string;
    };
    event: {
      title: string;
    };
  }> = [];

  try {
    const result = await prisma.paper.findMany({
      include: {
        author: true,
        event: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    papers = result.map((paper) => ({
      id: paper.id,
      title: paper.title,
      abstract: paper.abstract,
      status: paper.status,
      createdAt: paper.createdAt,
      author: {
        name: paper.author.name,
      },
      event: {
        title: paper.event.title,
      },
    }));
  } catch {
    papers = [];
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      {/* Hero */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Research Papers</h1>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
            Explore research papers submitted by participants across multiple
            disciplines. Browse abstracts, authors, conference sessions, and
            review progress.
          </p>
        </div>

        <Link href="/submit" className={cn(buttonVariants(), "inline-flex")}>
          Submit Paper
        </Link>
      </div>

      {/* Alerts */}

      {params.success && (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {params.success}
        </div>
      )}

      {params.error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {params.error}
        </div>
      )}

      {/* Search */}

      <section className="mt-10 rounded-3xl border bg-background p-6 shadow-sm">
        <div className="relative">
          <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input placeholder="Search research papers..." className="pl-11" />
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          {papers.length} research papers available.
        </p>
      </section>

      {/* Paper List */}

      <section className="mt-8 space-y-6">
        {papers.length === 0 && (
          <div className="rounded-3xl border border-dashed p-16 text-center">
            <FileText className="mx-auto h-10 w-10 text-muted-foreground" />

            <h2 className="mt-5 text-xl font-semibold">No papers found</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              There are no submitted papers yet.
            </p>

            <Link
              href="/submit"
              className={cn(buttonVariants(), "mt-6 inline-flex")}
            >
              Submit First Paper
            </Link>
          </div>
        )}

        {papers.map((paper) => (
          <article
            key={paper.id}
            className="rounded-3xl border bg-background p-8 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {paper.title}
                </h2>

                <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {paper.author.name}
                  </div>

                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {paper.event.title}
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {paper.createdAt.toLocaleDateString()}
                  </div>
                </div>

                <p className="mt-6 line-clamp-3 text-sm leading-8 text-muted-foreground">
                  {paper.abstract}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/papers/${paper.id}`}
                    className={cn(buttonVariants())}
                  >
                    Read Paper
                  </Link>

                  <Button variant="outline">Download PDF</Button>
                </div>
              </div>

              <div className="flex shrink-0">
                <span
                  className={cn(
                    "inline-flex h-fit rounded-full border px-4 py-2 text-sm font-medium",
                    getStatusStyle(paper.status),
                  )}
                >
                  {paper.status.replaceAll("_", " ")}
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
