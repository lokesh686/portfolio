"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";

const items = [
  { label: "Home", href: "/", group: "Navigation" },
  { label: "About", href: "/about", group: "Navigation" },
  { label: "Projects", href: "/projects", group: "Navigation" },
  { label: "Uses", href: "/uses", group: "Navigation" },
  { label: "Blog", href: "/blog", group: "Navigation" },
  { label: "Contact", href: "/contact", group: "Navigation" },
  { label: "GitHub", href: "https://github.com/lokesh686", group: "Social" },
  { label: "LinkedIn", href: "https://linkedin.com/in/vodnala-lokesh-a6b367227", group: "Social" },
  { label: "Peerlist", href: "https://peerlist.io", group: "Social" },
  { label: "Email", href: "mailto:vodnalalokesh232@gmail.com", group: "Social" },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggle = useCallback(() => setOpen((o) => !o), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [toggle]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-24 bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-md bg-bg-secondary border border-border rounded-xl overflow-hidden shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="[&_[cmdk-input-wrapper]]:border-b [&_[cmdk-input-wrapper]]:border-border">
          <Command.Input
            placeholder="Type a command or search..."
            className="w-full bg-transparent px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted outline-none"
          />
          <Command.List className="max-h-80 overflow-y-auto py-2">
            <Command.Empty className="px-4 py-8 text-center text-sm text-text-muted">
              No results.
            </Command.Empty>
            {["Navigation", "Social"].map((group) => (
              <Command.Group
                key={group}
                heading={group}
                className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-text-muted [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider"
              >
                {items
                  .filter((i) => i.group === group)
                  .map((item) => (
                    <Command.Item
                      key={item.href}
                      value={item.label}
                      onSelect={() => {
                        setOpen(false);
                        if (item.href.startsWith("http") || item.href.startsWith("mailto")) {
                          window.open(item.href, "_blank");
                        } else {
                          router.push(item.href);
                        }
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary cursor-pointer aria-selected:bg-bg-tertiary aria-selected:text-text-primary transition-colors"
                    >
                      <span className="text-accent text-xs font-mono">›</span>
                      {item.label}
                    </Command.Item>
                  ))}
              </Command.Group>
            ))}
          </Command.List>
          <div className="px-4 py-2 border-t border-border flex items-center justify-between">
            <span className="text-xs text-text-muted">↑↓ navigate</span>
            <span className="text-xs text-text-muted">↵ open · esc close</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
