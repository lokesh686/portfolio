"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Briefcase, FileText, ExternalLink, Mail } from "lucide-react";

const navigationItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "contact", label: "Contact", href: "/contact" },
];

const quickActions = [
  {
    id: "copy-email",
    label: "Copy email",
    icon: Mail,
    action: () => {
      navigator.clipboard.writeText("vodnalalokesh232@gmail.com");
    },
  },
  {
    id: "github",
    label: "Open GitHub",
    icon: Code,
    action: () => {
      window.open("https://github.com/lokesh686", "_blank");
    },
  },
  {
    id: "linkedin",
    label: "Open LinkedIn",
    icon: Briefcase,
    action: () => {
      window.open("https://linkedin.com/in/vodnala-lokesh-a6b367227", "_blank");
    },
  },
  {
    id: "resume",
    label: "Download Resume",
    icon: FileText,
    action: () => {
      window.open("/resume.pdf", "_blank");
    },
  },
];

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-border bg-bg-secondary shadow-2xl overflow-hidden"
          >
            <Command className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-text-muted [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider">
              <div className="flex items-center border-b border-border px-4">
                <span className="text-text-muted text-sm mr-3">⌘</span>
                <Command.Input
                  placeholder="Search pages, projects, or actions..."
                  className="w-full py-4 bg-transparent text-text-primary placeholder-text-muted outline-none text-sm"
                />
              </div>

              <Command.List className="max-h-96 overflow-y-auto">
                {/* Navigation Section */}
                <Command.Group heading="Navigation">
                  {navigationItems.map((item) => (
                    <Command.Item
                      key={item.id}
                      value={item.label}
                      onSelect={() => {
                        window.location.href = item.href;
                        setIsOpen(false);
                      }}
                      className="px-4 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-tertiary cursor-pointer transition-colors"
                    >
                      <span>{item.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                {/* Quick Actions Section */}
                <Command.Group heading="Quick Actions">
                  {quickActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <Command.Item
                        key={action.id}
                        value={action.label}
                        onSelect={() => {
                          action.action();
                          setIsOpen(false);
                        }}
                        className="px-4 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-tertiary cursor-pointer transition-colors flex items-center gap-3"
                      >
                        <Icon size={16} className="text-accent" />
                        <span>{action.label}</span>
                      </Command.Item>
                    );
                  })}
                </Command.Group>

                {/* Projects Section */}
                <Command.Group heading="Featured Projects">
                  <Command.Item
                    value="AgentFlow Pro"
                    onSelect={() => {
                      window.location.href = "/projects/agentflow-pro";
                      setIsOpen(false);
                    }}
                    className="px-4 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-tertiary cursor-pointer transition-colors flex items-center gap-3"
                  >
                    <ExternalLink size={16} className="text-accent" />
                    <span>AgentFlow Pro</span>
                  </Command.Item>
                  <Command.Item
                    value="CallPilot AI"
                    onSelect={() => {
                      window.location.href = "/projects/callpilot-ai";
                      setIsOpen(false);
                    }}
                    className="px-4 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-tertiary cursor-pointer transition-colors flex items-center gap-3"
                  >
                    <ExternalLink size={16} className="text-accent" />
                    <span>CallPilot AI</span>
                  </Command.Item>
                  <Command.Item
                    value="NeuronOS"
                    onSelect={() => {
                      window.location.href = "/projects/neuronos";
                      setIsOpen(false);
                    }}
                    className="px-4 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-tertiary cursor-pointer transition-colors flex items-center gap-3"
                  >
                    <ExternalLink size={16} className="text-accent" />
                    <span>NeuronOS</span>
                  </Command.Item>
                </Command.Group>

                <Command.Empty className="px-4 py-8 text-center text-sm text-text-muted">
                  No results found.
                </Command.Empty>
              </Command.List>

              <div className="border-t border-border px-4 py-3 text-xs text-text-muted">
                <div className="flex items-center justify-between">
                  <span>Press</span>
                  <div className="flex gap-1">
                    <kbd className="px-2 py-1 bg-bg-tertiary rounded border border-border">
                      ↵
                    </kbd>
                    <span>to select</span>
                    <kbd className="px-2 py-1 bg-bg-tertiary rounded border border-border">
                      esc
                    </kbd>
                    <span>to close</span>
                  </div>
                </div>
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
