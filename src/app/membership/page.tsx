import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership | FAIITA",
  description: "FAIITA membership information for state IT associations",
};

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-3xl font-bold text-[#1e3a5f]">Membership Information</h1>
          <p className="mt-4 text-muted-foreground">
            FAIITA is a federation of state-level IT associations. We do not offer direct individual or company memberships.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg p-8 border">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">For State Associations</h2>
            <p className="text-muted-foreground mb-4">
              State IT associations and federations can apply for membership with FAIITA. 
              Each state has one representative on the Governing Body.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ Full voting rights</li>
              <li className="flex items-center gap-2">✓ Governing Body representation</li>
              <li className="flex items-center gap-2">✓ Access to national events</li>
              <li className="flex items-center gap-2">✓ Policy advocacy support</li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block px-4 py-2 bg-[#1e3a5f] text-white rounded-md text-sm hover:bg-[#152d4a] transition-colors"
            >
              Contact for Membership
            </Link>
          </div>

          <div className="bg-white rounded-lg p-8 border">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Indirect Members</h2>
            <p className="text-muted-foreground mb-4">
              Individual IT dealers and companies that are members of state associations 
              affiliated with FAIITA are considered indirect members.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✓ Access to FAIITA events</li>
              <li className="flex items-center gap-2">✓ Industry updates and newsletters</li>
              <li className="flex items-center gap-2">✓ Training program access</li>
              <li className="flex items-center gap-2">✓ No voting rights (through state association)</li>
            </ul>
            <Link
              href="/state-associations"
              className="mt-6 inline-block px-4 py-2 bg-[#2d8a4e] text-white rounded-md text-sm hover:bg-[#236b3d] transition-colors"
            >
              Find Your State Association
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}