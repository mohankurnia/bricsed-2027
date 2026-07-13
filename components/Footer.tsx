import Link from "next/link";

const footerLinks = [
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Speakers" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/register", label: "Register" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row lg:justify-between lg:px-8">
        <div className="max-w-md">
          <p className="text-lg font-semibold">Global Tech Conference</p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            A collaborative event for researchers, founders, and builders
            shaping the next generation of technology.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
          <div>
            <p className="text-sm font-semibold">Explore</p>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>hello@globaltechconf.com</li>
              <li>Singapore • Online Hybrid</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
