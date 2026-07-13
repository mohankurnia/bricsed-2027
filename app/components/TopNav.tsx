"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const conferenceItems = [
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Speakers" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/venue", label: "Venue" },
];

const resourcesItems = [
  { href: "/papers", label: "Papers" },
  { href: "/attendees", label: "Attendees" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const dashboardItems = [
  { href: "/submit", label: "Submit Paper" },
  { href: "/review", label: "Review Papers" },
  { href: "/admin", label: "Admin" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Global Tech Conference
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.label}
            </NavItem>
          ))}

          <Menu label="Conference" items={conferenceItems} />

          <Menu label="Resources" items={resourcesItems} />

          <Menu label="Dashboard" items={dashboardItems} />
        </nav>

        <Button nativeButton={false} render={<Link href="/register" />}>
          Register
        </Button>
      </div>
    </header>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium transition-colors",
        pathname === href
          ? "bg-primary text-primary-foreground"
          : "hover:bg-muted",
      )}
    >
      {children}
    </Link>
  );
}

function Menu({
  label,
  items,
}: {
  label: string;
  items: {
    href: string;
    label: string;
  }[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium transition hover:bg-muted">
        {label}
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-52">
        {items.map((item) => (
          <DropdownMenuItem
            key={item.href}
            render={<Link href={item.href}>{item.label}</Link>}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
