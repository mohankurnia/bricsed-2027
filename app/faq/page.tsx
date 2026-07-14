import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I submit a paper?",
    answer:
      "Go to the Submit Paper page and complete the submission form by providing the title, abstract, author information, and PDF file. You can monitor your submission status anytime from the Papers page.",
  },
  {
    question: "Is the conference available online?",
    answer:
      "Yes. The conference offers both on-site and virtual participation. Registered attendees will receive streaming access before the event begins.",
  },
  {
    question: "Who reviews submitted papers?",
    answer:
      "Each paper undergoes a double-blind peer review conducted by qualified academic reviewers and industry experts from multiple institutions.",
  },
  {
    question: "Can I update my submission?",
    answer:
      "Yes. You may update your submission before the submission deadline. After the deadline, modifications are no longer accepted.",
  },
  {
    question: "When will acceptance results be announced?",
    answer:
      "Authors will receive email notifications after the review period has ended. The submission status will also be updated inside the dashboard.",
  },
  {
    question: "Will accepted papers be published?",
    answer:
      "Accepted papers will be included in the official conference proceedings and selected papers may be invited for journal publication.",
  },
];

export default function FaqPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      {/* Header */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Frequently asked questions</h1>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
            Find answers to common questions about paper submissions,
            registration, conference schedules, and participation.
          </p>
        </div>

        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to home
        </Link>
      </div>

      {/* Categories */}

      <section className="mt-8 rounded-3xl border border-border bg-background p-8 shadow-sm">
        <h2 className="text-xl font-semibold">Popular topics</h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {[
            "Paper Submission",
            "Registration",
            "Review Process",
            "Publication",
            "Attendance",
            "Schedule",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-muted px-4 py-2 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}

      <section className="mt-8 rounded-3xl border border-border bg-background p-8 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">
            Everything you need to know
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Can't find what you're looking for? Contact the conference committee
            for additional assistance.
          </p>
        </div>

        <Accordion className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-border bg-muted/30 px-6"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact */}

      <section className="mt-8 rounded-3xl border border-primary/20 bg-primary/5 p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Still have questions?</h2>

            <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
              Our organizing committee is available to help with registration,
              paper submission, travel information, sponsorship opportunities,
              and general conference inquiries.
            </p>
          </div>

          <Link href="/contact" className={cn(buttonVariants(), "gap-2")}>
            Contact us
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
