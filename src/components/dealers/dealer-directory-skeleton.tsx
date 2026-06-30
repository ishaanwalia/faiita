import { Skeleton } from "@/components/ui/skeleton";

export function DealerDirectorySkeleton() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <aside className="hidden w-64 shrink-0 lg:block">
        <Skeleton className="h-[400px] rounded-xl" />
      </aside>
      <div className="flex-1 space-y-5">
        <Skeleton className="h-10 w-full rounded-lg" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-56 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
