import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I submit a paper?",
    answer:
      "Go to the Submit page and fill in the required information, including your paper title, abstract, and PDF link.",
  },
  {
    question: "Is the conference hybrid?",
    answer: "Yes, participants can attend in person or join the online stream.",
  },
  {
    question: "Who reviews the papers?",
    answer:
      "Papers are reviewed by a panel of international experts and academic reviewers.",
  },
];

export default function FaqPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Frequently asked questions</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Answers to the most common questions about the event.
          </p>
        </div>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to home
        </Link>
      </div>

      <div className="mt-8 space-y-3">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-border bg-background p-5 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-lg font-semibold">{item.question}</span>
              <span className="text-xl text-muted-foreground transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </main>
  );
}
