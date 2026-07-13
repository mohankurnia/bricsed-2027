import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sponsors = [
  {
    slug: "northstar-labs",
    name: "Northstar Labs",
    type: "Platinum Sponsor",
    focus: "Responsible AI infrastructure for regulated industries.",
    description:
      "Northstar Labs helps organizations deploy AI responsibly through secure orchestration, policy controls, and measurable impact dashboards.",
  },
  {
    slug: "aether-health",
    name: "Aether Health",
    type: "Gold Sponsor",
    focus: "Connected care systems that improve clinical outcomes.",
    description:
      "Aether Health supports digital transformation in hospitals by connecting care teams, researchers, and patient data in one trusted platform.",
  },
  {
    slug: "nova-cloud",
    name: "Nova Cloud",
    type: "Community Partner",
    focus: "Cloud-native developer education and open research support.",
    description:
      "Nova Cloud empowers student developers and research communities with workshops, mentorship, and cloud credits for experimentation.",
  },
];

export default async function SponsorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sponsor = sponsors.find((item) => item.slug === slug);

  if (!sponsor) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">{sponsor.type}</p>
          <h1 className="mt-2 text-3xl font-semibold">{sponsor.name}</h1>
        </div>
        <Link
          href="/sponsors"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to sponsors
        </Link>
      </div>

      <div className="mt-8 rounded-3xl border border-border bg-background p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">{sponsor.focus}</h2>
        <p className="mt-4 text-sm leading-8 text-muted-foreground">
          {sponsor.description}
        </p>
        <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-foreground">
          Supporting the conference through mentorship, showcase opportunities,
          and community engagement.
        </div>
      </div>
    </main>
  );
}
