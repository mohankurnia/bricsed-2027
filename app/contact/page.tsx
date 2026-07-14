import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@globaltechconference.id",
    description: "General inquiries, registration, and paper submissions.",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+62 341 456789",
    description: "Available during conference office hours.",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Malang, East Java, Indonesia",
    description: "Conference Secretariat & Organizing Committee.",
  },
];

const officeHours = [
  "Monday - Friday • 09:00 AM - 06:00 PM",
  "Saturday • 10:00 AM - 02:00 PM",
  "Sunday • Closed",
];

const services = [
  "Registration assistance",
  "Paper submission support",
  "Speaker inquiries",
  "Travel & accommodation",
  "Sponsorship opportunities",
  "Technical support",
];

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 lg:px-8">
      {/* Header */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Contact us</h1>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
            We're here to help with registration, paper submissions,
            sponsorships, travel arrangements, and everything related to the
            conference.
          </p>
        </div>

        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          Back to home
        </Link>
      </div>

      {/* Contact Cards */}

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {contacts.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>

              <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>

              <p className="mt-2 font-medium">{item.value}</p>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          );
        })}
      </section>

      {/* Info Section */}

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-border bg-background p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Office hours</h2>
          </div>

          <div className="mt-6 space-y-4">
            {officeHours.map((hour) => (
              <div
                key={hour}
                className="rounded-2xl border border-border bg-muted/40 p-4"
              >
                <p className="text-sm">{hour}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-border bg-background p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">How we can help</h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Our organizing committee supports attendees, researchers,
            universities, sponsors, and industry partners before and during the
            conference.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-border bg-muted px-3 py-2 text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </article>
      </section>

      {/* CTA */}

      <section className="mt-8 rounded-3xl border border-primary/20 bg-primary/5 p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Looking for quick answers?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
              Many common questions about registration, paper submission,
              publication, and conference participation are already answered in
              our FAQ section.
            </p>
          </div>

          <Link href="/faq" className={cn(buttonVariants(), "gap-2")}>
            Visit FAQ
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
