"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Users,
  FileText,
  Newspaper,
  Calendar,
  Image as ImageIcon,
  LogIn,
} from "lucide-react";

const aboutLinks = [
  { href: "/about", label: "About FAIITA", icon: Building2 },
  { href: "/about#constitution", label: "Constitution", icon: FileText },
  { href: "/about#leadership", label: "Leadership", icon: Users },
  { href: "/state-associations", label: "State Associations", icon: Users },
];

const resourcesLinks = [
  { href: "/news", label: "News", icon: Newspaper },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/gallery", label: "Gallery", icon: ImageIcon },
];

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "About",
    href: "/about",
    dropdown: aboutLinks,
  },
  {
    label: "Resources",
    href: "/news",
    dropdown: resourcesLinks,
  },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1e3a5f] text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d8a4e] font-bold text-lg">
              F
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold leading-tight">FAIITA</div>
              <div className="text-[10px] text-gray-300 leading-tight">
                Federation of All India IT Associations
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-white/10 text-white"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-lg bg-white py-2 shadow-xl ring-1 ring-black/5">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f]"
                      >
                        <item.icon className="h-4 w-4 text-[#2d8a4e]" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Login */}
            <Link
              href="/login"
              className="ml-2 flex items-center gap-2 rounded-md bg-[#2d8a4e] px-4 py-2 text-sm font-medium text-white hover:bg-[#236b3d] transition-colors"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-white/10"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#1e3a5f]">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => !link.dropdown && setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium",
                    isActive(link.href)
                      ? "bg-white/10 text-white"
                      : "text-gray-200 hover:bg-white/10"
                  )}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                      >
                        <item.icon className="h-4 w-4 text-[#2d8a4e]" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 mt-3 rounded-md bg-[#2d8a4e] px-3 py-2.5 text-sm font-medium text-white"
            >
              <LogIn className="h-4 w-4" />
              Member Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}