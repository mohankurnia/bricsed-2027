import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const paperStatuses = [
  "PENDING",
  "UNDER_REVIEW",
  "ACCEPTED",
  "REJECTED",
] as const;

const statusClasses: Record<string, string> = {
  PENDING: "border-amber-300 bg-amber-50 text-amber-700",
  UNDER_REVIEW: "border-sky-300 bg-sky-50 text-sky-700",
  ACCEPTED: "border-emerald-300 bg-emerald-50 text-emerald-700",
  REJECTED: "border-rose-300 bg-rose-50 text-rose-700",
};

async function updatePaperStatus(formData: FormData) {
  "use server";

  const paperId = String(formData.get("paperId") ?? "").trim();
  const status = String(formData.get("status") ?? "").trim();

  if (
    !paperId ||
    !paperStatuses.includes(status as (typeof paperStatuses)[number])
  ) {
    return;
  }

  await prisma.paper.update({
    where: { id: paperId },
    data: { status: status as (typeof paperStatuses)[number] },
  });

  revalidatePath("/admin");
  revalidatePath("/papers");
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin-auth")?.value === "true";

  if (!isAdmin) {
    redirect("/admin/login?error=Please sign in first");
  }

  let papers: Array<{
    id: string;
    title: string;
    abstract: string;
    status: string;
    createdAt: Date;
    author: {
      name: string;
      email: string;
    };
  }> = [];

  try {
    const data = (await prisma.paper.findMany({
      include: { author: true },
      orderBy: { createdAt: "desc" },
    })) as Array<any>;

    papers = data.map((paper: any) => ({
      id: paper.id,
      title: paper.title,
      abstract: paper.abstract,
      status: paper.status,
      createdAt: paper.createdAt,
      author: {
        name: paper.author.name,
        email: paper.author.email,
      },
    }));
  } catch {
    papers = [];
  }

  const summaryCards = [
    {
      label: "Total submissions",
      value: papers.length,
      tone: "bg-primary/10 text-primary",
    },
    {
      label: "Under review",
      value: papers.filter((paper) => paper.status === "UNDER_REVIEW").length,
      tone: "bg-sky-50 text-sky-700",
    },
    {
      label: "Accepted",
      value: papers.filter((paper) => paper.status === "ACCEPTED").length,
      tone: "bg-emerald-50 text-emerald-700",
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Admin dashboard</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Monitor submissions, review progress, and update paper outcomes.
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/papers"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "inline-flex",
            )}
          >
            View submissions
          </Link>
          <Link
            href="/admin/login"
            className={cn(buttonVariants({ variant: "ghost" }), "inline-flex")}
          >
            Logout
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className={cn(
              "rounded-2xl border border-border p-4 shadow-sm",
              card.tone,
            )}
          >
            <p className="text-sm font-medium">{card.label}</p>
            <p className="mt-2 text-3xl font-semibold">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4">
        {papers.map((paper) => (
          <article
            key={paper.id}
            className="rounded-2xl border border-border bg-background p-5 shadow-sm"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold">{paper.title}</h2>
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 text-sm font-medium",
                      statusClasses[paper.status] ??
                        "border-border bg-muted text-muted-foreground",
                    )}
                  >
                    {paper.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {paper.abstract}
                </p>
              </div>
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
                {paperStatuses.map((status) => (
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
