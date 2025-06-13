import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      {/* Summary Header Section */}
      <section className="mb-8 flex justify-between items-center">
        <Skeleton className="h-9 w-[200px]" />
        <Skeleton className="h-9 w-[150px]" />
      </section>

      {/* Trends Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-[150px]" />
        ))}
      </section>

      {/* Transactions Header */}
      <section className="flex justify-between items-center">
        <Skeleton className="h-7 w-[150px]" />
        <Skeleton className="h-9 w-[100px]" />
      </section>

      {/* Transaction List Area */}
      <section>
        <Skeleton className="h-[400px] w-full" />
      </section>
    </div>
  )
}