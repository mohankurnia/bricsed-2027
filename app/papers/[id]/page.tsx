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
      where: { id },
      include: { author: true, event: true },
    });
  } catch {
    paper = null;
  }

  if (!paper) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{paper.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Submitted by {paper.author.name}
          </p>
        </div>
        <Link
          href="/papers"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to papers
        </Link>
      </div>

      <div className="mt-8 rounded-3xl border border-border bg-background p-8 shadow-sm">
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-sm">
            {paper.status}
          </span>
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-sm">
            {paper.event.title}
          </span>
        </div>

        <h2 className="mt-6 text-xl font-semibold">Abstract</h2>
        <p className="mt-3 text-sm leading-8 text-muted-foreground">
          {paper.abstract}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-muted/30 p-4">
            <p className="text-sm font-semibold">Author</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {paper.author.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {paper.author.email}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-muted/30 p-4">
            <p className="text-sm font-semibold">Submission</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Submitted on {paper.createdAt.toLocaleDateString()}
            </p>
            <a
              href={paper.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm font-medium text-primary"
            >
              Open PDF link
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
