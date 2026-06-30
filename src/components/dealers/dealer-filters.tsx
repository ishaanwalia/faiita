"use client";

import * as React from "react";
import { BadgeCheck, Crown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DealerFiltersProps {
  filters: {
    q: string;
    state: string;
    city: string;
    categories: string[];
    brands: string[];
    verified: boolean;
    premium: boolean;
    page: number;
  };
  onChange: (updates: Partial<DealerFiltersProps["filters"]>) => void;
  onClear: () => void;
  availableCities: string[];
  states: string[];
  categories: string[];
  brands: string[];
}

export function DealerFilters({
  filters,
  onChange,
  onClear,
  availableCities,
  states,
  categories,
  brands,
}: DealerFiltersProps) {
  function toggleCategory(category: string) {
    const next = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onChange({ categories: next });
  }

  function toggleBrand(brand: string) {
    const next = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onChange({ brands: next });
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="h-auto px-2 py-1 text-xs"
        >
          <X className="mr-1 h-3 w-3" />
          Clear
        </Button>
      </div>

      <Separator />

      {/* State */}
      <div className="space-y-2">
        <Label htmlFor="state-filter">State</Label>
        <Select
          value={filters.state || "all"}
          onValueChange={(value) =>
            onChange({ state: value === "all" || value === null ? "" : value })
          }
        >
          <SelectTrigger id="state-filter" className="w-full">
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

      {/* City */}
      <div className="space-y-2">
        <Label htmlFor="city-filter">City</Label>
        {filters.state ? (
          <Select
            value={filters.city || "all"}
            onValueChange={(value) =>
              onChange({ city: value === "all" || value === null ? "" : value })
            }
          >
            <SelectTrigger id="city-filter" className="w-full">
              <SelectValue placeholder="All cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All cities</SelectItem>
              {availableCities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <Input
            id="city-filter"
            placeholder="Select a state first"
            disabled
            className="bg-muted"
          />
        )}
      </div>

      <Separator />

      {/* Verified toggle */}
      <div className="space-y-3">
        <Label className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            Verified only
          </span>
          <Checkbox
            checked={filters.verified}
            onCheckedChange={(checked) =>
              onChange({ verified: checked === true })
            }
          />
        </Label>

        <Label className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5">
            <Crown className="h-4 w-4 text-amber-600" />
            Premium first
          </span>
          <Checkbox
            checked={filters.premium}
            onCheckedChange={(checked) =>
              onChange({ premium: checked === true })
            }
          />
        </Label>
      </div>

      <Separator />

      {/* Categories */}
      <div className="space-y-2">
        <Label>Categories</Label>
        <div className="grid grid-cols-1 gap-2">
          {categories.map((category) => (
            <Label
              key={category}
              className="flex cursor-pointer items-center gap-2 font-normal"
            >
              <Checkbox
                checked={filters.categories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <span className="text-sm">{category}</span>
            </Label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Brands */}
      <div className="space-y-2">
        <Label>Brands</Label>
        <div className="grid max-h-64 grid-cols-1 gap-2 overflow-y-auto pr-1">
          {brands.map((brand) => (
            <Label
              key={brand}
              className="flex cursor-pointer items-center gap-2 font-normal"
            >
              <Checkbox
                checked={filters.brands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <span className="text-sm">{brand}</span>
            </Label>
          ))}
        </div>
      </div>
    </div>
  );
}
