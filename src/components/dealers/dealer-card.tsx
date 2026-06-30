import Link from "next/link";
import { MapPin, BadgeCheck, Building2, Calendar, ArrowRight } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DealerCardProps {
  dealer: {
    id: string;
    slug: string;
    businessName: string;
    city: string;
    state: string;
    categories: string[];
    yearsInBusiness: number | null;
    membershipTier: string;
    verificationStatus: string;
  };
}

const tierStyles: Record<string, string> = {
  BASIC: "bg-slate-100 text-slate-700",
  STATE: "bg-blue-100 text-blue-700",
  PREMIUM: "bg-amber-100 text-amber-700",
  NATIONAL: "bg-emerald-100 text-emerald-700",
};

export function DealerCard({ dealer }: DealerCardProps) {
  const tierClass = tierStyles[dealer.membershipTier] ?? tierStyles.BASIC;

  return (
    <Card className="h-full transition-shadow hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="line-clamp-1 text-base font-semibold">
            {dealer.businessName}
          </CardTitle>
          {dealer.verificationStatus === "VERIFIED" && (
            <Badge
              variant="outline"
              className="shrink-0 border-emerald-200 bg-emerald-50 text-emerald-700"
            >
              <BadgeCheck className="mr-1 h-3 w-3" />
              Verified
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span className="line-clamp-1">
            {dealer.city}, {dealer.state}
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className={cn("text-xs font-medium", tierClass)}>
            <Building2 className="mr-1 h-3 w-3" />
            {dealer.membershipTier.charAt(0) + dealer.membershipTier.slice(1).toLowerCase()}
          </Badge>
          {dealer.yearsInBusiness !== null && dealer.yearsInBusiness > 0 && (
            <Badge variant="outline" className="text-xs font-normal">
              <Calendar className="mr-1 h-3 w-3" />
              {dealer.yearsInBusiness} yrs
            </Badge>
          )}
        </div>

        {dealer.categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {dealer.categories.slice(0, 4).map((category) => (
              <span
                key={category}
                className="inline-flex rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {category}
              </span>
            ))}
            {dealer.categories.length > 4 && (
              <span className="inline-flex rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                +{dealer.categories.length - 4}
              </span>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-2">
        <Link
          href={`/directory/${dealer.slug}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "w-full"
          )}
        >
          View Profile
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
