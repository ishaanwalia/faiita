import Link from "next/link";

const footerLinks = {
  Organization: [
    { label: "About FAIITA", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "State Associations", href: "/state-associations" },
    { label: "Contact", href: "/contact" },
  ],
  Members: [
    { label: "Dealer Directory", href: "/directory" },
    { label: "Membership", href: "/membership" },
    { label: "Join FAIITA", href: "/register" },
    { label: "Member Login", href: "/login" },
  ],
  Resources: [
    { label: "News & Insights", href: "/news" },
    { label: "Events", href: "/events" },
    { label: "Advocacy", href: "/advocacy" },
    { label: "Annual Reports", href: "/about#reports" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-[#0A2540] text-white">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FF9933]">
                <span className="text-lg font-bold text-white">F</span>
              </div>
              <span className="text-xl font-bold">FAIITA</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Federation of All India IT Associations — uniting 50,000+ IT
              entrepreneurs across 25 states, driving growth in Retail,
              Distribution, Services & Solutions.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#FF9933]">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} FAIITA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-white/60 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/60 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
