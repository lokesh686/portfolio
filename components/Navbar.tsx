"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/uses", label: "uses" },
  { href: "/blog", label: "blog" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-text-primary hover:text-accent transition-colors"
        >
          <span className="text-accent">~/</span>lokesh
        </Link>

        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-1.5 text-sm rounded-md transition-colors",
                  isActive
                    ? "text-text-primary bg-bg-tertiary"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <kbd
            onClick={() => {
              const event = new KeyboardEvent("keydown", {
                key: "k",
                metaKey: true,
                bubbles: true,
              });
              document.dispatchEvent(event);
            }}
            className="ml-2 hidden sm:flex items-center gap-1 px-2 py-1 text-xs text-text-muted border border-border rounded cursor-pointer hover:border-border-hover hover:text-text-secondary transition-colors"
          >
            <span>⌘</span>K
          </kbd>
        </div>
      </nav>
    </header>
  );
}
