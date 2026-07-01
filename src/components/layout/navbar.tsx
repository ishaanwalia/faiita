"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  LogIn,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About FAIITA", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "State Associations", href: "/state-associations" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    dropdown: [
      { label: "News & Updates", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Membership", href: "/membership" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isDropdownActive = (dropdown: { href: string }[]) => {
    return dropdown.some((item) => pathname.startsWith(item.href));
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#0A2540] flex items-center justify-center">
              <span className="text-white font-bold text-sm">FI</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[#0A2540] font-bold text-sm leading-tight">FAIITA</p>
              <p className="text-[10px] text-gray-400 leading-tight">Federation of All India IT Associations</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {!link.dropdown ? (
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive(link.href)
                        ? "text-[#FF9933] bg-[#FF9933]/5"
                        : "text-gray-600 hover:text-[#0A2540] hover:bg-gray-50"
                    )}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        isDropdownActive(link.dropdown) || openDropdown === link.label
                          ? "text-[#FF9933] bg-[#FF9933]/5"
                          : "text-gray-600 hover:text-[#0A2540] hover:bg-gray-50"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          openDropdown === link.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                              "flex items-center px-4 py-2.5 text-sm transition-colors",
                              isActive(item.href)
                                ? "text-[#FF9933] bg-[#FF9933]/5 font-medium"
                                : "text-gray-600 hover:text-[#0A2540] hover:bg-gray-50"
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive("/login")
                    ? "text-[#FF9933] bg-[#FF9933]/5"
                    : "text-gray-600 hover:text-[#0A2540]"
                )}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Member Login
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-[#FF9933] hover:bg-[#e68a2e] text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#FF9933]/20"
              >
                <Shield className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {!link.dropdown ? (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "text-[#FF9933] bg-[#FF9933]/5"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div className="space-y-1">
                    <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {link.label}
                    </p>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-lg text-sm transition-colors ml-2",
                          isActive(item.href)
                            ? "text-[#FF9933] bg-[#FF9933]/5 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3 space-y-2">
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full justify-start text-sm">
                  <LogIn className="w-4 h-4 mr-2" />
                  Member Login
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-[#FF9933] hover:bg-[#e68a2e] text-white text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
