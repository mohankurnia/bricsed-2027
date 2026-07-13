import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

async function loginAdmin(formData: FormData) {
  "use server";

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  if (email === "admin@conference.com" && password === "admin123") {
    const cookieStore = await cookies();
    cookieStore.set("admin-auth", "true", { httpOnly: true, path: "/" });
    redirect("/admin");
  }

  redirect("/admin/login?error=Invalid credentials");
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Admin login</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to access the review dashboard.
        </p>

        <form action={loginAdmin} className="mt-8 space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="admin@conference.com"
              className="h-9 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="admin123"
              className="h-9 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              required
            />
          </div>

          <button
            type="submit"
            className={cn(buttonVariants({ size: "lg" }), "inline-flex w-full")}
          >
            Sign in
          </button>
        </form>

        {params.error ? (
          <p className="mt-4 text-sm text-red-600">{params.error}</p>
        ) : null}

        <Link href="/" className="mt-6 inline-flex text-sm text-primary">
          Back to home
        </Link>
      </div>
    </main>
  );
}
