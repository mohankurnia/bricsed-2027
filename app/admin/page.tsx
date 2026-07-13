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

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Admin review</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage submissions and review paper status.
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
            Back to submissions
          </Link>
          <Link
            href="/admin/login"
            className={cn(buttonVariants({ variant: "ghost" }), "inline-flex")}
          >
            Logout
          </Link>
        </div>
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
