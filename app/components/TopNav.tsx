"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

        {/* Desktop */}

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.label}
            </NavItem>
          ))}

          <DesktopDropdown label="Conference" items={conferenceItems} />

          <DesktopDropdown label="Resources" items={resourcesItems} />

          <DesktopDropdown label="Dashboard" items={dashboardItems} />
        </nav>

        <div className="flex items-center gap-3">
          <Button
            className="hidden sm:inline-flex"
            nativeButton={false}
            render={<Link href="/register" />}
          >
            Register
          </Button>

          <MobileMenu />
        </div>
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

function DesktopDropdown({
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
      <DropdownMenuTrigger className="inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium hover:bg-muted">
        {label}

        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
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

function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button className="rounded-md p-2 hover:bg-muted" type="button">
              <Menu className="h-6 w-6" />
            </Button>
          }
        />

        <SheetContent side="right" className="w-80">
          <MobileNavigation />
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MobileNavigation() {
  return (
    <div className="mt-8 flex flex-col gap-8 px-4">
      <Section title="Pages" items={navLinks} />

      <Section title="Conference" items={conferenceItems} />

      <Section title="Resources" items={resourcesItems} />

      <Section title="Dashboard" items={dashboardItems} />

      <Button
        className="w-full"
        nativeButton={false}
        render={<Link href="/register" />}
      >
        Register
      </Button>
    </div>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: {
    href: string;
    label: string;
  }[];
}) {
  const pathname = usePathname();

  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>

      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block rounded-md px-3 py-2 text-sm transition-colors",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
