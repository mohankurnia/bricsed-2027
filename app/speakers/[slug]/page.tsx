import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const speakers = [
  {
    slug: "amina-rahman",
    name: "Dr. Amina Rahman",
    role: "AI Research Lead",
    topic: "Designing Responsible AI Systems",
    session: "Keynote • Building trustworthy AI for public impact",
    bio: "Amina has spent the last decade building ethical AI systems for public services and emerging markets.",
  },
  {
    slug: "daniel-kim",
    name: "Prof. Daniel Kim",
    role: "Sustainability Scientist",
    topic: "Climate Tech and Human-Centered Innovation",
    session: "Panel • Turning climate research into scalable solutions",
    bio: "Daniel works at the intersection of climate science, policy, and product design to accelerate impact.",
  },
  {
    slug: "sarah-chen",
    name: "Sarah Chen",
    role: "Product Strategist",
    topic: "From Research to Global Product Launch",
    session: "Workshop • Bridging academia and industry",
    bio: "Sarah helps founders convert research into product strategies that reach global audiences.",
  },
];

export default async function SpeakerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const speaker = speakers.find((item) => item.slug === slug);

  if (!speaker) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{speaker.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{speaker.role}</p>
        </div>
        <Link
          href="/speakers"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to speakers
        </Link>
      </div>

      <div className="mt-8 rounded-3xl border border-border bg-background p-8 shadow-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl font-semibold text-primary">
          {speaker.name
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")}
        </div>
        <h2 className="mt-6 text-2xl font-semibold">{speaker.topic}</h2>
        <p className="mt-3 text-sm leading-8 text-muted-foreground">
          {speaker.bio}
        </p>
        <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-foreground">
          {speaker.session}
        </div>
      </div>
    </main>
  );
}
