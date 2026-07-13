import { revalidatePath } from "next/cache";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PaperStatus } from "@/lib/generated/prisma";

async function updatePaperStatus(formData: FormData) {
  "use server";

  const paperId = String(formData.get("paperId") ?? "").trim();
  const status = String(formData.get("status") ?? "").trim();

  if (!paperId || !Object.values(PaperStatus).includes(status as PaperStatus)) {
    return;
  }

  await prisma.paper.update({
    where: { id: paperId },
    data: { status: status as PaperStatus },
  });

  revalidatePath("/admin");
  revalidatePath("/papers");
}

export default async function AdminPage() {
  let papers: Awaited<ReturnType<typeof prisma.paper.findMany>> = [];

  try {
    papers = await prisma.paper.findMany({
      include: { author: true },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    papers = [];
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Admin review</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage submissions and review paper status.
          </p>
        </div>
        <Link
          href="/papers"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to submissions
        </Link>
      </div>

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
              <span>Email: {paper.author.email}</span>
            </div>

            <form
              action={updatePaperStatus}
              className="mt-4 flex flex-wrap items-center gap-2"
            >
              <input type="hidden" name="paperId" value={paper.id} />
              <select
                name="status"
                defaultValue={paper.status}
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
              >
                {Object.values(PaperStatus).map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="rounded-lg border border-border bg-muted px-3 py-2 text-sm font-medium"
              >
                Update status
              </button>
            </form>
          </article>
        ))}
      </div>
    </main>
  );
}
