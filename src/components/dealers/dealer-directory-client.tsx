"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DealerCard } from "@/components/dealers/dealer-card";
import { Separator } from "@/components/ui/separator";

interface DealerDirectoryClientProps {
  initialDealers: Array<{
    id: string;
    slug: string;
    businessName: string;
    city: string;
    state: string;
    categories: string[];
    brands: string[];
    yearsInBusiness: number | null;
    membershipTier: string;
    verificationStatus: string;
  }>;
  total: number;
  totalPages: number;
  currentPage: number;
  states: string[];
  categories: string[];
  brands: string[];
}

export function DealerDirectoryClient({
  initialDealers,
  total,
  totalPages,
  currentPage,
  states,
  categories,
  brands,
}: DealerDirectoryClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [q, setQ] = useState(searchParams.get("q") || "");
  const [isPending, startTransition] = useTransition();

  const createQueryString = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "" || value === "false") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    return params.toString();
  };

  const updateSearch = (updates: Record<string, string | null>) => {
    startTransition(() => {
      const query = createQueryString(updates);
      router.push(`${pathname}${query ? `?${query}` : ""}`, { scroll: false });
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateSearch({ q, page: null });
    }, 300);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const selectedState = searchParams.get("state") || "";
  const selectedCategory = searchParams.get("category") || "";
  const selectedBrand = searchParams.get("brand") || "";
  const verifiedOnly = searchParams.get("verified") === "true";
  const premiumFirst = searchParams.get("premium") === "true";

  const activeFiltersCount = [
    selectedState,
    selectedCategory,
    selectedBrand,
    verifiedOnly,
    premiumFirst,
  ].filter(Boolean).length;

  const FiltersContent = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="state" className="mb-2 block text-sm font-medium">
          State
        </Label>
        <Select
          value={selectedState}
          onValueChange={(value) => updateSearch({ state: value || null, page: null })}
        >
          <SelectTrigger id="state" className="w-full">
            <SelectValue placeholder="All states" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All states</SelectItem>
            {states.map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="category" className="mb-2 block text-sm font-medium">
          Product Category
        </Label>
        <Select
          value={selectedCategory}
          onValueChange={(value) => updateSearch({ category: value || null, page: null })}
        >
          <SelectTrigger id="category" className="w-full">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="brand" className="mb-2 block text-sm font-medium">
          Brand
        </Label>
        <Select
          value={selectedBrand}
          onValueChange={(value) => updateSearch({ brand: value || null, page: null })}
        >
          <SelectTrigger id="brand" className="w-full">
            <SelectValue placeholder="All brands" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All brands</SelectItem>
            {brands.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="verified"
            checked={verifiedOnly}
            onCheckedChange={(checked) =>
              updateSearch({ verified: checked === true ? "true" : null, page: null })
            }
          />
          <Label htmlFor="verified" className="text-sm font-normal">
            Verified dealers only
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="premium"
            checked={premiumFirst}
            onCheckedChange={(checked) =>
              updateSearch({ premium: checked === true ? "true" : null, page: null })
            }
          />
          <Label htmlFor="premium" className="text-sm font-normal">
            Premium members first
          </Label>
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-muted-foreground"
          onClick={() => {
            setQ("");
            updateSearch({
              state: null,
              category: null,
              brand: null,
              verified: null,
              premium: null,
              page: null,
              q: null,
            });
          }}
        >
          <X className="mr-2 h-4 w-4" />
          Clear all filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      {/* Desktop filters */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="sticky top-24 rounded-xl border bg-card p-5 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 font-semibold text-[#0A2540]">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="ml-auto rounded-full bg-[#FF9933] px-2 py-0.5 text-xs text-white">
                {activeFiltersCount}
              </span>
            )}
          </h2>
          <FiltersContent />
        </div>
      </aside>

      <div className="flex-1">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search dealers, cities, brands..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-10"
            />
          </div>

          <Sheet>
            <SheetTrigger className="lg:hidden">
              <Button variant="outline" className="shrink-0">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && ` (${activeFiltersCount})`}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]">
              <h2 className="mb-4 flex items-center gap-2 font-semibold text-[#0A2540]">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </h2>
              <FiltersContent />
            </SheetContent>
          </Sheet>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{initialDealers.length}</span> of{" "}
            <span className="font-medium text-foreground">{total}</span> dealers
          </p>
          {isPending && (
            <span className="text-sm text-muted-foreground">Updating...</span>
          )}
        </div>

        {initialDealers.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {initialDealers.map((dealer) => (
              <DealerCard key={dealer.id} dealer={dealer} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed py-16 text-center">
            <Search className="mx-auto h-10 w-10 text-muted-foreground/60" />
            <h3 className="mt-4 text-lg font-medium text-[#0A2540]">
              No dealers found
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filters.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage <= 1}
              onClick={() => updateSearch({ page: String(currentPage - 1) })}
            >
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage >= totalPages}
              onClick={() => updateSearch({ page: String(currentPage + 1) })}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
