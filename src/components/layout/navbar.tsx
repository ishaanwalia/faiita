"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, Users } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/directory", label: "Dealer Directory" },
  { href: "/membership", label: "Membership" },
  { href: "/news", label: "News" },
  { href: "/events", label: "Events" },
  { href: "/state-associations", label: "States" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0A2540]">
            <span className="text-sm font-bold text-white">F</span>
          </div>
          <span className="hidden text-lg font-bold text-[#0A2540] sm:inline-block">
            FAIITA
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/directory" className="hidden sm:inline-flex">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search dealers</span>
            </Button>
          </Link>
          <Link href="/login" className="hidden sm:inline-flex">
            <Button
              variant="outline"
              className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white"
            >
              <Users className="mr-2 h-4 w-4" />
              Member Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-[#FF9933] text-white hover:bg-[#FF9933]/90">
              Join FAIITA
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden"
              render={
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              }
            />
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="border-border" />
                <Link href="/login" className="w-full">
                  <Button variant="outline" className="w-full">
                    Member Login
                  </Button>
                </Link>
                <Link href="/register" className="w-full">
                  <Button className="w-full bg-[#FF9933] text-white hover:bg-[#FF9933]/90">
                    Join FAIITA
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
