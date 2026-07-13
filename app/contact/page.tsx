import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Contact us</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach out for questions about registration, submissions, or
            conference logistics.
          </p>
        </div>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to home
        </Link>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            hello@globaltechconference.com
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Office</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Grand Meridian Hall, 24 Innovation Avenue
          </p>
        </article>
      </div>
    </main>
  );
}
